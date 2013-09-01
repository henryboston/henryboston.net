---
title: Create your own node.js server!
subtitle: Building My Own Personal Node.js Web Server
date: 2013-08-31 22:20
author: Henry Boston
template: article.jade
---
## Building My Own Personal Node.js Web Server

My parents had an old computer lying around unusued.  They let me take it hack home with me. I thought to myself "Henry, what can I use this computer for?". I've always wanted to setup my own personal web server and am even more eager to
gain experience with [Node.JS][1].

### Removing Windows and Intsalling Linux
First things first I had to wipe Windows XP off the machine and install a linux distribution. The criteria I identifed while researching which OS to choose is as follows:

*   I wanted something light weight because the hardware on the machine is old and outdated
*   No GUI interface as It will force me to use the terminal and become more familair with linux commands
*   Well maintained and supported so I can install various open source software without too much of a hassle setting up the server

I have my own [VPS][2] with [CentOS][3] which gives me the advantage of working experience, but I have run into some issues installing node on my VPS before so this ruled out CentOS.

Next I looked at [Ubuntu Server][4] as I've used it before working as a student assistant system administrator for the University of North Texas. It's extremely well maintained and fit all of my other criteria.

I decided to go ahead with Ubuntu Server.  I followed these instructions to [install Ubuntu Server from a USB flash drive][5].  Once the USB drive was complete I simply inserted it into the computer and rebooted.  I changed the boot order so the computer booted from the USB drive first.  Then I simply went through the installer.  I made sure to download the Basic Ubuntu Server, OpenSSH server, DNS server, and LAMP server software collections.

After a lengthy install process Ubuntu Server was sucessfully setup on the machine and Windows was gone forever!

### Installing Node.JS

Once Ubuntu Server was sucessfully installed the next step was to install node.js and all of it's dependecies.
```bash
  sudo apt-get install g++ curl libssl-dev apache2-utils
  sudo apt-get install git-core
```
The run the following commands
```bash
  git clone git://github.com/ry/node.git
  cd node
  ./configure
  make
  sudo make install
```

And Voila, you should have node.js sucesfully installed.  To test create this simple hello world file.
```bash
  vim helloworld.js
```
helloworld.js should look like this:
```bash
 console.log("Hello World, NODE IS THE BEST!");
```
Save the file and quit out of vim by pressing ``:wq!`` Now try ``node helloworld.js`` If the text is printed to the console you have sucessfully installed node.js! YAY, do a happy dance!




[1]: http://nodejs.org/
[2]: http://en.wikipedia.org/wiki/Virtual_private_server
[3]: http://www.centos.org/
[4]: http://www.ubuntu.com/download/server
[5]: http://www.pendrivelinux.com/run-ubuntu-server-edition-installer-from-usb/
