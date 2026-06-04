$(function() {
    var userwel = $(this).find("#fa_welcome").text();
    var usermsj = userwel.replace("Bienvenido/a ", "");
    $(this).find('#header-fix-msjs').attr('href', '/spa/' + usermsj);
    $(this).find('#header-fix-user').append('MÁS INFO DE <us>' + _userdata.username + '</us>');
    $(this).find('.user-tit').append('<us>' + _userdata.username + '</us>');
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('userNameUrl').href = '/u' + _userdata['user_id'];
});