$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      $nav.toggleClass('bg-nav-brown', $(this).scrollTop() > $nav.height() );
    });
  });