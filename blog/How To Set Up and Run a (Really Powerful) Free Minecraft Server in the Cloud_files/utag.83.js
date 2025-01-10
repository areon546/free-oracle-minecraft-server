//tealium universal tag - utag.83 ut4.0.202412161843, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){if(document){var styles=".oda-chat-button{display: none !important;}";var styleSheet=document.createElement("style")
styleSheet.type="text/css"
styleSheet.innerText=styles
document.head.appendChild(styleSheet)
try{const chatBtn=document.querySelector(".ochat");if(chatBtn&&utag_data['meta.countryid'].toLowerCase()=='us'){chatBtn.addEventListener("click",function(){Bots.openChat();});}
if((location.hostname=="www.oracle.com"||location.hostname=="www-sites.oracle.com"||location.hostname=="www-stage.oracle.com")&&chatBtn){if(utag_data['meta.language'].toLowerCase()=='en'||utag_data['meta.countryid'].toLowerCase()=='bg'||utag_data['meta.countryid'].toLowerCase()=='cz'||utag_data['meta.countryid'].toLowerCase()=='dz'||utag_data['meta.countryid'].toLowerCase()=='gr'||utag_data['meta.countryid'].toLowerCase()=='hr'||utag_data['meta.countryid'].toLowerCase()=='lv'||utag_data['meta.countryid'].toLowerCase()=='ma'||utag_data['meta.countryid'].toLowerCase()=='ro'||utag_data['meta.countryid'].toLowerCase()=='se'||utag_data['meta.countryid'].toLowerCase()=='ua'||utag_data['meta.countryid'].toLowerCase()=='be'){chatBtn.addEventListener("click",function(){Bots.openChat();});}}
if((location.hostname=="www.oracle.com"||location.hostname=="www-sites.oracle.com"||location.hostname=="www-stage.oracle.com")&&chatBtn){if(utag_data['meta.countryid'].toLowerCase()=='br'||utag_data['meta.countryid'].toLowerCase()=='mx'||utag_data['meta.countryid'].toLowerCase()=='ar'||utag_data['meta.countryid'].toLowerCase()=='cr'||utag_data['meta.countryid'].toLowerCase()=='co'||utag_data['meta.countryid'].toLowerCase()=='cl'||utag_data['meta.countryid'].toLowerCase()=='lad'||utag_data['meta.countryid'].toLowerCase()=='pe'){const chatBtns=document.querySelectorAll(".ochat");chatBtns.forEach(function(cBtn){cBtn.addEventListener("click",function(){Bots.openChat();});});}}
if((location.hostname=="www.oracle.com"||location.hostname=="www-sites.oracle.com"||location.hostname=="www-stage.oracle.com")&&chatBtn){if(utag_data['meta.countryid'].toLowerCase()=='fr'||utag_data['meta.countryid'].toLowerCase()=='lu'||utag_data['meta.countryid'].toLowerCase()=='africa-fr'||utag_data['meta.countryid'].toLowerCase()=='sn'||utag_data['meta.countryid'].toLowerCase()=='ch-fr'||utag_data['meta.countryid'].toLowerCase()=='at'||utag_data['meta.countryid'].toLowerCase()=='de'||utag_data['meta.countryid'].toLowerCase()=='ch-de'||utag_data['meta.countryid']=='CA'){const chatBtns=document.querySelectorAll(".ochat");chatBtns.forEach(function(cBtn){cBtn.addEventListener("click",function(){Bots.openChat();});});const ochatCbtn=document.getElementById("ochat-cbtn");ochatCbtn.addEventListener("click",function(){Bots.openChat();});}}
if((location.hostname=="www.oracle.com"||location.hostname=="www-sites.oracle.com"||location.hostname=="www-stage.oracle.com")&&chatBtn){if(utag_data['meta.countryid'].toLowerCase()=='it'||utag_data['meta.countryid'].toLowerCase()=='nl'||utag_data['meta.countryid'].toLowerCase()=='pt'||utag_data['meta.countryid'].toLowerCase()=='uy'||utag_data['meta.countryid'].toLowerCase()=='bz'){const chatBtns=document.querySelectorAll(".ochat");chatBtns.forEach(function(cBtn){cBtn.addEventListener("click",function(){Bots.openChat();});});const ochatCbtn=document.getElementById("ochat-cbtn");ochatCbtn.addEventListener("click",function(){Bots.openChat();});}}}catch(e){console.log(e)}}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
var sdkPath="https://www.oracle.com/asset/web/js/web-sdk.js";var settingsPath="https://www.oracle.com/asset/web/js/settings-v2.js";if(location.hostname==="blogs-stage.oracle.com"){sdkPath="https://www-sites.oracle.com/asset/web/js/web-sdk.js";settingsPath="https://www-sites.oracle.com/asset/web/js/settings-v2.js";}
require([sdkPath],function(WebSDK){if(window.WebSDK===undefined){window.WebSDK=WebSDK;}
require([settingsPath],function(){console.log("file loaded");console.log(typeof initSdk);if(typeof initSdk=="function"){initSdk("Bots");};});});}};utag.o[loader].loader.LOAD(id);})("83","oracle.main");}catch(error){utag.DB(error);}
