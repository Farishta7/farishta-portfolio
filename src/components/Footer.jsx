import { useState } from 'react';
import '../App.css';

import { send } from 'emailjs-com';

const Footer = () => {
  // const [firstName, setFirstName] = useState('');
  // const [secondName, setSecondName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Farishta',
    message: '',
    reply_to: '',
  });

  

  const handleSubmit = (event) => {
    event.preventDefault();  // prevents the page from reloading when you hit “Send”

    send('service_vcjdsvp', 'template_2qmuowx', toSend, 'pInfk9oD_4v_b2LVo')
     .then((result) => {
         // show the user a success message
       console.log('SUCCESS!', result.status, result.text);
       setToSend({ ...toSend, from_name: '', to_name: '', message: '', reply_to: ''})
         
     })
     .catch((error) => {
      // show the user an error
      console.log('FAILED...', error);
     })

    
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
      <div className="footer-div">
      <h1 style={{ color: "black", textAlign: "center", marginTop: "-50px" }}>
        Contact me below!
      </h1>
      <a
            href='https://www.linkedin.com/in/farishtatq/'
            target='blank'
            style={{ color: "#000000", textDecoration: 'underline', fontSize: '2rem' }}>My LinkedIn</a>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment" >Your name</label>
        <br />
        <input
          type='text'
          style={{ marginTop: "10px", marginBottom: "10px" }}
          id="firstName"
          value={toSend.from_name}
          // placeholder='from name'
          onChange={handleChange}
          required
          name="from_name"
        />
        <br />
        {/* <label htmlFor="newComment" >To:</label>
        <br />
        <input
          type='text'
          style={{ marginTop: "10px", marginBottom: "10px" }}
          id="to"
          value={toSend.to_name}
          placeholder='to name'
          onChange={handleChange}
          required
          name="to_name"
        />
        <br/> */}

        <label htmlFor="newComment" >Your email address</label>
        <br />
        <input
          type='text'
          style={{ marginTop: "10px", marginBottom: "10px" }}
          id="email"
          value={toSend.reply_to}
          onChange={handleChange}
          required
          // placeholder='Your email'
          name="reply_to"
        />
        <br />

        <label htmlFor="newComment" >Message to send</label>
        <br />
        <textarea
          style={{ marginTop: "10px", marginBottom: "10px" }}
          id="message"
          value={toSend.message}
          onChange={handleChange}
          required
          name='message'
        />
        <br />

        <button type="submit" className="add-comment-button">Send my email to Farishta</button>
        </form>
      <p>©2023 Farishta Tariq Portfolio</p>
    </div>
  )
  };
  
export default Footer;