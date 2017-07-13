$(document).ready(function() {
  smoothScroll();
  openMenu();
})

function smoothScroll() {
  $('.arrow-down a').on('click', function(e) {
    // console.log($( $(this).attr('href') ).offset());
    $('html, body').animate({
      scrollTop: ($( $(this).attr('href') ).offset().top)
    }, 800)
  })
}


function openMenu() {
  $('.mobile-btn').on('click', function(){
    console.log('ddd');
    $('.menu-nav').slideToggle('slow')
  })
}

$(document).scroll(function(){
  stickyHeader();

})

function stickyHeader() {
  var headerElem = $('header')
  var topHeight = headerElem.innerHeight();
  var topPos = $(window).scrollTop();

  if (topPos >= topHeight) {
    headerElem.addClass('nav-bar')
  }else {
    headerElem.removeClass('nav-bar')
  }
}
