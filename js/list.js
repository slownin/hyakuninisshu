$(function() {
    var tmplRow = $.templates('#tmpl-row');

    $.ajax({
        url: 'data/hyakuninisshu.json'
    }).done(function (data) {
        data.forEach(function (item, index) {
            var htmlRow = tmplRow.render({
                bango: index + 1,
                kaminoku: item.kaminoku,
                shimonoku: item.shimonoku,
                sakusha: item.sakusha
            });
            $('#list-body').append(htmlRow);
        })
    })
})
