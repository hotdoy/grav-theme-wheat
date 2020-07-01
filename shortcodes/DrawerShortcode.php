<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class DrawerShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('drawer', function(ShortcodeInterface $sc) {



            $output = $this->twig->processTemplate('partials/drawer.html.twig', [
                'title' => $sc->getParameter('drawer', $this->getBbCode($sc)),
                'content' => $sc->getContent(),
                'level' => $sc->getParameter('level') ?? '3'
            ]);
            return $output;
        });
    }
}
