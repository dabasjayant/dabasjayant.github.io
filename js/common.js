// Select Theme based on time
let hours = new Date().getHours();
let theme = (hours>6 && hours<19) ? 'light' : 'dark';

$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  $('body').addClass(theme);
  (theme === 'light') ? $('#theme-icon').html('&#xE708;') : $('#theme-icon').html('&#xE706;');
});

$('#theme-icon').click(function (e) {
  $('body').removeClass(theme);
  theme = (theme === 'light') ? 'dark' : 'light';
  $('body').addClass(theme);
  (theme === 'light') ? $('#theme-icon').html('&#xE708;') : $('#theme-icon').html('&#xE706;');
});

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