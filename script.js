$(document).ready(function(){
  $('img').click(function(){
    $('.dropdown-menu').toggle();
  });
  $('form').submit(function(){
    if($('#email').val() === ''){
      $('.email-error').html('Please enter your email.');
    };
    if($('#password').val() === ''){
      $('.password-error').html('Please enter your password.');
    };
    return false;
  })
});