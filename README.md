# free-oracle-minecraft-server
A guide on setting up a free 24/7 minecraft server.


This guide follows [this blog post](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud) by Oracle, with a couple adjustments to make your life easier. If you notice the blog is out of date, post a git issue. 


### Make A Free Oracle Account
The first thing you need to do to setup a free minecraft server is create an Oracle Free Tier account. 

![Free Tier Account Photograph](media/image.png)

Follow the above guide for this. 

#### Upgrade to a Paid Account (Optional)
This step is optional but strongly recommended. It will make the [creating a virtual machine](README.md#creating-the-virtual-machine) step much simpler and it will be essentially instant. 

Why are we doing this? Because for all basic free tier accounts, theres a limit on how many free-tier servers can exist. If you upgrade, then Oracle will consider you a paying customer, and let you make the instance. 

There are some prerequestites of this step. 
- Access to a debit card from a bank account
- You have at least $100 or the equivalent in your local currency, in said bank account

It requires you to have $100 worth within a bank account, the transaction is temporary and gets cancelled on Oracle's side once they confirm your account to have this money. 

The transaction WILL NOT deduct any money from your account when cancelled. 

This is a precautionary measure on Oracle's side to demonstrate that your account would be able to pay for any running costs. If you stick to their free tier of resources and use them within the predefined limits, they won't actually charge you (unless something was configured incorrectly). 

### Creating the Virtual Machine
Create a Virtual Machine with the settings seen in the blog post. 

### Connecting to a Virtual Machine
Recommended tools to use: 
- putty (Windows)

Recommended commands to use:
- screen
- sh
- crontab (optional)
- wget / curl


- find the server files and download via wget
	- https://www.curseforge.com/minecraft/modpacks/vault-hunters-1-18-2/files/5413446
- unzip via unzipping tool (have to download first)



### Setting up the Minecraft Server

If it is a modded server, make sure to install whatever version of Forge or Fabric of whatnot that is used as the backbone of the server. 
Since we are doing this from the command line, make sure to install these applications to create a server. You need to tell it in the command line that you are installing a server. 

If you do install Forge or Fabric, it will likely be a .jar. These have a separate way of extracting, separate from how zips work. 

#### Installing links via the internet
To install a link via the internet, you need to type in the following command into the terminal. 

```unix
wget [linkToObject]
```

You need to be careful to give a link to the documents being hosted, instead of the link to a download page. Lots of download pages are pages that will download a file that is stored somewhere else on the internet. 
You will know you have the correct link if it ends with a '.zip' or '.7z' at the end. Beware '.zip' has started to be used as a domain so be careful if you end up on a website ending with '.zip'.

#### Installing the Version
First, you need to find the version of minecraft you want to install. You want to specifically find the server files that you are going to install, and then you install them using 'wget [link]' command mentioned above. 

#### Installing the Backbone
If you are not using mods, then you can skip this step. 

Now, find the modpack you want to install on a website like Curseforge or Modrinth, and install it via the same process as before. This will likely be zipped. 

You have to install a package that will let you unzip files from the command line. 
Install it via:

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





# Links

- oracle
	- oracle sign in - https://www.oracle.com/uk/cloud/sign-in.html
- tutorial to follow for oracle section
	- yt tutorial - https://www.youtube.com/watch?v=0kFjEUDJexI
	- old oracle tutorial, mostly up to date - https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud#create-a-virtual-machine-instance
