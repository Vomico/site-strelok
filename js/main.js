$(document).ready(function(){
    let btn1 = $('#button_div_1');
    let btn2 = $('#button_div_2');
    let btn3 = $('#button_div_3');
    let btn4 = $('#button_div_4');
    let btn5 = $('#button_div_5');
    let btn6 = $('#button_div_6');
    let close_area = $('#close_area');

    $(close_area).click(function(){
        $('#form').css("display","none");
        $('#form').hide(0);
    })

    $(btn1).click(function(){
        $('#form').css("display","flex");
        $('#title_text').text("Универсальный курс стрельбы «Современное оружие»");
    })
    $(btn2).click(function(){
        $('#form').css("display","flex");
        $('#title_text').text("Расширенный курс стрельбы «Современное оружие плюс»");
    })
    $(btn3).click(function(){
        $('#form').css("display","flex");
        $('#title_text').text("Расширенный курс стрельбы «Современное оружие Максимум»");
    })
    $(btn4).click(function(){
        $('#form').css("display","flex");
        $('#title_text').text("Индивидуальная тренировка");
    })
    $(btn5).click(function(){
        $('#form').css("display","flex");
        $('#title_text').text("Групповая тренировка");
    })
    $(btn6).click(function(){
        $('#form').css("display","flex");
        $('#title_text').text("Курс стрельбы «Терминатор»");
    })
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}