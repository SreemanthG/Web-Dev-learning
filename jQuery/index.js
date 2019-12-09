$("h1").addClass("big-title margin-50");
$("h1").text("Hello");
$("button").text("<i>dont click me</i>");
$("button").html("<i>Hello</i>");
$("img").attr("src");
$("a").attr("href","https://www.yahoo.com");
$("button").click(function() {
  $("h1").css("color","red");
});

for(var i=0 ; i<5; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "blue";
  });
}

$("input").keypress( function(event){
   console.log(event.key);
});
$("h1").on("mouseover", function(){
  $("h1").css("color","pink");
});
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
// $("button").click(function() {
//   // $("h1").hide();
//   // $("h1").show();
// });

// $("button").click(function() {
//   $("h1").toggle();
// });

// $("button").click(function() {
//   $("h1").fadeOut();
// });
// $("button").click(function() {
//   $("h1").fadeIn();
// });
// $("button").click(function() {
//   $("h1").fadeToggle();
// });

// $("button").click(function() {
//   $("h1").slideUp();
// });

// $("button").click(function() {
//   $("h1").slideDown();
// });
//
// $("button").click(function() {
//   $("h1").slideToggle();
// });

// $("button").click(function() {
//   $("h1").animate({opacity:0.5});
//     // $("h1").animate({margin:12});
// });
$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity:20}).animate({opacity:0});
    // $("h1").animate({margin:12});
});
