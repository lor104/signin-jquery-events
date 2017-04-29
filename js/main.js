$(document).ready(function() {
  $('button.signin').on('click', function() {
    $('.modal').fadeIn()
  });

  $('button.close').on('click', function() {
    $('.modal').fadeOut()
  });

  $('button.submit').on('click', function() {
    $('input').addClass('error')
  });

  $('input').on('click', function() {
    $('input').removeClass('error')
  });

});
