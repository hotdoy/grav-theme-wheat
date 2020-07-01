<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WidthShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('tight', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="tight ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

         $this->shortcode->getHandlers()->add('site', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="site ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('full', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="full ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });
    }
}