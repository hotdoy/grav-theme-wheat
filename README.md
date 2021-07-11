# Wheat theme for Grav CMS.

[![Discord](https://img.shields.io/discord/501836936584101899.svg?logo=discord&colorB=728ADA&label=Discord%20Chat)](https://chat.getgrav.org)
[![Get Grav](https://img.shields.io/badge/get-grav-blueviolet)](https://getgrav.org/downloads)

[Live demo](https://getwheat.ca/)

## Description (WIP)

Wheat is a starter theme for Grav CMS. It contains common patterns used by Calotte, a Snipcart integration allowing you to sell physical or digital products in minutes, commonly used libraries for animating elements and text on scroll (with exemples) and a neat little thing called DOMstate to expose various states of the document you can then use with CSS for a modern and app like feel.
It uses no build tool, no framework of any kind, only needs a basic LAMP setup, uses Github Actions for automatic deployment and only takes a couple of minutes to get development up and running.

## Local Setup

Setting up your local development setup should take you about 10 to 30 minutes, taking into account you already have basic knowledge of web development.

- Make sure you have your favorite local LAMP setup up and running (xampp, wamp, etc).
- [Download](https://getgrav.org/downloads) the latest version of GRAV Core + ADMIN.
- Create an empty directory for your project.
- Unzip the downloaded Grav folder and put it in you project folder.
- Rename the Grav directory to `grav-admin`
- Open the grav-admin folder
- Cut the user folder and paste it right next to grav-admin.
  
At this point, it should looks like this:

```
myProject
	grav-admin
	user
```
- Clone or move grav-theme-wheat right next to the 2 other folders.

```
myProject
	grav-admin
	grav-theme-wheat
	user
```
- That's it for the directory. Now we only have to symlink everything together. You will, of course, need to find and replace the paths with your own.

1. Local webroot to Grav install (Skip this one if your project folder is in your webroot)  
`mklink /D D:\xampp\htdocs\myproject D:\myproject\grav-admin`

2. grav-admin to user  
`mklink /D D:\myproject\grav-admin\user D:\myproject\user`

3. user to theme  
`mklink /D D:\myproject\user\themes\wheat D:\myproject\grav-theme-wheat`

That should be it! You can now test your setup by opening your browser and going to your local webroot (something like `127.0.0.1/myproject`).
If everything goes well, Grav will prompt you to create an account. At this point, you can consider the whole operation a success, and should be able to go to the Themes section of Grav to select Wheat as your main theme.

### Setting up a domain on your localhost and virtualhost (WIP)

Adding a domain to your localhost

`windows\system32\drivers\etc\hosts`

```
127.0.0.1       wheat.localhost.com
```

Adding a virtual host to xampp

`xampp\apache\conf\extra\httpd-vhostconf`

```
<VirtualHost *:80>
	DocumentRoot "C:/xampp/htdocs/wheat"
	ServerName wheat.localhost.com
</VirtualHost>
```

## Going Live (WIP)

- From the Grav Admin Dashboard: Use the backup generator to create a ZIP of the whole site.
- Go to cPanel and use the File Manager to upload the ZIP to your server.
- Unzip it.
- Make sure everything is there, you might have to upload your .htaccess and other files manually, I don't know, just make sure it's alright.
- Copy the content of `user/themes/wheat/_ROOT` at the root of your website.
- I think that's it really.
- Oh! and you might want to go over your plugins, themes and site settings since these should probably not be the same as what you used in development.

## Github Actions

The theme comes with Github Actions already setup for deploying and purging Cloudflare on release.

In order to get them up and running, all you need to do is create the necessary Github Secrets.

You can then create a new ftp account trough cPanel, with the root folder pointing to the location of the theme and add the credentials as Github Secrets (from your repo, go to settings, then Secret from the sidebar).

[more...](https://github.com/SamKirkland/FTP-Deploy-Action)

- `WHEAT_DEPLOY_HOST`
- `WHEAT_DEPLOY_USER`
- `WHEAT_DEPLOY_PASSWORD`

Cloudflare cache can also be purged at the same time if you provide these.

[more...](https://github.com/marketplace/actions/cloudflare-purge-cache)

- `WHEAT_CLOUDFLARE_TOKEN`
- `WHEAT_CLOUDFLARE_ZONE`


## _ROOT folder (WIP)

The theme contains a `_ROOT` directory where you should keep everything that will eventually go in you production webroot. Doing this, you can be certain it follows the theme when using the Github Action or when you move you theme around. Don't forget to manually move those files after you make a new release from the _ROOT folder to you webroot. This usually contains favicons, webmanifest, Service Workers and stuff like that.

## PWA

The theme comes with a Service Worker ready to be rolled-out. If you followed the "Going Live" part of this README, it should already be at the root of your server. Now you just need to make sure PWA is enabled in the theme settings.

## What's in the theme?

### Page templates

- Default
- Collection
- Product
- Post
- Form

### Modular templates

- Editor
- Media
- Mediatext
- Quotes
- Map
- Grid
- Carousel

### Plugins (... you should install)

- Breadcrumbs `[built-in-css: false, include-home: false, include-current-page: false, link-trailing: false]`
- Shortcode Core `[custom-shortcodes: /user/themes/wheat/shortcodes, load-fontawesome: false]`
- Markdown Notices `[built-in-css: false]`
- Precache `[admin-enabled: false]`
- Custom CSS (for quick fixes)

### Libraries

- [Scroll-out](https://scroll-out.github.io/) 
- [Splitting](https://splitting.js.org/)
- [Swipper](https://swiperjs.com/)
- DOMstate (WIP)  

## Tenets

- Stick to mobile
- Always choose the maintainable solution. 
- Keep it light and fast. Time is money.
- Think about the added value all the time. If something does not add value, ditch it.
- Never block the user's journey unless it prints money.
- Your site must be like a Call of Duty map. If your users get trapped in a corner, they are dead.
