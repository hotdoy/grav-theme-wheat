# Wheat - Starter-kit for Grav CMS

[![Discord](https://img.shields.io/discord/501836936584101899.svg?logo=discord&colorB=728ADA&label=Discord%20Chat)](https://chat.getgrav.org)
[![Get Grav](https://img.shields.io/badge/get-grav-blueviolet)](https://getgrav.org/downloads)

[Live project](https://getwheat.ca/)

## Description

Wheat is a theme for Grav CMS. It's goal is to give a reasonable starting point for building sustainable websites by limiting overheads and development tooling. It takes a responsible approach to web development and try to lead by examples while offering common patterns and related solutions.

It uses no build tool, no framework of any kind, only needs a basic LAMP setup, uses Github Actions for automatic deployment and takes about 30 minutes to setup.
Wheat is mostly aimed at front-end developers or anyone familiar with HTML, CSS, Twig, Javascript and Grav in general.

> ⚠️ I am in the process of restructuring the docs so things might get a bit bumpy.

## Docs (WIP)

- [Creating a new project](https://github.com/hotdoy/grav-theme-wheat/blob/master/docs/00-creating-a-new-project.md)
- [Contributing to an existing project](https://github.com/hotdoy/grav-theme-wheat/blob/master/docs/01-contributing-to-a-project.md)
- [Plugins](https://github.com/hotdoy/grav-theme-wheat/blob/master/docs/02-plugins.md)

Comming up...

- Setting up a domain name on your localhost
- App.js
- Github Actions
- Going live (first deployment)
- Pushing to production (other deployments)
- Cloudflare and DNS

### Page templates

- Default
- Collection
- Product
- Blog
- Post
- Calendar
- Event
- Form
- Most of the templates related to users management

### Modular templates

- Editor
- Emphasis
- Media
- Mediatext
- Quotes
- Map
- Grid
- Carousel
- Numbers
- Form

### External libraries shipped with Wheat

- [Scroll-out](https://scroll-out.github.io/)
- [Splitting](https://splitting.js.org/)
- [QuickLink](https://github.com/GoogleChromeLabs/quicklink)
- [Snipcart](https://snipcart.com/)

## Setting up a domain on your localhost and virtualhost

While this is totally optional, I strongly suggest that you setup a domain on your localhost (and virtualhost). This will allow you to work in a more realistic environment and prevent URL shenanigans.

### Adding a domain to your localhost

Go to `windows\system32\drivers\etc\hosts` and add...

```bash
127.0.0.1       wheat.localhost.com
```

... at the end of the file.

### Adding a virtual host to XAMPP

Go to `xampp\apache\conf\extra\httpd-vhostconf` and add...

```bash
<VirtualHost *:80>
  DocumentRoot "C:/xampp/htdocs/wheat"
  ServerName wheat.localhost.com
</VirtualHost>
```

... at the end of the file.

Reset XAMPP Apache module (or the whole thing if you prefer) and test your new domain!

## _ROOT folder

The theme comes with a `_ROOT` directory where you should keep everything that will eventually go in your server's webroot. Doing this, you can be certain it follows the theme when using the Github Actions or when you move you theme around. Don't forget to manually move those files after you make a new release from the _ROOT folder to you webroot. This usually contains favicons, webmanifest, serviceworker.js, etc.

## Going Live

- From the Grav Admin Dashboard: Use the backup generator to create a ZIP of the whole site.
- Go to cPanel and use the File Manager to upload the ZIP to your server.
- Unzip it.
- Make sure everything is there, you might have to upload your .htaccess and other files manually, I don't know, just make sure it's alright.
- Copy the content of `user/themes/wheat/_ROOT` at the root of your website.
- I think that's it really.
- Oh! and you might want to go over your plugins, themes and site settings since these should probably not be the same as what you used in development.

## Github Actions

The theme comes with some Github Actions for deploying and purging Cloudflare.

To get the deployment up and running, you need to create a new ftp account trough cPanel, with the root folder pointing to the location of the theme and add the credentials as Github Secrets (from your repo, go to settings, then Secrets from the sidebar).

[Check the official docs](https://github.com/SamKirkland/FTP-Deploy-Action)

- `FTP_HOST`
- `FTP_USER`
- `FTP_PASSWORD`

Cloudflare cache can also be purged at the same time if you need it, given you have access to an API token and the zone.

[Check the official docs](https://github.com/marketplace/actions/cloudflare-purge-cache)

- `CLOUDFLARE_TOKEN`
- `CLOUDFLARE_ZONE`

## Release process

Releasing is a pretty straightforward process once your Github Actions are properly configured.

- Make sure all of your changes are committed.
- Update the version number in `blueprint.yaml`.
- Add an entry to `CHANGELOG.md` with a short description of your changes (Grav will show the changelog to the user in various locations).
- Commit the changes using the new version number as summary.
- Push to origin.
- Create a pull request.
- Merge (push) the pull request into master.
- Github Actions should take over and deploy your changes.

## Notable features

### Front-end author UI

The "Front-end author UI" is meant to speed up the content management while in development or staging. It coud technically be used in Production but cannot be recommended since you might end up caching some of the front-end UI aimed at authors. You can activate this feature in the theme settings unde Admin/Front-end author UI.

### Schema.org

Most page templates comes with their own schema.org implementation based on [Google's recommendations](https://developers.google.com/search/docs/advanced/structured-data/search-gallery). This can be a significant advantage when "selling" this starter kit as stakeholders usually take SEO seriously.
