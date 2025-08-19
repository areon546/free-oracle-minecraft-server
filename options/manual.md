# Manually setting up a Minecraft Server

## Downloading Required Resources

To download the required resources, you are going to have to find the actual download links that the browser uses to initiate the connection. This process varies based on the site, most sites make it as simple as the `Download` button being a link to the download. Curseforge instead hides the download link, however more is shown in [setting up a modded server](#setting-up-a-modded-server).

However, ultimately pressing `Right Click` and then clicking on `Copy URL` to links start a download, will work. Make sure to double check it is the correct download link.

### Setting up a Modded Server

Once you have the download links, depending on whether you want to do a modded server or not, you will have a variable time.
The easiest thing to do is just to setup a vanilla server. If you want to however have a modded server, eg Forge, Fabric, or otherwise, guides are available through the below link.

- [How to setup a Modded server](./modded.md)

### Where can I find the Server Files?

- [Vanilla Server Files](https://mctimemachine.com/)
- [Server file for Most Recent Version](https://minecraft.net/download/server)

Find the relevant version of minecraft you want to install, and copy the download link.
Then download it with `wget` or `curl`:

```unix
wget [linkToObject]
```

```unix
curl -o [fileName] [linkToObject]
```

You need to be careful to give a link to the documents being hosted, instead of the link to a download page. Lots of download pages are pages that will download a file that is stored somewhere else on the internet.
You will know you have the correct link if it ends with a '.zip' or '.7z' at the end. Beware '.zip' has started to be used as a domain so be careful if you end up on a website ending with '.zip'.

## Setting Up and Running the Server

The below command starts the minecraft server. It is helpful to write this in a bash script, and then save that to be able to run it easily.

```
java -Xmx1024M -Xms1024M -jar `server.jar` nogui
```

Replace `server.jar` with whatever the name of your server file is, if you download it directly from minecraft using `wget`, it will by default be called `server.jar`. If you only have `curl`, it will be saved to whatever file name you chose.

I think are these are the two most notable arguments and:

- `--help`    : display options
- `--port`    : overwrites `server.properties` server-port, the easiest way to set the port of the server temporarily, or using scripts

Other arguments that may be beneficial can be found here: <https://minecraft.wiki/w/Server.jar#Command-line_options>

## Now What?

Now that you are able to actually run the server, have a look at [what to do after you have a server](./options/post-install.md)
