// purpose: so that webscraping bots that don't use a headless browser won't see my contact info.
const number = `${'(469)' + ' 767-9197'}`;
const email = `${'michaelbido' + '@gmail.com'}`;;
const contactInfo = `<span>Dallas, Texas</span> | Phone <span>${number}</span> | Email <span>${email}</span>`;

$(document).ready(function() {
  $("#contact-info").html(contactInfo);
})