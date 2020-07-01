<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class BreakpointShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('landscape', function(ShortcodeInterface $sc) {
            return '<span class="landscape">' . $sc->getContent() . '</span>';
        });
        $this->shortcode->getHandlers()->add('portrait', function(ShortcodeInterface $sc) {
            return '<span class="portrait">' . $sc->getContent() . '</span>';
        });
    }
}