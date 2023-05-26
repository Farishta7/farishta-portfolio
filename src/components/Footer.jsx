import { useState } from 'react';
import '../App.css';
import linkedinlogo from '../linkedinlogo.png';
import githublogo from '../github-logo.png'
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Farishta',
    message: '',
    reply_to: '',
  });

  const notifyMe = () => { 
    toast.success('Your message has been sent!', {
      position: toast.POSITION.BOTTOM_RIGHT
  });
  }
  // toast("Your message has been sent!");

  const handleSubmit = (event) => {
    event.preventDefault();  // prevents the page from reloading when you hit “Send”

    send('service_vcjdsvp', 'template_2qmuowx', toSend, 'pInfk9oD_4v_b2LVo')
     .then((result) => {
         // show the user a success message
       console.log('SUCCESS!', result.status, result.text);
       setToSend({ ...toSend, from_name: '', to_name: '', message: '', reply_to: '' })
       
       notifyMe();
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
      <h1 >Contact me below!</h1>
      <div className='footer-form-div'>
        <form onSubmit={handleSubmit} className='form-text-style'>
          <label htmlFor="newComment" style={{ fontSize: '1.5rem' }}>Your name</label>
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
          <label htmlFor="newComment" style={{ fontSize: '1.5rem' }}>Your email address</label>
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

        <label htmlFor="newComment" style={{fontSize: '1.5rem'}}>Message to send</label>
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
        <ToastContainer />

          <button type="submit" className="add-comment-button" >Send my email to Farishta</button>



          
          <div className='linkedIn-div' >
        <img src={linkedinlogo} alt="LinkedIn logo" width="40" height="40" />
        <a
            href='https://www.linkedin.com/in/farishtatq/'
          target='blank'
          className='linkedIn-text'
        >LinkedIn</a>
      </div>
      <div className='githublogo-div' >
        <img src={githublogo} alt="Github logo" width="40" height="40" />
        <a
            href='https://www.linkedin.com/in/farishtatq/'
          target='blank'
          className='githublogo-text'
        >
          Github
        </a>
      </div>
        </form>

        
      </div>
      
      
      
      <p>©2023 Farishta Tariq Portfolio</p>
    </div>
  )
  };
  
export default Footer;