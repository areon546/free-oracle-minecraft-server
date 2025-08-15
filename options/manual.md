# Manually setting up a Minecraft Server

## Downloading Required Resources

To download the required resources, you are going to have to find the actual download files. This process varies based on the site,
however the most reliable way is to go to the download link, and then find the link in the HTML page for the download.

Once you have the links, depending on whether you want to do a modded server or not, you will have a variable time.
The easiest thing to do is just to setup a vanilla server. If you want to however have a modded server, eg Forge, Fabric, or otherwise, guides will be linked below.

- [How to setup a Modded server](./modded.md)

### Downloading Files

Once you have the required links for the minecraft server you want to actually download them on your server.

To install a link via the internet, you have a choice of commands you can use. At least one of these should be available.
<!-- TODO finish section -->
need to type in the following command into the terminal.

```unix
wget [linkToObject]
```

```unix
curl -o [fileName] [linkToObject]
```

You need to be careful to give a link to the documents being hosted, instead of the link to a download page. Lots of download pages are pages that will download a file that is stored somewhere else on the internet.
You will know you have the correct link if it ends with a '.zip' or '.7z' at the end. Beware '.zip' has started to be used as a domain so be careful if you end up on a website ending with '.zip'.

## Setting up the Server

You can get servers for older versions [here](https://mctimemachine.com/), however minecraft also showcases the most recent server file [here](https://minecraft.net/download/server).

First find the version of minecraft you want to install, and copy the download link.
Then download it with `wget` or `curl`.

## Running the Server

The below command starts the minecraft server. It is helpful to write this in a bash script, and then save that to be able to run it easily.

```
java -Xmx1024M -Xms1024M -jar server.jar nogui
```

Other arguments that may be beneficial can be found here: <https://minecraft.wiki/w/Server.jar>

However what I think are the two most noteable ones are below:

- --help    : display options
- --port    : set port the server binds to, overwrites `server.properties`

## Now What?

Now that you are able to actually run the server, have a look at [what to do after you have a server](./options/post-install.md)
