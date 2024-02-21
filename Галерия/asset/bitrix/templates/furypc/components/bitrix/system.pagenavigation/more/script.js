$(document).ready(function(){

    $(document).on('click', '.load_more', function(){

        var targetContainer = $('.news-list'),          //  Контейнер, в котором хранятся элементы
            url =  $('.load_more').attr('data-url');    //  URL, из которого будем брать элементы

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){

                    //  Удаляем старую навигацию
                    $('.load_pagenavigation').remove();

                    var elements = $(data).find('.news-item'),  //  Ищем элементы
                        pagination = $(data).find('.load_pagenavigation');//  Ищем навигацию

                    targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                    targetContainer.after(pagination); //  добавляем навигацию следом

                }
            })
        }

    });

});