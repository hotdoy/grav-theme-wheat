[![Discord](https://img.shields.io/discord/501836936584101899.svg?logo=discord&colorB=728ADA&label=Discord%20Chat)](https://chat.getgrav.org)
[![Get Grav](https://img.shields.io/badge/get-grav-blueviolet)](https://getgrav.org/downloads)
# Wheat theme for Grav CMS.

[Live demo](https://getwheat.ca/)

## Description (WIP)
Wheat is a theme for Grav CMS with Snipcart at it's heart. While it could probably be used "out of the box", it is meant as a starting point.
It uses no build tool, no framework of any kind, only needs a basic LAMP setup for hosting and takes a couple of minutes to get development up and running.

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
mklink /D D:\xampp\htdocs\myproject D:\myproject\grav-admin

1. grav-admin to user
mklink /D D:\myproject\grav-admin\user D:\myproject\user

3. user to theme
mklink /D D:\myproject\user\themes\dream D:\myproject\grav-theme-wheat

That should be it! You can now test your setup by opening your browser and going to your local webroot (something like `127.0.0.1/myproject`).
If everything goes well, Grav will prompt you to create an account. At this point, you can concider the whole operation a success, and should be able to go to the Themes section of Grav to select Wheat as your main theme.

## Going Live (WIP)
- From the Grav Admin Dashboard: Use the backup generator to create a ZIP of the whole site.
- Go to cPanel and use the File Manager to upload the ZIP to your server.
- Unzip it.
- Make sure everything is there, you might have to upload your .htaccess and other files manually, I don't know, just make sure it's alright.
- Copy the content of `user/themes/wheat/_ROOT` at the root of your website.
- I think that's it really.
- Oh! and you might want to go over your plugins, themes and site settings since these should probably not be the same as what you used in development.

## Github Actions
The theme comes with a Github Action you can easily setup to deploy to FTP on release. You will need to add the required Github Secret to use it, othewise, you should probably delete the `/.github` folder if you do not plan on using the action.

## _ROOT folder (WIP)
The theme contains a _ROOT directory where you should keep everything that will eventually go in you production webroot. Doing this, you can be certain it follows the theme when using the Github Action or when you move you theme around. Don't forget to manually move those files after you make a new release from the _ROOT folder to you webroot. This usually contains favicons, webmanifest, Service Workers and stuff like that.

## PWA (WIP)
The theme comes with a Service Worker ready to be rolled-out. If you followed the "Going Live" part of this README, it should already be at the root of your server. Now you just need to make sure PWA is enabled in the theme settings (0.9.1).
Make sure you change the cache name when you release a new version so your users get the new assets!

## What's in the theme?
### Pages
- Default
- Collection
- Product
- Post
- Form

### Modular
- Editor
- Media
- Mediatext
- Promo
- Quotes
- Map
- Carousel

### Plugins
- AutoDate
- Breadcrumbs `[built-in-css: false, include-home: false, include-current-page: false, link-trailing: false]`
- Shortcode Core `[custom-shortcodes: /user/themes/wheat/shortcodes, load-fontawesome: false]`
- Markdown Notices `[built-in-css: false]`

## Tenets
- Stick to mobile
- Always choose the maintainable solution. 
- Keep it light and fast. Time is money.
- Think about the added value all the time. If something does not add value, ditch it.
- Never block the user's journey unless it prints money.
- Your site must be like a Call of Duty map. If your users get trapped in a corner, they are dead.
