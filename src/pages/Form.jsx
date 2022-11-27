import React from 'react';
import emailjs from '@emailjs/browser';


export default function Form(){
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_7xyfkg4','template_57hl205',event.target,'m5WckzauftB5sQze6')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }

    return(
        <div className='div-form'>
        <h1 className='title-form'>Contact Us</h1>
        <form className='form-mail' onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name='user_name' />
          <hr />
  
          <label>Email</label>
          <input type="email" name='user_email' />
          <hr />
  
          <label>Message</label>
          <textarea name="user_message" id="" cols="30" rows="10"></textarea>
          <hr />
          <button>Send</button>
        </form>
      </div>
    )
}