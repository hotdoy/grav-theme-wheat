# v0.19.0
## 12/10/2021

1. [](#improved)
    * WE DO NOTE USE RELEASES ANYMORE. JUST DOWNLOAD THE MASTER BRANCH.

# v0.18.2
## 10/18/2021

1. [](#improved)
    * Morning build 
    * with less animations
    * and landing heading image

# v0.18.1
## 10/15/2021

1. [](#improved)
    * A more classic look

# v0.18.0
## 10/10/2021

1. [](#new)
    * Blog page template

# v0.17.0
## 10/02/2021

1. [](#new)
    * Hero modular

# v0.16.14
## 09/30/2021

1. [](#improved)
    * Prevent empty pagination container.
    * Only show parent pages in breadcrumbs
    * _DEV dir is now _ROOT (just like before).
    * Fixed some parts of Snipcart being loaded when disabled.
    * Minor style fixes.
    * Minor twig fixes.
    * Bumped Serviceworker.

# v0.16.13
## 09/29/2021

1. [](#new)
    * Breadcrumbs markup macro
    * Breadcrumbs schema (json-ld) macro.
2. [](#improved)
    * Button color now managed with theme variables
    * Editor modular
    * Focus colors
    * Marquee is now managed by template and display version number
    * Fluid typography in regular text
    * Fixed list bullets
    * pre and code tag overflow scroll

# v0.16.12
## 09/23/2021

1. [](#improved)
    * Added link rel prerender when artificial delay is applied to domstatelink.
    * Removed 100ms domstatelink default delay.

# v0.16.11
## 09/21/2021

1. [](#improved)
    * Improved breakpoints
    * Improved hover and active state styles
    * Monetization does not trigger a dialog anymore
    * Monetization triggers a console log
    * Improved header padding and font-size

# v0.16.10
## 09/14/2021

1. [](#improved)
    * Improved pagination stability
    * Improved text sizes

# v0.16.9
## 09/12/2021

1. [](#improved)
    * Pretty much fixed pagination
    * Improved text sizes
    
# v0.16.8
## 08/25/2021

1. [](#improved)
    * Improved focus and feedback for links and buttons
    * Started pagination refactoring WIP.

# v0.16.7
## 08/24/2021

1. [](#improved)
    * Breadcrumb removal. Will be re-implemented when a proper solution comes to mind.
    * Added focus-ring on buttons

# v0.16.6
## 08/24/2021

1. [](#improved)
    * Temporary breadcrumb GSC fix

# v0.16.5
## 08/23/2021

1. [](#improved)
    * Complete image loading solution with base64 inline placeholder.

# v0.16.4
## 08/21/2021

1. [](#improved)
    * base64 image placeholder WIP

# v0.16.3
## 08/21/2021

1. [](#improved)
    * notify monetizationstart once a day
    * img now properly support vector
    * img can now bypass optimization if _bypass is in filename
    * fixed an unclosed metatag
    
    # v0.16.2
## 08/20/2021

1. [](#improved)
    * added font-display: swap
    * removed a log from domstate-log
    * added monetization feedback dialog
    * added monetization meta and related theme variable

# v0.16.1
## 08/19/2021

1. [](#improved)
    * Added domstate-log.js WIP

# v0.16.0
## 08/18/2021

1. [](#improved)
    * New colors and fonts!

# v0.15.5
## 08/18/2021

1. [](#improved)
    * More verbose cabon footprint
    * Fixed page description using old meta_description field.

    # v0.15.4
## 08/18/2021

1. [](#improved)
    * replaced Wholegrain Digital Carbon Calculator with my own fork

# v0.15.3
## 08/17/2021

1. [](#improved)
    * Simpler legal mentions
    * Added website carbon calculator
    
# v0.15.2
## 08/16/2021

1. [](#improved)
    * Added missing ul
    * Added quicklink (had slipped under my radar for a while)

# v0.15.1
## 08/15/2021

1. [](#improved)
    * System image quality is now always used if image quality is larger than system defined value

# v0.15.0
## 08/13/2021

1. [](#improved)
    * Upstream improvements from calotte3 theme

# v0.14.6
## 07/21/2021

1. [](#improved)
    * new thumbnail
    * new screenshot
    * larger footer nav
    * updated hl color
    * grid modular now uses 2 cols on mobile

# v0.14.5
## 07/21/2021

1. [](#improved)
    * better header code examples
    * minor style fixes

# v0.14.4
## 07/19/2021

1. [](#improved)
    * new favicons
    * better share metas

# v0.14.3
## 07/19/2021

1. [](#improved)
    * scroller navigation fades out on max
    * improved scroller ux in general

# v0.14.2
## 07/19/2021

1. [](#improved)
    * replaced all swipers with new vanilla scroller.
    * commented swiper's assets
    
# v0.14.1
## 07/18/2021

1. [](#improved)
    * cleaned scroller js (and that should be it)

# v0.14.0
## 07/17/2021

1. [](#improved)
    * scroller modular release

# v0.13.11
## 07/17/2021

1. [](#improved)
    * liteslider demo


# v0.13.10
## 07/15/2021

1. [](#improved)
    * liteslider - a (mostly) css carousel. (WIP)
    * Site header refactor (WIP).

# v0.13.9
## 07/15/2021

1. [](#improved)
    * Starting site header refactor (very WIP).

# v0.13.8
## 07/13/2021

1. [](#improved)
    * streamlined text margins
    * use guide color for carousel draggable handle
    * cleaned up theme.css
    * better handling of code block and inline code snippets
    * swiper scrollbar are now draggable

# v0.13.7
## 07/13/2021

1. [](#improved)
    * updated README with release process

# v0.13.6
## 07/11/2021

1. [](#improved)
    * updated README.
    * updated theme description

# v0.13.5
## 07/10/2021

1. [](#improved)
    * fixed carousel items when using from a collection (for real)
    * added some margin when using more than one button
    * removed page dump from base

# v0.13.4
## 07/09/2021

1. [](#improved)
    * fixed carousel items when using from a collection

# v0.13.3
## 07/09/2021

1. [](#improved)
    * default-header renamed to default-heading
    * default-heading now uses raw output
    * improved default-card
    * cleaned post, default and product cards.
    * added height and width to video in media module.

# v0.13.2
## 07/08/2021

1. [](#improved)
    * domstate complete event
    * domstate now fires array of events instead of a single one.
    * domstate-img fires on ready instead of interactive.
    * streamlined domstate.
    * minor style changes
    * fixed date format in changelog

# v0.13.1
## 07/07/2021

1. [](#improved)
    * added char animation demo.
    * moved some stuff between damstate and domstatelink
    * minor style changes

# v0.13.0
## 07/07/2021

1. [](#improved)
    * removed page-state
    * added domstate
    * added domstate-img
    * added domstate-link

# v0.12.8
## 07/04/2021

1. [](#improved)
    * Fixed scope on some includes
    * Removed delay on img data-loading-state.

# v0.12.7
## 07/04/2021

1. [](#improved)
    * Expose img loading state when `loading=lazy` attribute exist.

# v0.12.6
## 07/04/2021

1. [](#improved)
    * Moved all FX css in the actual FX css file.
    * Added fx to .module.grid.
    * Added fx tu product image.
    * Added css reduced-motion support.
    * Removed default value of theme logo field.
    * Github Actions purge Cloudflare.

# v0.12.5
## 07/03/2021

1. [](#improved)
    * Fixed breaking typo in serviceworker.
    * Added splitting lib for future use.
    * Added a cascade effect on some cards.

# v0.12.4
## 07/02/2021

1. [](#improved)
    * New button
    * Simpler footer
    * A bunch of fixes in text styles
    * etc.

# v0.12.3
## 07/02/2021

1. [](#improved)
    * Main font changed from Inter to Helvetica
    * WIP text refactoring (some changes ares still to come)
    * Toned down page transition.
    * I'm comming back from another project and it's that time when I change everything.
    
# v0.12.2
## 01/07/2021

1. [](#improved)
    * Re-organized js and css folders.
    * Page-state now has navigating-forward and navigating-backward states.
    * Added some new transitions for navigating-forward and navigating-backward.
    * Hide loading by default.

# v0.12.1
## 05/25/2021

1. [](#improved)
    * Fixed unordered list in text.
    * Added caption to media modular
    * Removed some transitions on page-state navigating

# v0.12.0
## 05/23/2021

1. [](#improved)
    * Added Grid modular
    * Added references for quick local domain setup (WIP)

# v0.11.1
## 05/19/2021

1. [](#improved)
    * Removed contact from footer.
    * Social and newsletter are now part of the footer.
    * Add to cart button now use c-hl color.

# v0.11.0
## 05/16/2021

1. [](#improved)
    * Brand new footer
    * New Social component for sameas and newsletter
    * Navs now use simple string for URL instead of pages
    * Cleaned up root_params blueprint
    * Oh and BTW, this release will break header and footer navs.

# v0.10.3
## 05/13/2021

1. [](#improved)
    * Most libs are now part of the source instead of pulling from CDNs
    * Cleaned up assets and pipeline
    * Commented out the loader since its so freakin fast
    * Bumped Snipcart to 3.2.0 with complete but unstyled theme

# v0.10.2
## 05/12/2021

1. [](#improved)
    * Refactored page-state (breaking)
    * Better use of Grav assets pipeline (WIP).
    * Replaced instant.page with Google's Quicklink.
    * Probalby more? 

# v0.10.1b
##  05/11/2021

1. [](#improved)
    * Test release with no loader and instant.page

# v0.10.1
##  05/10/2021

1. [](#improved)
    * Dialog translations
    * Release is mostly motivated by servicewroker cache.

# v0.10.0
##  05/05/2021

1. [](#improved)
    * Refactored theme.
    * Added dark-mode support (waiting on Snipcart 3.2.0).
    * Removed color hl from theme settings.
    * Added Snipcart taxable, and shippable attributes.
    * Product digital_good_guid is now file_guid
    * Product short_description is now description
    * Removed alt from main image for conveinience
    * Cleaned product blueprint

# v0.9.2
##  05/03/2021

1. [](#improved)
    * Added Snipcart version overwrite in theme comfig.
    * Added length attribute to products.
    * Fixed typo in data-item-file-guid attribute.
    * Minor style fixes.

# v0.9.1
##  05/01/2021

1. [](#improved)
    * Serviceworker can be switched on and off in theme settings.
    * Signin and off now triggers a demo dialog.
    * Dialog can now be closed using a "close" button.
    * Page-state Navigating (LICN) now fire Dialog.closeAll().
    * Minor style fixes.

# v0.9.0
##  04/28/2021

1. [](#new)
    * Bump to v0.9.0
    * Added basic service worker
    * Added Dialog system

# v0.8.21
##  04/26/2021

1. [](#improved)
    * Pre shipping v0.9 dialog prototype
    * Styles and stuff

# v0.8.20
##  04/20/2021

1. [](#improved)
    * Rolled back Gordita
    * Simplified font-size

# v0.8.19
##  04/19/2021

1. [](#improved)
    * Multiple visual fixes and changes
    * Gordita as alternate font
    * Bigger buttons
    * Snipcart Guest Only control
    * Added micro animation to Details

# v0.8.18
##  04/15/2021

1. [](#improved)
    * Multiple visual fixes and changes
    * Bump Snipcart to v3.1.0
    * Removed Snipcart from the assets pipeline

# v0.8.17
##  04/14/2021

1. [](#improved)
    * I don't know at this point.

# v0.8.16
##  04/13/2021

1. [](#improved)
    * WIP new header is getting somewhere

# v0.8.15
##  04/12/2021

1. [](#improved)
    * Experimenting with new fonts

# v0.8.14
##  04/12/2021

1. [](#improved)
    * Footer link padding and border
    * Header link padding synced with footer
    * Some border radius on promo modular
    * Quote modular text width fix
    * Commented out some theme color options for upcoming changes

# v0.8.13
##  04/08/2021

1. [](#improved)
    * Smaller gutter on sub 400px devices
    * Mostly cleaning

# v0.8.12
##  04/06/2021

1. [](#improved)
    * Brand new footer

# v0.8.11
##  04/06/2021

1. [](#improved)
    * Minor stuff

# v0.8.10
##  04/02/2021

1. [](#improved)
    * Basic variant selector (price adjustment not supported).
    * Minor style adjustments to product.

# v0.8.9
##  03/31/2021

1. [](#improved)
    * Improved CLS (Cumulative layout shit) of mediatext and media modular.
    * Page-state use the decomposable string where 'LICN' would be 'navigating'.
    * Improved page-state delay management.

# v0.8.8
##  03/30/2021

1. [](#improved)
    * Moving everything from page-state: complete to interactive.
    * page-state values uses a number from 0 being loading to 3 being complete-navigating. Number must be concatenated so the state of a complete page should be 012.

# v0.8.7
##  03/27/2021

1. [](#improved)
    * Better FXdelay handling

# v0.8.6
##  03/27/2021

1. [](#improved)
    * Map modular
    * Monstly invisible stuff

# v0.8.5
##  03/24/2021

1. [](#improved)
    * Images loading, compression and resizing

# v0.8.4
##  03/23/2021

1. [](#improved)
    * Hero renamed to Promo
    * Cleaned up Post unused field
    * Cleaned collection classes

# v0.8.3
##  03/20/2021

1. [](#improved)
    * All card template
    * Default header
    * Text h1
    * Breadcrumb
    * Readme
2. [](#new)
    * Post
    * Post card

# v0.8.2
##  03/15/2021

1. [](#improved)
    * Loading no has a "skeleton"
    * Carousel and Collection have smaller grid-gap on mobile

# v0.8.1
##  14/03/2021

1. [](#bugfix)
    * Fixed js not inlining properly

# v0.8.0
##  03/14/2021

1. [](#improved)
    * Colors are now a setting in theme blueprint
    * CSS custom properties cleanup
    * Header nav is now managed trough root_params
    * Scroll FX no longer user specific classes to target elements
    * Page state css moved to loading.css
    * Cleaned Marquee
    * Use macro to store svgs
    * Updated Calotte logo
    * Moved Snipcart js  outside of pipeline. (for some reason it blows the the bundle to 1.4mb when included)

# v0.7.9
##  03/12/2021

1. [](#improved)
    * Removed Announcement
    * Renamed Editorial bp to Editor to fit with template
    * Use regular theme color for buttons instead of btn specific ones
    * yt-lite: added support for custom thumbnail

# v0.7.8
##  03/11/2021

1. [](#improved)
    * Cleaning and breaking stuff
    
# v0.7.7
##  03/10/2021

1. [](#new)
    * Media modular youtube support.
2. [](#improved)
    * Editorial modular renamed to Editor
    * Force lite-youtube hi-res thumbnail (WIP)
    
# v0.7.6
##  03/08/2021

1. [](#new)
    * Module Media (WIP)
2. [](#improved)
    * Removed unused field in mediatext
    * Removed unused section modules
    * Removed unused webm support in mediatext
    * Improved line-height of hero module
    
# v0.7.5
##  03/05/2021

1. [](#improved)
    * Hero modular no longer has content
    * Hero modular now has display title
    * Hero modular now has subtitle
    * Hero modular now has custom hl color
    * Hero modular is now 16:9 landscape and 1:1 portrait

# v0.7.4
##  03/04/2021

1. [](#improved)
    * cleaning collection and pagination WIP
2. [](#bugfix)
    * detail tag ui color
    * default card bg color

# v0.7.3
##  02/28/2021

1. [](#improved)
    * FX handling

# v0.7.2
##  02/28/2021

1. [](#improved)
    * Custom property usage
    * Class names of some child concept (ex: .product__card)
    * Removed some transitions
    * Fixed hero modular color
    * Fixed caroussel modular edge gradients

# v0.7.1
##  02/26/2021

1. [](#improved)
    * Enabled snipcart
* Fixed some snipcart related styles

# v0.7.0
##  02/16/2021

1. [](#improved)
    * Getting up to speed with GRAV 1.7
    * Updating codebase with 3 months of new stuff
    

# v0.6.1
##  15/09/2021

1. [](#improved)
    * Improved assets positions fixing some cascade issues with external css.

# v0.6.0
##  14/09/2021

1. [](#new)
    * Added ScrollOut
2. [](#improved)
    * Bumped Snipcart
    * Removed sction-state
    * Fixed Snipcart z-index

# v0.5.2
##  12/09/2021

1. [](#improved)
    * Dramatically improved Youtube load times.
    * Slowly moving the site nav to a macro patern. 

# v0.5.1
##  12/02/2021

1. [](#improved)
    * Module base blueprint now extends but reduce default.yaml preventing potential bugs.
    * Mediatext no longer has desktop specific font-size.

# v0.5.0
##  12/01/2021

1. [](#new)
    * Added Features module.
2. [](#improved)
    * section-state now initiated by page-state removing the need to use the the page-state="complete" css selector.

# v0.4.3
##  12/01/2021

1. [](#improved)
    * Improved section-state and page-state syntax.

# v0.4.2
##  11/30/2020

1. [](#improved)
    * Improved section-state and page state syntax.

# v0.4.1
##  11/28/2020

1. [](#improved)
    * Section-state can now set a delay on the observer to sync manually sync transitions with page state.

# v0.4.0
##  11/28/2020

1. [](#new)
    * Introducing page-state and section-state
    * Removed reveal scrip and related styles
    * Removed loading script and related styles
    * links script now only manage link attr (and no longer manage the 'navigating' state).

# v0.3.0
##  11/25/2020

1. [](#improved)
    * Reveal complete refactor. More to come.
    * Theme is getting bigger.
    * ...

# v0.2.8
##  11/25/2020

1. [](#improved)
    * Removed GA
    * Updated GTM tags
    * Updated Snipcart to latest
    * Removed color_hl form blueprint and base

# v0.2.7
##  11/25/2020

1. [](#improved)
    * Many minor style improvements

# v0.2.6
##  11/12/2020

1. [](#improved)
    * form-field text
    * form-field email
    * form-field number
    * form-field date
    * form-field tel
    * form-field url
    * form-field checkbox and checkboxes
    * form-field radio
    * WIP form-field upload dropzone (broken) 

# v0.2.5
##  11/11/2020

1. [](#improved)
    * Mostly symbolic release.
    * Can confirm forms are working
    * Improved Notices styles 

# v0.2.4
##  11/10/2020

1. [](#new)
    * Super basic form support. Might be broken. Do not use.

# v0.2.3
##  11/09/2020

1. [](#improved)
    * Editorial minor improvements
    * Product minor improvements

# v0.2.2
##  11/06/2020

1. [](#new)
    * Shortcode Core Details styles
    * Basic JSON product feed (for snipcart crawler).
2. [](#improved)
    * Editorial Modular is getting more restrictive.

# v0.2.1
##  11/05/2020

1. [](#improved)
    * Blueprints cleaning
    * Tweaked the loading delays to try and smooth things out.

# v0.2.0
##  11/04/2020

1. [](#new)
    * Snipcart digital good support
    * Snipacart stackable support
    * Snipcart add-item behavior (open on add or don't)
    * Carousel now has a title
    * Support for langswitcher plugin
2. [](#improved)
    * Added instruction to section modular but removed behavior
    * Removed delay and outro animation on page navigation
    * slowed down default reveal

# v0.1.16
##  11/04/2020

1. [](#new)
    * Removed link prerender generated from navigation links
    * Removed bottom-bar buy button for a more consistent button placement
    * Added full support for Snipcart custom-fields
    * Added width, height, weight to product for shipping calculation.

# v0.1.15
##  11/03/2020

1. [](#bugfix)
    * body_classes
    * CSS utils are now in their own file at the end of the cascade

# v0.1.14
##  11/03/2020

1. [](#improved)
    * Removed the modular title concept
    * Back to less structured approach of modular
    * Made body_classes available to modules
2. [](#bugfix)
    * fixed mobile buy button

# v0.1.13
##  10/30/2020

1. [](#improved)
    * Hasty release

# v0.1.12
##  10/29/2020

1. [](#improved)
    * carousel modular item width
    * collection grid on desktop
    * produt in general
2. [](#new)
    * Product variants (wip)
    * product page translations

# v0.1.11
##  10/28/2020

1. [](#improved)
    * Mostly cleaning
2. [](#new)
    * site logo can be added as inline svg from the theme config

# v0.1.10
##  10/28/2020

1. [](#improved)
    * minor style improvement
    * section modular colors (WIP, might delete later)
2. [](#bugfix)
    * fixed missing snipcart product image
    * added some missing snipcart color overwides

# v0.1.9
##  10/27/2020

1. [](#new)
    * Section modular (start / end)
2. [](#improved)
    * HL color management accross the board
    * Theme blueprint informations

# v0.1.8
##  10/27/2020

1. [](#new)
    * root-params marquee can have an url
2. [](#improved)
    * root-config renamed to root-params
3. [](#bugfix)
    * button color custom properties scope

# v0.1.7
##  10/26/2020

1. [](#new)
    * Added the root-config concept
    * Added Marquee using root-config
2. [](#improved)
    * Various shortcodes and css utilities
3. [](#bugfix)
    * Product divider border

# v0.1.6
##  10/25/2020

1. [](#improved)
    * Carousel UX
    * Collection and carousel now feel more related

# v0.1.5
##  10/25/2020

1. [](#new)
    * Carousel modular
    * Carousel of siblings in product pages
2. [](#improved)
	* CSS specificity of various modules

# v0.1.4
##  10/24/2020

1. [](#new)
    * Added theme version and server time in html

# v0.1.3
##  10/24/2020

1. [](#improved)
    * Cleaning
    * Pagination missing translation

# v0.1.2
##  10/24/2020

1. [](#improved)
    * Cleaning
    * Removed Roboto
2. [](#bugfix)
	* Fixed product showcase swiper pagination color

# v0.1.1
##  10/24/2020

1. [](#new)
    * Deploy

# v0.1.0
##  06/30/2020

1. [](#new)
    * ChangeLog started...
