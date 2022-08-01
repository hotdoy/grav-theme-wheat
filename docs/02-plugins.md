# Plugins

Most required plugins are already installed with the [Grav Core + Admin](https://getgrav.org/downloads) package. This list includes some settings you should go over for those default plugins and some recommendations I've seen myself installing over and over again.
Never install a plugin if you don't know what it does or why you are doing it.

## Included with Admin

- Admin Panel (head to the Extras tab and set resize quality to `0`).
- Email (make sure you have at least From and To emails setup on Sendmail).
- Error
- Flex Objects
- Form (set built-in and inline CSS to `false`).
- Login (set built-in to `false`).
- Markdown Notices (set built-in to `false`).
- Problems

## Recommended plugins

### License Manager

Needed to install any [Premium plugins](https://getgrav.org/premium) so might as well install it from the get go.

### Sitemap

Wheat used to come with it's own sitemap implementation but with the advent of it being a dependency to other plugins (Algolia), some blueprints where refactored and I now fully support the official Sitemap plugin. It's a no brainer really. Who doesn't want a sitemap.

### Shortcode core

A great way to add custom features inside of the editor field. Wheat comes with a `lite-youtube` and basic Vimeo SC. You can also easilly ad your own shortcodes.
Just make sure to set the `Custom Shortcodes` path to `/user/themes/mytheme/shortcodes`.

### Quick Tray Links

Add QoL links to the dashboard to services your clients might need on a regular basis.

### Algolia Pro

A nice and easy way to add a fully featured Algolia Search to any site. Wheat supports it out of the box and at 100$, it's the kind of feature that can easily be absorbed in a development budget.

### Cloudflare

I freakin love Cloudflare and so does the Grav Team! While it does not add anything to Grav or Cloudflare per se, it allows you to take control of your DNS records, gives you some Cache Purge shortcuts, some analytics and a bunch of other CF features directly from your Grav admin. Access to the full Cloudflare dashboard is still required at some point but the plugin opens the door at resselling CF services and giving clients just enough tools to stay independent without having access to the account directly.
