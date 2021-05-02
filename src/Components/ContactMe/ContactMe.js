import React from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'

const ContactMe = () => {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ldyvmim', 'template_mi4ow2a', e.target, 'user_XBO7sgJ6u2CFRWTghzmm5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
      <main>
        <div className="container">
        <form onSubmit={sendEmail}>
             <div className="row pt-5 mx-auto">
              <div className="col-8 form-group  mx-auto">
                <input type="text" className="form-control" placeholder="Name*" name="name" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="email" className="form-control" placeholder="Email*" name="email"  />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea className="form-control" placeholder="Your message*" name="message" id="" cols="30" rows="8"></textarea>
              </div>
               <div className="col-8 pt-3 mx-auto">
                 <input type="submit" className="btn btn-info" value="Send Message"/>
               </div>

             </div>
        </form>
         
        <div className="col-8 pt-2 mx-auto">
        <iframe width="90%" height="300" src="https://maps.google.com/maps?width=90%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br />
         </div>
     
       </div>
      </main>
    );
};

export default ContactMe;