import React from 'react'
import emailjs from 'emailjs-com'
import './Button.css';
import './Contact.css'


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_38hgble', e.target, 'user_ikvBrBAiXHVbthue7yINb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}

function Contact() {
    return (
        <div className="input-areas">
            <div className="hero-info">
                <i class="fas fa-info-circle"><label for="name" id="name">  Souad Ali</label></i>
                <i class="fas fa-envelope"><label for="email_us" id="email_us">  Email me</label><label for="email" id="email">  test@email.com</label></i>
                <i class="fas fa-phone"><label for="call_me" id="call_me">  Call me</label><label for="phone" id="phone">  00000000</label></i>
            </div>
            <div className="form-element">
                <form autocomplete="off" onSubmit={sendEmail}>
                    <div className="fields">
                        <div className="field">
                            <label for="name" id="name">Name</label>
                            <input type="text" name="name" id="name" className="footer-input" required />
                        </div>
                        <div className="field">
                            <label for="email" id="email">Email</label>
                            <input type="text" name="email" id="email" className="footer-input" required />
                        </div>
                        <div className="messages">
                            <div className="field">
                                <label for="Message" id="Message">Message</label>
                                <textarea className="footer-input" name="message" id="message" rows="7" cols="50" required></textarea>
                            </div>
                            <input type="submit" className="btn-inner" value="Send Message"></input>
                        </div>
                        {/* <Button buttonStyle='btn--outline'>Send Me an Email</Button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
