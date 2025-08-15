# Post Installation

## Connecting to the Server

### Using a DNS

If you have bought a Domain name, say from Cloudflare, you will be able to setup DNS records to your public IP address, and instead of joining via IP, you will be able to 

## Running Backups

See [backups](./crontab-backups.md)

## Moderation

Things to be aware of:

- Server Seeker
- OP / DEOP
- Banning

### [Server Seeker](https://github.com/Funtimes909/ServerSeekerV2-Discord-Bot)

Server Seeker is a bot that automatically searches for Minecraft servers on the default port. Random people will join you if you are not careful

There are various ways to deal with server seeker. The best is to simply change your port to not be the default Java port, from 25565 to another random port.
Then, to ensure you don't want random people joining, go to `server.properties` and set `whitelist` as true.
This does increase the amount of work needed to allow others to join, however it does create an aspect of safety.

If you do not want to do this, then I recommend not having a base anywhere near world spawn.
If your base is near world spawn, griefers will be able to join and ruin your progress.

### OP: Operator

Operators are administrators and have access to most commands like set daytime.
See <https://minecraft.wiki/w/Commands/op> for more details.

To stop a player from being an OP, you can run DEOP.

### Banning Users

You can ban users per Playername and IP Address.
Banning per IP address can simply be done if you know their name and they are logged into the game.
If they are not logged into the game, you would have to find out their IP address through the server's logs.

## Tools

- <https://mcsrvstat.us/>: Lets you check server status remotely (if your server is available publicly)

## Other Important Commands

- [team](https://minecraft.wiki/w/Commands/team)  : make teams in minecraft, this is how aesthetic ranks exist are made, like `[ADMIN]` and the like
- [scoreboard](https://minecraft.wiki/w/Commands/scoreboard)  : scoreboards, how servers can display missions on the side of the screen, eg Hypixel
