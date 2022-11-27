<?php

namespace CapoMod\FixEmojiCDN;

use s9e\TextFormatter\Renderer;
use s9e\TextFormatter\Utils;

class FormatImages
{
    /**
     * Configure rendering for user mentions.
     *
     * @param Renderer    $renderer
     * @param mixed       $context
     * @param string|null $xml
     *
     * @return string $xml to be unparsed
     */
    public function __invoke(Renderer $renderer, $context, string $xml)
    {
        $xml = Utils::replaceAttributes($xml, 'IMG', function ($attributes) {
            $attributes['src'] = 'TEST.com';
            return $attributes;
        });
        return $xml;
    }
}
