$('#nav-menu-btn').click(function (e) {
  $('#overlay-backdrop').css('display', 'flex');
});

$('#overlay-backdrop').click(function (e) {
  $('#overlay-backdrop').css('display', 'none');
});
$('#nav-menu-close').click(function (e) { 
  $('#overlay-backdrop').css('display', 'none');  
});

$('#overlay-modal').click(function (e) { 
  e.preventDefault();
  e.stopPropagation();
});