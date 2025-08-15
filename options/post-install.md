# Post Installation

## Connecting to the Server

### Using a DNS

If you have bought a Domain name, say from Cloudflare,
you will be able to setup DNS records to your public IP address,
and instead of joining via IP,
you will be able to

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

~~~

## After it is set up

Since you have now set up the server, you probably want it to run without your action. You can do this in 2 ways.

1. Setting up a bash script that runs automatically.
2. Manually starting the server when it goes down, but using screen.

### 1 Cron / Bash Scripts

To set up a bash script that runs automatically, you use a tool called cron. Cron schedules certain things to run in the background if you set it up correctly. It is complicated, and more effort than the next option.

Below are links that you can use to help you learn cron. If I ever do cron for my server, this section will be updated with a proper guide.

- cron
  - cron - <https://help.ubuntu.com/community/CronHowto>
  - shell scripts - <https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/>
  - <https://askubuntu.com/questions/1226900/how-do-i-set-up-a-mc-server-to-restart-and-backup-at-6am-every-day>

### 2 Screen

This is the simpler way of doing this, but there is no automation to it, so if your server crashes you will have to log in to reactivate it.

What it basically simulates is tabs or windows of an application on the server side, so you can have a terminal window running a web server, and another a ftp server, and another working as a firewall for example. These will run in the background so long as the server is active, hence the analogy of tabs.

After you connect to your server via ssh, you can run the command 'screen'.

Alternatively, navigate to your server's directory and simply run 'screen run.sh', this will start the server in a new screen.

Both of these create a second window that you can detaching from the terminal later on with 'ctrl-a d'.
Detaching is basically putting it in the background and it will work by itself.

When you want to check up on it, you can use two commands to rejoin this screen.

`screen -ls` will display all screens that haven't been killed (ie ongoing screens),
and then `screen -r [abcde]` where abcde is a number that 'screen -ls' showed you that identifies a specific screen instance.
You can also name it by using the command `screen -S name`, and you can use the name to reattach to later on.

Now you can check up on the screen, see what has been running, and so on.

To stop a screen instance, you can kill it in a simlar method to detaching it.
The specifics are

- screen
  - screen - <https://linuxize.com/post/how-to-use-linux-screen/>
  -

- vim
  - <https://linuxize.com/post/how-to-save-file-in-vim-quit-editor/>

# Links

- oracle
  - oracle sign in - <https://www.oracle.com/uk/cloud/sign-in.html>
- tutorial to follow for oracle section
  - yt tutorial - <https://www.youtube.com/watch?v=0kFjEUDJexI>
  - old oracle tutorial, mostly up to date - <https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud#create-a-virtual-machine-instance>
