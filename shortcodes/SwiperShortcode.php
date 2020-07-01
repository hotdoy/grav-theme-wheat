<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class SwiperShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('swiper', function(ShortcodeInterface $sc) {
        	$width = $sc->getParameter('width', $this->getBbCode($sc));
            $output = $this->twig->processTemplate('partials/swipersc.html.twig', [
            	'swiper_slides' => $sc->getContent()
            ]);
            return $output;
        });
    }
}