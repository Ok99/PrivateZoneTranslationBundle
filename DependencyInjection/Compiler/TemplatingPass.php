<?php

namespace Ok99\PrivateZoneCore\TranslationBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface,
    Symfony\Component\DependencyInjection\ContainerBuilder;

class TemplatingPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container)
    {
        if (false !== ($template = $container->getParameter('ok99_privatezone_translation.templating'))) {
            $resources = $container->getParameter('twig.form.resources');

            if (!in_array($template, $resources)) {
                $resources[] = $template;
                $container->setParameter('twig.form.resources', $resources);
            }
        }
    }
}
