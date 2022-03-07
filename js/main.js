"use strict";
{
  $('.wrap .tab').click(function() {
    var index = $('.wrap .tab').index(this);
    $('.wrap .tab, .wrap .menu-box').removeClass('active');
    $(this).addClass('active');
    $('.wrap .menu-box').eq(index).addClass('active');
  });




}