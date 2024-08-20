# free-oracle-minecraft-server
A guide on setting up a free 24/7 minecraft server


- oracle
	- oracle sign in - https://www.oracle.com/uk/cloud/sign-in.html
- tutorial to follow for oracle section
	- yt tutorial - https://www.youtube.com/watch?v=0kFjEUDJexI
	- old oracle tutorial, mostly up to date - https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud#create-a-virtual-machine-instance

### Make A Free Oracle Account


#### Upgrade to a Paid Account (Optional)
This step is optional but recommended. 

### Creating the Virtual Machine
Create a Virtual Machine with these settings

### Connecting to a Virtual Machine
Recommended tools to use: 
- putty (Windows)

Recommended commands to use:
- screen
- sh
- crontab (optional)



- find the server files and download via wget
	- https://www.curseforge.com/minecraft/modpacks/vault-hunters-1-18-2/files/5413446
- unzip via unzipping tool (have to download first)



### Setting up the Minecraft Server
If it is a modded server, make sure to install whatever version of Forge or Fabric of whatnot that is used as the backbone of the server. 

#### Installing links via the internet
To install a link via the internet, you need to type in the following command into the terminal. 

```unix
wget [linkToObject]
```

You need to be careful to give a link to the documents being hosted, instead of the link to a download page. Lots of download pages are pages that will download a file that is stored somewhere else on the internet. 

#### Installing the Version
First, you need to find the version of minecraft you want to install. You want to specifically find the server files that you are going to install, and then you install them using 'wget [link]' command mentioned above. 

#### Installing the Backbone
If you are not using mods, then you can skip this step. 



Then unzip the zip file. 

#### Running the server. 
On Linux, you can run the server by navigating to the directory you unzipped the files into, and typing in the command:
'sh run.sh'

'run.sh' is a bash file, and you can run these files with the sh command like above. 

### After it is set up:
Since you have now set up the server, you probably want it to run without your action. You can do this in 2 ways. 

1. Setting up a bash script that runs automatically. 
2. Manually starting the server when it goes down, but using screen. 

#### 1 Cron / Bash Scripts
To set up a bash script that runs automatically, you use a tool called cron. Cron schedules certain things to run in the background if you set it up correctly. It is complicated, and more effort than the next option. 

Below are links that you can use to help you learn cron. If I ever do cron for my server, this section will be updated with a proper guide. 

- cron
	- cron - https://help.ubuntu.com/community/CronHowto
	- shell scripts - https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/
	- https://askubuntu.com/questions/1226900/how-do-i-set-up-a-mc-server-to-restart-and-backup-at-6am-every-day

#### 2 Screen
This is the simpler way of doing this, but there is no automation to it, so if your server crashes you will have to log in to reactivate it. 

What it basically simulates is tabs or windows of an application on the server side, so you can have a terminal window running a web server, and another a ftp server, and another working as a firewall for example. 

After you connect to your server via ssh, you can run the command 'screen'.

Alternatively, navigate to your server's directory and simply run 'screen run.sh', this will start the server in a new screen.

Both of these create a second window that you can detaching from the terminal later on with 'ctrl-a d'. 
Detaching is basically putting it in the background and it will work by itself. 

When you want to check up on it, you can use two commands to rejoin this screen. 

'screen -ls' will display all screens that haven't been killed (ie ongoing screens), 
and then 'screen -r abcde' where abcde is a number that 'screen -ls' showed you that identifies a specific screen instance. 

Now you can check up on the screen, see what has been running, and so on. 

To stop a screen instance, you can kill it in a simlar method to detaching it. 


- screen
	- screen - https://linuxize.com/post/how-to-use-linux-screen/
	- 


- vim
	- https://linuxize.com/post/how-to-save-file-in-vim-quit-editor/

