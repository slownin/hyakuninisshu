$(function() {
    var tmplQuestion = $.templates('#tmpl-question');

    $('#btn-shutsudai').click(function () {
        var rangeMax = $('#range-max').val();

        if (! /^([0-9]{1,3})?$/.test(rangeMax)) {
            alert('入力値が不正です。');
            return;
        }

        if (rangeMax === '') {
            rangeMax = 100;
        }

        rangeMax = Number(rangeMax);

        if (rangeMax < 1 || 100 < rangeMax) {
            alert('入力範囲が不正です。');
            return;
        }

        $.ajax({
            url: 'data/hyakuninisshu.json'
        }).done(function (data) {
            var qNumber = Math.floor(Math.random() * (rangeMax + 1 - 1)) + 1;
            var question = data[qNumber - 1];

            var htmlQuestion = tmplQuestion.render({
                bango: qNumber,
                kaminoku: question.kaminoku,
                shimonoku: question.shimonoku,
                sakusha: question.sakusha
            })

            $('#question').children().remove();
            $('#question').append(htmlQuestion);
        })
    })

    $(document).on('click', '#btn-show-answer', function () {
        $('#answer').show();
    })
})
