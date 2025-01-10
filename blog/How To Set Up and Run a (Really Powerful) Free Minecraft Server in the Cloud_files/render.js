/* globals define,console,Promise */
define([
	"jquery",
	"mustache",
	"text!./layout.html",
	"css!./design.css",
	'knockout'
], function ($, Mustache, templateHtml, css, ko) {
	"use strict";

	// Content Layout constructor function.
	function ContentLayout(params) {
		this.contentItemData = params.contentItemData || {};
		this.scsData = params.scsData;
		this.contentClient = params.contentClient;
		// Backward compatibility for v1 API
		this.contentItemData.fields = this.contentClient.getInfo().contentVersion === 'v1' ? this.contentItemData.data : this.contentItemData.fields;
	}

	function getRefItems(contentClient, reqObj) {
		// Calling getItems() with no ‘ids’ returns all items.
		// If no items are requested, just return a resolved Promise.
		if (!reqObj) {
			return Promise.resolve({});
		} else {
			return contentClient.searchItems(reqObj);
		}
	}
	function getProperties() {
		var PreviousPostProperty,
			NextPostProperty;
		if (typeof SCSRenderAPI.getCustomSiteProperty('PreviousPostText') !== "undefined" && document.getElementById("PreviousPostText") && SCSRenderAPI.getCustomSiteProperty('PreviousPostText') != '') {
			PreviousPostProperty = SCSRenderAPI.getCustomSiteProperty('PreviousPostText');
			document.getElementById("PreviousPostText").innerHTML = PreviousPostProperty;
		} else if (document.getElementById("PreviousPostText")) {
			document.getElementById("PreviousPostText").innerHTML = 'Previous Post';

		}
		if (typeof SCSRenderAPI.getCustomSiteProperty('NextPostText') !== "undefined" && document.getElementById("NextPostText") && SCSRenderAPI.getCustomSiteProperty('NextPostText') != '') {

			NextPostProperty = SCSRenderAPI.getCustomSiteProperty('NextPostText');
			document.getElementById("NextPostText").innerHTML = NextPostProperty;
		} else if (document.getElementById("NextPostText")) {
			document.getElementById("NextPostText").innerHTML = 'Next Post';

		}
	}

	async function getAuthorDetails(authorIds) {
		let authors = {};
		if (authorIds && authorIds.length > 0) {
			var channelToken = window.SCS.siteInfo.properties.channelAccessTokens ? window.SCS.siteInfo.properties.channelAccessTokens[0].value : "";
			if (!channelToken)
				self.displayError(true);
			  await $.ajax({
				type: 'GET',
				url: `${window.location.origin}/content/published/api/v1.1/items?q=${('id eq "' + authorIds.join('" or id eq "') + '"')}&links=none&channelToken=${channelToken}&cb=${SCSCacheKeys.caas}`,
				dataType: 'json',
				'headers': {
					'Authorization': self.authorization
				}
			}).done(function (res) {
				authors = res.items;
			}).fail(function (jqXHR, textStatus, errorThrown) {
				console.error("Unable to get Author Details ", jqXHR, textStatus, errorThrown);
			});
		}
		return authors;
	};

	// Content Layout definition.
	ContentLayout.prototype = {
		// Specify the versions of the Content REST API that are supported by the this Content Layout.
		// The value for contentVersion follows Semantic Versioning syntax.
		// This allows applications that use the content layout to pass the data through in the expected format.
		contentVersion: ">=1.0.0 <2.0.0",
		render: function (parentObj) {
			var template,
				content = $.extend({}, this.contentItemData),
				contentClient = this.contentClient,
				fields = this.contentItemData.fields,
				contentType,
				secureContent = false;

			// If used with CECS Sites, Sites will pass in context information via the scsData property.
			if (this.scsData) {
				content = $.extend(content, { "scsData": this.scsData });
				contentType = content.scsData.showPublishedContent === true ? "published" : "draft";
				secureContent = content.scsData.secureContent;
			}

			// Support both v1.0 and v1.1 Content REST API response formats.
			// User-defined fields are passed through the 'data' property in v1.0 and 'fields' property in v1.1.
			var data = !contentClient.getInfo().contentVersion || contentClient.getInfo().contentVersion === "v1" ? content.data : content.fields;

			// Massage the data so that the 'fields' property is always there.
			// The corresponding layout.html template only checks for the ‘fields’ property. 
			if (!contentClient.getInfo().contentVersion || contentClient.getInfo().contentVersion === "v1") {
				content["fields"] = content.data;
			}


			var publishDateValue = (data["publish_date"] && data["publish_date"].value) ? data["publish_date"].value : "";

			window.SCSMacros = window.SCSMacros || {};
			window.SCSMacros.blogFilter = publishDateValue;
			//console.log("publish date inside renderjs: " + window.SCSMacros.blogFilter);
			var self = this;
			var SitesSDK = this.scsData.SitesSDK;
			self.publishDate = ko.observable('');

			
			self.publishDate.subscribe(function () {
				SitesSDK.publish(SitesSDK.MESSAGE_TYPES.TRIGGER_ACTIONS, {
					'triggerName': 'setPublishDate', // can be any value
					'triggerPayload': [{
						payloadData: window.SCSMacros.blogFilter // update the additional query string to the latest value if the content list has already rendered
					}],
					'actions': ['getPublishDate']
				});
			});

			self.publishDate(publishDateValue);

			var prevReqObj = {
				'q': '(type eq \"Blog-Post\" AND fields.publish_date lt \"' + self.publishDate() + '\")',
				'limit': 1,
				'orderBy': 'fields.publish_date:des',
				'links': 'none'
			}
			var nextReqObj = {
				'q': '(type eq \"Blog-Post\" AND fields.publish_date gt \"' + self.publishDate() + '\")',
				'limit': 1,
				'orderBy': 'fields.publish_date:asc',
				'links': 'none'
			}
			// If any referenced items exist, fetch them before we render.
			Promise.all([
				// updateContentURLs(contentClient, data["body"]),
				getRefItems(contentClient, prevReqObj),
				getRefItems(contentClient, nextReqObj)
			]).then(async function (results) {

				if (results.length > 0) {
					var fieldsObj = {
						nextPostTitle: results[1] && results[1].items.length > 0 && results[1].items[0].fields.title ? results[1].items[0].fields.title : "",
						prevPostTitle: results[0] && results[0].items.length > 0 && results[0].items[0].fields.title ? results[0].items[0].fields.title : "",
						nextPostTimeToRead: results[1] && results[1].items.length > 0 && results[1].items[0].fields.time_to_read ? results[1].items[0].fields.time_to_read : "",
						prevPostTimeToRead: results[0] && results[0].items.length > 0 && results[0].items[0].fields.time_to_read ? results[0].items[0].fields.time_to_read : "",
						nextPostAuthorLink: "placeholder.html",
						prevPostAuthorLink: "placeholder.html",
					}
				}
				var authorandSlug = {
					nextPostAuthorId: results[1] && results[1].items.length > 0 && results[1].items[0].fields.author[0].id,
					prevPostAuthorId: results[0] && results[0].items.length > 0 && results[0].items[0].fields.author[0].id,
					nextPostSlug: results[1] && results[1].items.length > 0 && results[1].items[0].slug,
					prevPostSlug: results[0] && results[0].items.length > 0 && results[0].items[0].slug
				}
				let authorDetails = await getAuthorDetails([authorandSlug.prevPostAuthorId,authorandSlug.nextPostAuthorId]);
				let href = window.location.pathname.split('/')
				href.splice(href.length - 2, 2)
				authorDetails.forEach(authorItem => {
					if (authorItem.id === authorandSlug.prevPostAuthorId) {
						fieldsObj["prevPostLink"] = href.join('/').concat("/post/", authorandSlug.prevPostSlug);
						fieldsObj["prevPostAuthorLink"] = href.join('/').concat("/authors/", authorItem.slug);
						fieldsObj["prevPostAuthor"] = authorItem.fields.first_name+ " " +authorItem.fields.last_name;
					} 
					if (authorItem.id === authorandSlug.nextPostAuthorId) {
						fieldsObj["nextPostLink"] = href.join('/').concat("/post/", authorandSlug.nextPostSlug);
						fieldsObj["nextPostAuthorLink"] = href.join('/').concat("/authors/", authorItem.slug);
						fieldsObj["nextPostAuthor"] = authorItem.fields.first_name+ " " +authorItem.fields.last_name;
					}
				});
				content["fields"] = { ...fieldsObj};
				

				try {
					// Use Mustache to expand the HTML template with the data.
					template = Mustache.render(templateHtml, content);

					// Insert the expanded template into the passed in container.
					if (template) {
						$(parentObj).append(template);
						getProperties();
					}

				} catch (e) {
					console.error(e.stack);
				}
			});
		}
	};

	return ContentLayout;
});