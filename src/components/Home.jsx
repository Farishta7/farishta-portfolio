import '../App.css';
import Footer from './Footer'


const Home = () => {
  return (
      <>
      <div className="text-block">
        <p className="home-text">Welcome to my portfolio!</p>
        <p className="home-text">I am a Northcoders Software Engineering bootcamp graduate with a background in Accounting. After graduating in Accounting, I experimented with short coding courses through Code Academy before joining Northcoders and this decision is what sparked my interest to become a developer. With plenty of transferable skills from Accounting (e.g. critical thinking, organisation skills, technical skills) as well as an intensive 13 weeks of skills built up during the bootcamp, I am excited to start a career as a Software Developer 🚀 </p>
      </div>
      <div className='footer-div-on-pages'>
      <Footer />
      </div>
      
      </>
    )
  };
  
export default Home;