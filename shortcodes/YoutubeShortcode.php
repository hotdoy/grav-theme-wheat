<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class YoutubeShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('youtube', function(ShortcodeInterface $sc) {
            $reg = '/(?:https?:\/{2}(?:(?:www.youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))|(?:youtu\.be\/)))([a-zA-Z0-9_-]{11})/';
            $url = $sc->getParameter('youtube', $this->getBbCode($sc));
            preg_match($reg, $url, $match);
            if (isset($match[1])) {
                return '<lite-youtube videoid="' . $match[1] . '"></lite-youtube>';
            }
        });
    }
}
