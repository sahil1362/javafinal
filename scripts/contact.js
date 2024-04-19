// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitfunc = function() {
    let contact = document.getElementById('contact-page');
    contact.innerHTML="<p>Thank you for your message</p>";
    contact.classList.add('large-text');
    contact.style.justify='flex-start';
};

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submitfunc);