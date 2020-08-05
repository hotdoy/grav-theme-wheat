<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Wheat extends Theme
{
	public function onTwigSiteVariables()
    {
        if ($this->isAdmin()) {
            $this->grav['assets']->add('theme://css/admin.css');
        }
    }
}
