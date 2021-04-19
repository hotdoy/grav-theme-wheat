# v0.8.19
##  19/04/2020

1. [](#improved)
    * Multiple visual fixes and changes
    * Gordita as alternate font
    * Bigger buttons
    * Snipcart Guest Only control
    * Added micro animation to Details

# v0.8.18
##  15/04/2020

1. [](#improved)
    * Multiple visual fixes and changes
    * Bump Snipcart to v3.1.0
    * Removed Snipcart from the assets pipeline

# v0.8.17
##  14/04/2020

1. [](#improved)
    * I don't know at this point.

# v0.8.16
##  13/04/2020

1. [](#improved)
    * WIP new header is getting somewhere

# v0.8.15
##  12/04/2020

1. [](#improved)
    * Experimenting with new fonts

# v0.8.14
##  12/04/2020

1. [](#improved)
    * Footer link padding and border
    * Header link padding synced with footer
    * Some border radius on promo modular
    * Quote modular text width fix
    * Commented out some theme color options for upcoming changes

# v0.8.13
##  08/04/2020

1. [](#improved)
    * Smaller gutter on sub 400px devices
    * Mostly cleaning

# v0.8.12
##  06/04/2020

1. [](#improved)
    * Brand new footer

# v0.8.11
##  06/04/2020

1. [](#improved)
    * Minor stuff

# v0.8.10
##  02/04/2020

1. [](#improved)
    * Basic variant selector (price adjustment not supported).
    * Minor style adjustments to product.

# v0.8.9
##  31/03/2020

1. [](#improved)
    * Improved CLS (Cumulative layout shit) of mediatext and media modular.
    * Page-state use the decomposable string where 'LICN' would be 'navigating'.
    * Improved page-state delay management.

# v0.8.8
##  30/03/2020

1. [](#improved)
    * Moving everything from page-state: complete to interactive.
    * page-state values uses a number from 0 being loading to 3 being complete-navigating. Number must be concatenated so the state of a complete page should be 012.

# v0.8.7
##  27/03/2020

1. [](#improved)
    * Better FXdelay handling

# v0.8.6
##  27/03/2020

1. [](#improved)
    * Map modular
    * Monstly invisible stuff

# v0.8.5
##  24/03/2020

1. [](#improved)
    * Images loading, compression and resizing

# v0.8.4
##  23/03/2020

1. [](#improved)
    * Hero renamed to Promo
    * Cleaned up Post unused field
    * Cleaned collection classes

# v0.8.3
##  20/03/2020

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
##  15/03/2020

1. [](#improved)
    * Loading no has a "skeleton"
    * Carousel and Collection have smaller grid-gap on mobile

# v0.8.1
##  14/03/2020

1. [](#bugfix)
    * Fixed js not inlining properly

# v0.8.0
##  14/03/2020

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
##  12/03/2020

1. [](#improved)
    * Removed Announcement
    * Renamed Editorial bp to Editor to fit with template
    * Use regular theme color for buttons instead of btn specific ones
    * yt-lite: added support for custom thumbnail

# v0.7.8
##  11/03/2020

1. [](#improved)
    * Cleaning and breaking stuff
    
# v0.7.7
##  10/03/2020

1. [](#new)
    * Media modular youtube support.
2. [](#improved)
    * Editorial modular renamed to Editor
    * Force lite-youtube hi-res thumbnail (WIP)
    
# v0.7.6
##  08/03/2020

1. [](#new)
    * Module Media (WIP)
2. [](#improved)
    * Removed unused field in mediatext
    * Removed unused section modules
    * Removed unused webm support in mediatext
    * Improved line-height of hero module
    
# v0.7.5
##  05/03/2020

1. [](#improved)
    * Hero modular no longer has content
    * Hero modular now has display title
    * Hero modular now has subtitle
    * Hero modular now has custom hl color
    * Hero modular is now 16:9 landscape and 1:1 portrait

# v0.7.4
##  04/03/2020

1. [](#improved)
    * cleaning collection and pagination WIP
2. [](#bugfix)
    * detail tag ui color
    * default card bg color

# v0.7.3
##  28/02/2020

1. [](#improved)
    * FX handling

# v0.7.2
##  28/02/2020

1. [](#improved)
    * Custom property usage
    * Class names of some child concept (ex: .product__card)
    * Removed some transitions
    * Fixed hero modular color
    * Fixed caroussel modular edge gradients

# v0.7.1
##  26/02/2020

1. [](#improved)
    * Enabled snipcart
* Fixed some snipcart related styles

# v0.7.0
##  16/02/2020

1. [](#improved)
    * Getting up to speed with GRAV 1.7
    * Updating codebase with 3 months of new stuff
    

# v0.6.1
##  15/09/2020

1. [](#improved)
    * Improved assets positions fixing some cascade issues with external css.

# v0.6.0
##  14/09/2020

1. [](#new)
    * Added ScrollOut
2. [](#improved)
    * Bumped Snipcart
    * Removed sction-state
    * Fixed Snipcart z-index

# v0.5.2
##  12/09/2020

1. [](#improved)
    * Dramatically improved Youtube load times.
    * Slowly moving the site nav to a macro patern. 

# v0.5.1
##  12/02/2020

1. [](#improved)
    * Module base blueprint now extends but reduce default.yaml preventing potential bugs.
    * Mediatext no longer has desktop specific font-size.

# v0.5.0
##  12/01/2020

1. [](#new)
    * Added Features module.
2. [](#improved)
    * section-state now initiated by page-state removing the need to use the the page-state="complete" css selector.

# v0.4.3
##  12/01/2020

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
