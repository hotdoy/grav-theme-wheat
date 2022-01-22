# Wheat -  The sustainable theme for Grav CMS

[![Discord](https://img.shields.io/discord/501836936584101899.svg?logo=discord&colorB=728ADA&label=Discord%20Chat)](https://chat.getgrav.org)
[![Get Grav](https://img.shields.io/badge/get-grav-blueviolet)](https://getgrav.org/downloads)

[Live demo](https://getwheat.ca/)

## Description (WIP)

Wheat is a theme for Grav CMS. It is aimed at building sustainable websites by limiting overheads and development tooling. It takes a responsible approach to web development and try leading by examples by offering common patterns and related solutions.

It uses no build tool, no framework of any kind, only needs a basic LAMP setup, uses Github Actions for automatic deployment and takes about 30 minutes minutes to setup.

## What's in the theme?

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

### Required plugins

- Everything required by Admin
- Shortcode core (with `custom shortcode` pointing to `/user/themes/wheat/shortcodes`)
- Sitemap
- License Manager
- File content (Allowed extensions: `txt, html, jpg, jpeg, png`)

### Other compatible or optional plugins

- Algolia Pro
- Cloudflare

### External libraries shipped with Wheat

- [Scroll-out](https://scroll-out.github.io/)
- [Splitting](https://splitting.js.org/)
- [QuickLink](https://github.com/GoogleChromeLabs/quicklink)
- [Snipcart](https://snipcart.com/)

## Starting a new project

- On GitHub, create a new repo named grav-theme-mytheme (where mytheme is your project name). (The grav-theme- prefix is not required but is good practice in Grav development. It is also required if you plan on releasing on the GPM). You wont need GitHub for a bit so you can close it once the repository has been created.
On your computer, create a folder named after your project.
- Download the latest version of GRAV Core + ADMIN.
- Unzip the downloaded Grav archive and put it in you project folder.
- From inside grav-admin, cut the user folder and paste it right next to grav-admin.
- At that point, your project folder should look like this:

```bash
myproject
  grav-admin
  user
```

- Clone your theme repo in the project folder, next to the other ones so it looks like...

```bash
myproject
  grav-admin
  grav-theme-mytheme
  user
```

- Delete the content of grav-theme-mytheme, if there is any.
- Download Wheat latest release source code (zip) OR the evergreen Master branch.
- Unzip the downloaded grav-theme-wheat-vx.x.x.
- Dump the entire content of grav-theme-wheat-vx.x.x in your grav-theme-mytheme folder.

### Cleaning and renaming

Alright so Wheat is now alive and well in your GitHub repo. It's now time to make it unique so we'll rename and clean a bunch of files. As a side effect, this will ensure I don't push unwanted updates on your theme trough the GPM if I publish Wheat on it.

- `wheat.yaml` should be `mytheme.yaml`
- `wheat.php` file name and any reference to the theme inside the PHP code (make sure you follow capitalization).
- Erase the content of CHANGELOG.md and start fresh with version v0.1.0 (or whatever you think is best).
- Replace references to Wheat in `blueprints.yaml` and add your own informations.
- Delete the content of `_ROOT` except `serviceworker.js`.
- Adjust `_ROOT/serviceworker.js` `CACHE` variable name using your theme name and version.
- Replace `screenshot.jpg` and `thumbnai.jpg` with your own images while following the size and format of the ones provided.
- Commit to master. (congratulation! That's v0.1.0 of your new project.)
- Create a new branch named `develop` and publish it.
- From here on out, commit all changes to the new `develop` branch.

### Symlinks

Since our 3 main folder (admin, theme and user) are side by side in our project folder, and probably not in our XAMPP web root, we need to symlink everything together. You'll have to change the paths bellow to fit with your setup. I usually keep a copy of this the `_SETUP` folder in the theme repo so I can get back on my feet quickly if anything happen.

**Local webroot to Grav install**

`mklink /D D:\xampp\htdocs\myproject D:\myproject\grav-admin`

**grav-admin to user**

`mklink /D D:\myproject\grav-admin\user D:\myproject\user`

**user to theme**

`mklink /D D:\myproject\user\themes\mytheme D:\myproject\grav-theme-mytheme`

Test your setup using your favorite browser and going to your local webroot (something like `127.0.0.1/myproject`).
If everything goes well, Grav will prompt you to create an account. At this point, you can consider the whole operation a success.

Login into the admin panel, go to "Themes" and activate your new theme.

## Contributing to an existing project

- On your computer, create a folder named after your project.
- [Download](https://getgrav.org/downloads) the latest version of GRAV Core + ADMIN.
- Unzip the downloaded Grav folder and put it in you project folder.
- Rename the Grav directory to `grav-admin`.
- From inside `grav-admin`, cut the `user` folder and paste it right next to grav-admin.
- At that point, your project folder should look something like this:

```bash
myproject
  grav-admin
  user
```

- Clone the theme repo you are working on in the project folder, next to the other ones so it looks like...

```bash
myproject
  grav-admin
  grav-theme-mytheme
  user
```

- **Make sure you are always working in the `develop` branch.**

### Symlinks

Since our 3 main folders (admin, theme and user) are side by side in our project, and probably not in our XAMPP web root, we need to symlink everything together. You'll have to change the paths bellow to fit with your setup. I usually keep a copy of this the `_SETUP` folder in the theme repo so I can get back on my feet quickly if anything happen.

### Local webroot to Grav install

`mklink /D D:\xampp\htdocs\myproject D:\myproject\grav-admin`

#### grav-admin to user

`mklink /D D:\myproject\grav-admin\user D:\myproject\user`

#### user to theme

`mklink /D D:\myproject\user\themes\mytheme D:\myproject\grav-theme-mytheme`

Test your setup using your favorite browser by going to your local web root (something like `127.0.0.1/myproject`).
If everything goes well, Grav will prompt you to create an account. At that point, you can consider the whole operation a success.

Login into the admin panel, go to "Themes" and activate the desired theme.

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
