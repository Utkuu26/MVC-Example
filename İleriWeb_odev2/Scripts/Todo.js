$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (sil) {
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });
    sil.stopPropagation();
});


$("input[type='text']").keypress(function (ekle) {
    if (ekle.which === 13) {
        var yeniGorevyazi = $(this).val();
        $(this).val('');
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + yeniGorevyazi + "</li>");
    }
});

$('.fa-plus').on('click', function () {
    $("input[type='text']").fadeToggle();
});

