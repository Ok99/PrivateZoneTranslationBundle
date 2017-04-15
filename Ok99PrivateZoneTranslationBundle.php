<?php

namespace Ok99\PrivateZoneCore\TranslationBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle,
    Symfony\Component\DependencyInjection\ContainerBuilder,
    Ok99\PrivateZoneCore\TranslationBundle\DependencyInjection\Compiler\TemplatingPass;

class Ok99PrivateZoneTranslationBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        parent::build($container);

        $container->addCompilerPass(new TemplatingPass());
    }
}