<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WidthShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('w-text', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="w-text ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

         $this->shortcode->getHandlers()->add('w-body', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="w-body ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('w-full', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="w-full ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });
    }
}