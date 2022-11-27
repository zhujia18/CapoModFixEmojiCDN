<?php

namespace FoF\SecureHttps;

use Flarum\Extend;

return [
    (new Extend\Formatter())->render(FormatImages::class),

    (new Extend\ApiSerializer(BasicPostSerializer::class))->attributes(ModifyContentHtml::class),
];
