<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WidthShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('width-text', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="width-text ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

         $this->shortcode->getHandlers()->add('width-body', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="width-body ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

         $this->shortcode->getHandlers()->add('width-site', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="width-site ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('width-full', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="width-full ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });
    }
}