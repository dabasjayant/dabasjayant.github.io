$('#nav-menu-btn').click(function (e) {
  $('#overlay-backdrop').css('display', 'flex');
  $('body').css('overflow', 'hidden');
});

$('#overlay-backdrop').click(function (e) {
  $('#overlay-backdrop').css('display', 'none');
  $('body').css('overflow', 'unset');
});
$('#nav-menu-close').click(function (e) { 
  $('#overlay-backdrop').css('display', 'none');
  $('body').css('overflow', 'unset');
});

$('#overlay-modal').click(function (e) {
  e.stopPropagation();
});