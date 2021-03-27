[![Discord](https://img.shields.io/discord/501836936584101899.svg?logo=discord&colorB=728ADA&label=Discord%20Chat)](https://chat.getgrav.org)
[![Get Grav](https://img.shields.io/badge/get-grav-blueviolet)](https://getgrav.org/downloads)
# Wheat theme for Grav CMS.

[Live demo](https://getwheat.ca/)

## Description
Wheat is a Pop-up shop theme for Grav CMS using Snipcart. It is also the starter theme for everything getting out of Calotte. It's meant to be usable out of the box, reducing the installation process, maintenance and dependencies to a minimum. It uses vanilla everything (html, js, css) and completelly eliminate the build process. While the theme is opinionated, everything is packaged and (will be) documented to be as simple as possible, allowing someone with minimum coding knowledge to jump in as fast as possible.

## Github Actions
If you fork this theme, be aware that I use the following Github Actions so you might want to delete the `/.github` folder if you do not plan on using them.
- Deploy to FTP on `master` release.

## Tenets
- Stick to mobile
- Always choose the maintainable solution. 
- Keep it light and fast. Time is money.
- Think about the added value all the time. If something does not add value, ditch it.
- Never block the user's journey unless it prints money.
- Your site must be like a Call of Duty map. If your users get trapped in a corner, they are dead.

## Pages
- Default
- Collection
- Product
- Post

## Modular
- Editor
- Media
- Mediatext
- Promo
- Quotes
- Map
- Carousel

## Plugins
- AutoDate
- Breadcrumbs `[built-in-css: false, include-home: false, include-current-page: false, link-trailing: false]`
- Shortcode Core `[custom-shortcodes: /user/themes/wheat/shortcodes, load-fontawesome: false]`
- Markdown Notices `[built-in-css: false]`
- PreCache
- AdvancedPageCache