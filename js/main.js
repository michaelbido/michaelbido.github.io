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

//notes for font-awesome icons in each section...

//EDUCATION
//graduation-cap

//EXPR & PROJECTS
//user-tie
//user-graduate
//user-ninja

//SKILL SET
//code
//terminal
//laptop-code
//chart-line

//AWARDS
//award
//file-contract

// navbar highlighting based on page position, WIP
$(document).ready(function() {
  $("#contact-info").html(contactInfo);
  $("#footer-contact").html(contactInfo);

  var $sections = $('section');
  console.log($sections);
})

