// purpose: so that webscraping bots that don't use a headless browser won't see my contact info.
const number = `${'(469)' + ' 767-9197'}`;
const email = `${'michaelbido' + '@gmail.com'}`;
const city = `Dallas, Texas`;
const contactInfo = `
    <div >Phone</div>
    <div class="contact-entry">${number}</div>
    <div>Email</div>
    <div class="contact-entry">${email}</div>
    <div>Location</div>
    <div class="contact-entry">${city}</div>
`;




$(document).ready(function() {
  // populate contact info fields
  $("#contact-info").html(contactInfo);
  $("#footer-contact").html(contactInfo);

  // mobile menu navbar
  $("#menu").click(function() {
    $(".menu-container").css({"width": "100vw"});
  });

  $("#close-button").click(function() {
    $(".menu-container").css({"width": "0"});
  });

  $(".menu-content ul li").click(function() {
    $(".menu-container").css({"width": "0"});
  });

  // navbar highlighting based on page position, WIP
  var $sections = $('section');
  //console.log($sections);

  // typing text at start screen, WIP
})

