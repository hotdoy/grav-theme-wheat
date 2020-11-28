<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class VimeoShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('vimeo', function(ShortcodeInterface $sc) {
        	$url = $sc->getParameter('vimeo', $this->getBbCode($sc));
            $id = substr(parse_url($url, PHP_URL_PATH), 1);
            if (!empty($id)) {
                return '<div class="embed__ctn"><div class="embed vimeo"><iframe loading="lazy" src="https://player.vimeo.com/video/'.$id.'" frameborder="0" webkitAllowFullScreen mozallowfullscreen></iframe></div></div>';
            } 
        });
    }
}