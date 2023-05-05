import { useState } from 'react';
import '../App.css';

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // code to send me an email

    setFirstName('');
    setSecondName('');
    setEmail('');
    setMessage('');
  }

  return (
      <div className="footer-div">
      <h1 style={{ color: "black", textAlign: "center", marginTop: "-50px" }}>
        Contact methods below
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment" >First name:</label>
        <br />
        <input
          type='text'
          style={{ marginTop: "10px", marginBottom: "10px" }}
          id="firstName" value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <br />

        <label htmlFor="newComment" >Second name:</label>
        <br />
        <input
          type='text' style={{ marginTop: "10px", marginBottom: "10px" }}
          id="secondName" value={secondName}
          onChange={(event) => setSecondName(event.target.value)}
          required
        />
        <br />

        <label htmlFor="newComment" >Email address:</label>
        <br />
        <input
          type='text' style={{ marginTop: "10px", marginBottom: "10px" }}
          id="email" value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />

        <label htmlFor="newComment" >Your message:</label>
        <br />
        <textarea
          style={{ marginTop: "10px", marginBottom: "10px" }}
          id="message" value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <br />

        <button type="submit" className="add-comment-button">Send my email to Farishta</button>
        </form>
      <p>©2023 Farishta Tariq Portfolio</p>
    </div>
  )
  };
  
export default Footer;