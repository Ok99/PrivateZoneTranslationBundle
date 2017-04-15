$(function() {
    $('ul.ok99_privatezone_translationsLocales').on('click', 'a', function(evt) {
        evt.preventDefault();
        $(this).tab('show');
    });

    $('div.ok99_privatezone_translationsLocalesSelector').on('change', 'input', function(evt) {
        var $tabs = $('ul.ok99_privatezone_translationsLocales');

        $('div.ok99_privatezone_translationsLocalesSelector').find('input').each(function() {
            $tabs.find('li:has(a[data-target=".ok99_privatezone_translationsFields-' + this.value + '"])').toggle(this.checked);
        });

        $('ul.ok99_privatezone_translationsLocales li:visible:first').find('a').tab('show');
    }).trigger('change');
});
