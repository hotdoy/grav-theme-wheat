<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class HiddenShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('hidden', function(ShortcodeInterface $sc) {
            return;
        });
    }
}