$('body').css('text-align', 'center');
$('#title h2').text('New Title');
$('.subtitle-box').css('background-color', "violet");
$(".temp").hide();
$('div.reason').css("border-style", "dashed");
$('ol li').css("font-weight","bold");
$('#first-list li:last').css("text-decoration","underline")
$('#first-list li:eq(1)').css("text-decoration","line-through")
$('.second-list').css("font-style", "italic");
$('.second-list span').css("font-size","2em");
$('.unused-box label').remove();
$('.unused-box').append("<p>Second Section</p>");
$(".unused-box").prepend("<p>First Section</p>");
$(".unused-box").attr("class","used-box");
//Needs below. 
$(document).ready(() => {
    $(".used-box").click(() => {
        $(".used-box").toggleClass("used-boxed-clicked");
    });
    /*
    $(".used-box").on("Click",() =>{
       console.log("Click!!!");
   });
   */
});

$(".used-box").mouseover(function(){
    $(".used-box").css("background-color", "yellow");
  });
$(".used-box").mouseout(function(){
    $(".used-box").css("background-color", "white");
});

$("#submit-button").mouseenter(() => {
    $(event.currentTarget).text("Ready to click!");
});
$("#submit-button").mouseleave(() => {
    $(event.currentTarget).text("Test!");
});

const number = 3;
$("#submit-button").click(() => {
    let count = $("#first-list li").length;
    $("#first-list").append(`<li>Reason ${count + 1} </li>`);
});



