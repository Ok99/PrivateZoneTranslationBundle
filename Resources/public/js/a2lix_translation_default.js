$(function() {
    $('ul.ok99_privatezone_translationsLocales').on('click', 'a', function(evt) {
        evt.preventDefault();
        var target = $(this).attr('data-target');
        $('li:has(a[data-target="' + target + '"]), div' + target, 'div.ok99_privatezone_translations').addClass('active')
            .siblings().removeClass('active');
    });

    $('div.ok99_privatezone_translationsLocalesSelector').on('change', 'input', function(evt) {
        var $tabs = $('ul.ok99_privatezone_translationsLocales');

        $('div.ok99_privatezone_translationsLocalesSelector').find('input').each(function() {
            $tabs.find('li:has(a[data-target=".ok99_privatezone_translationsFields-' + this.value + '"])').toggle(this.checked);
        });

        $('ul.ok99_privatezone_translationsLocales li:visible:first').find('a').trigger('click');
    }).trigger('change');
});
