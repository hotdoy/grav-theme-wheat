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
                $output = $this->twig->processTemplate('partials/youtube.html.twig', [
                    'video_id' => $match[1]
                ]);
                return $output;
            }
        });
    }
}
