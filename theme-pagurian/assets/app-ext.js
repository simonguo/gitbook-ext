$(".chapter.active").parents(".chapter").addClass("active");
$(".chapter.active").parents(".chapter").find(".btn-open").removeClass("fa-chevron-right").addClass("fa-chevron-down");


$(document).on('click', ".chapter>span", function() {
    if ($(this).find(".btn-open").hasClass("fa-chevron-right")) {
        console.log(1);
        $(this).parents(".chapter").addClass("active");
        $(this).find(".btn-open").removeClass("fa-chevron-right").addClass("fa-chevron-down");
    } else {
        $(this).parents(".chapter").removeClass("active");
        $(this).find(".btn-open").removeClass("fa-chevron-down").addClass("fa-chevron-right");
        console.log(2);
    }
    console.log(3);
});
