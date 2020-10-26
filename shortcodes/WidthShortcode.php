<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WidthShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('text', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="width-text ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

         $this->shortcode->getHandlers()->add('body', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="width-body ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('full', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="width-full ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });
    }
}