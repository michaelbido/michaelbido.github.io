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


// const contactInfo = `
//   <div class="contact-item">
//     <div>Phone</div>
//     <div>${number}</div>
//   </div>
//   <div class="contact-item">
//     <div>Email</div>
//     <div>${email}</div>
//   </div>
//   <div class="contact-item">
//     <div>Location</div>
//     <div>Dallas, Texas</div>
//   </div>
// `;
$(document).ready(function() {
  $("#contact-info").html(contactInfo);
  $("#footer-contact").html(contactInfo);

  var $sections = $('section');
  console.log($sections);
})

