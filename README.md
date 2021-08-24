# Wheat theme for Grav CMS.

[![Discord](https://img.shields.io/discord/501836936584101899.svg?logo=discord&colorB=728ADA&label=Discord%20Chat)](https://chat.getgrav.org)
[![Get Grav](https://img.shields.io/badge/get-grav-blueviolet)](https://getgrav.org/downloads)

[Live demo](https://getwheat.ca/)

## Description (WIP)

Wheat is a starter theme for Grav CMS. It contains...

- Common patterns used by [Calotte](https://calotte.ca/).
- A Snipcart integration allowing you to sell physical or digital products in minutes.
- Commonly used libraries for animating elements and text on scroll.
- A neat little thing called **DOMstate** to expose various states of the document you can then use with CSS for a modern and app-like feel.

It uses no build tool, no framework of any kind, only needs a basic LAMP setup, uses Github Actions for automatic deployment and only takes a couple of minutes to get development up and running.

## What's in the theme?

### Page templates

- Default
- Collection
- Product
- Post

### Modular templates

- Editor
- Media
- Mediatext
- Quotes
- Map
- Grid
- Carousel

### Required plugins

- Breadcrumbs
- Shortcode core (with `custom shortcode` pointing to `/user/themes/wheat/shortcodes`)
- File content (Allowed extensions: `txt, html, jpg, jpeg, png`)

### External libraries shipped with Wheat

- [Scroll-out](https://scroll-out.github.io/)
- [QuickLink](https://github.com/GoogleChromeLabs/quicklink)
- [Snipcart](https://snipcart.com/)

## Starting a new project

While my way of doing thing is one of many, I've found it to be more approachable and should take about 30 minutes to an hour.

- Find a cool name for your project.
- Go on Github and create a new repo named `grav-theme-mytheme` (replace `mytheme` with your project name), in lowercase. (The `grav-theme-` prefix is not required but is good practice in Grav development. It is also required if you plan on releasing on the GPM.)
- Create a folder named after your project on your computer.
- [Download](https://getgrav.org/downloads) the latest version of GRAV Core + ADMIN.
- Unzip the downloaded Grav folder and put it in you project folder.
- Rename the Grav directory to `grav-admin`.
- From inside `grav-admin`, cut the `user` folder and paste it right next to grav-admin.

- At this point, it should looks like this:

```bash
myproject
  grav-admin
  user
```

- Clone the theme repo in the project folder, next to the other ones so it looks like that...

```bash
myproject
  grav-admin
  grav-theme-mytheme
  user
```

- Delete the content of `grav-theme-mytheme`.
- Download Wheat [latest release](https://github.com/hotdoy/grav-theme-wheat/releases) `Source code (zip)`.
- Unzip the downloaded `grav-theme-wheat-vx.x.x`.
- Dump the entire content of `grav-theme-wheat-vx.x.x` in your `grav-theme-mytheme` folder.
- Clean and rename the following files.

  - `wheat.yaml` should be `mytheme.yaml`
  - `wheat.php` file name and any reference to the theme inside the PHP code (make sure you follow capitalization).
  - Erase the content of CHANGELOG.md and start fresh with version v0.1.0 (or whatever you think is best).
  - Replace references to Wheat in `blueprints.yaml`.
  - Adjust `_ROOT/site.webmanifest` values (I usually do it just before putting a site in production or staging).
  - Adjust `_ROOT/serviceworker` `CACHE` variable name using your theme's name.
- Create a new branch named `develop` and publish it.
- Commit your changes in the `develop` branch.
- You can now go to the "Symlinking" setion of this README.

## Contributing to an existing project

- Make sure you have your favorite local LAMP setup up and running (xampp, wamp, etc).
- Create a folder named after the project on your computer.
- [Download](https://getgrav.org/downloads) the latest version of GRAV Core + ADMIN.
- Unzip the downloaded Grav folder and put it in you project folder.
- Rename the Grav directory to `grav-admin`.
- From inside `grav-admin`, cut the `user` folder and paste it right next to grav-admin.

- At this point, it should looks like this:

```bash
myProject
  grav-admin
  user
```

- Clone the theme repo in the project folder, next to the other ones so it looks like that...

```bash
myProject
  grav-admin
  grav-theme-wheat
  user
```

- Make sure you are always working in the `develop` branch.
- You can now skip to the "Symlinking" setion of this README.

## Symlinking

You will, of course, need to find and replace the paths with your own.

- Local webroot to Grav install  
`mklink /D D:\xampp\htdocs\myproject D:\myproject\grav-admin`
- grav-admin to user  
`mklink /D D:\myproject\grav-admin\user D:\myproject\user`
- user to theme  
`mklink /D D:\myproject\user\themes\mytheme D:\myproject\grav-theme-mytheme`
- Test your setup using your favorite browser and going to your local webroot (something like `127.0.0.1/myproject`).
If everything goes well, Grav will prompt you to create an account. At this point, you can consider the whole operation a success.
- Login into the admin panel, go to "Themes" and activate your new theme.

## Setting up a domain on your localhost and virtualhost

While this is totally optional, I strongly suggest that you setup a domain on your localhost (and virtualhost). This will allow you to work in a more realistic environment and prevent URL shenanigans.

### Adding a domain to your localhost.

Go to `windows\system32\drivers\etc\hosts` and add...

```bash
127.0.0.1       wheat.localhost.com
```

... at the end of the file.

### Adding a virtual host to xampp.

Go to `xampp\apache\conf\extra\httpd-vhostconf` and add...

```bash
<VirtualHost *:80>
  DocumentRoot "C:/xampp/htdocs/wheat"
  ServerName wheat.localhost.com
</VirtualHost>
```

... at the end of the file.

Reset XAMPP Apache module (or the whole thing if you prefer) and test your new domain!

## _ROOT folder (WIP)

The theme contains a `_ROOT` directory where you should keep everything that will eventually go in your production webroot. Doing this, you can be certain it follows the theme when using the Github Actions or when you move you theme around. Don't forget to manually move those files after you make a new release from the _ROOT folder to you webroot. This usually contains favicons, webmanifest, serviceworker.js, etc.

## Going Live (WIP)

- From the Grav Admin Dashboard: Use the backup generator to create a ZIP of the whole site.
- Go to cPanel and use the File Manager to upload the ZIP to your server.
- Unzip it.
- Make sure everything is there, you might have to upload your .htaccess and other files manually, I don't know, just make sure it's alright.
- Copy the content of `user/themes/wheat/_ROOT` at the root of your website.
- I think that's it really.
- Oh! and you might want to go over your plugins, themes and site settings since these should probably not be the same as what you used in development.

## Github Actions

The theme comes with some Github Actions for deploying and purging Cloudflare on release.

To get the deployment up and running, you need to create a new ftp account trough cPanel, with the root folder pointing to the location of the theme and add the credentials as Github Secrets (from your repo, go to settings, then Secrets from the sidebar).

[Check the official docs](https://github.com/SamKirkland/FTP-Deploy-Action)

- `WHEAT_DEPLOY_HOST`
- `WHEAT_DEPLOY_USER`
- `WHEAT_DEPLOY_PASSWORD`

Cloudflare cache can also be purged at the same time if you need it, given you have access to an API token and the zone.

[Check the official docs](https://github.com/marketplace/actions/cloudflare-purge-cache)

- `WHEAT_CLOUDFLARE_TOKEN`
- `WHEAT_CLOUDFLARE_ZONE`

## PWA & serviceworker

The theme comes with a Service Worker ready to be rolled-out. If you followed the "Going Live" part of this README, it should already be at the root of your server. Now you just need to make sure PWA is enabled in the theme settings.

### A word of warning of service workers

Serviceworker will make the cache extremely hard to bust. You should always make sure your project is in a stable and tested state before releasing a worker. You can prevent installation from the theme settings by simply switcing it off until ready.

## Release process

Releasing is a pretty straightforward process once your Github Actions are properly configured.

- Make sure all of your changes are committed.
- Update the version number in `blueprint.yaml`.
- Add an entry to `CHANGELOG.md` with a short description of your changes (Grav will show the changelog to the user in various locations).
- Update the `CACHE` variable in `_ROOT/sericeworker.js` (you can skip this if youdon't plan on using a PWA).
- Commit the changes using the new version number as summary.
- Push to origin.
- Create a pull request.
- Merge the pull request into master.
- Create a new release using the version number as tag.
- Github Actions should take over and push your changes.

## Tenets

- Stick to mobile
- Always choose the maintainable solution.
- Time is money, so keep it light and fast.
- Think about the added value. If something does not add value, ditch it.
- Never block the user's journey unless it prints money.
- Your site should be like a Call of Duty map. User should never get trapped in a corner.
