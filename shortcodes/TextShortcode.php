<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class TextShortcode extends Shortcode
{
    public function init()
    {

        $this->shortcode->getHandlers()->add('small', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="small ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('large', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="large ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

        $this->shortcode->getHandlers()->add('caption', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');
            return '<div class="caption ' . $class . '" style="' . $style . '">' . $sc->getContent() . '</div>';
        });

    }
}
