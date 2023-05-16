import Footer from './Footer'
import '../App.css';

const Education = () => {
  return (
    <>
      <div>
        <h1>Education</h1>
        
        <div className='parent-div'>
      <div className="text-block">
            <p><span className='highlighted-text'>Manchester Metropolitan University [2019 – 2022]</span></p>
            <p>BSc (Hons) Accounting & Finance</p>
            <p>First-Class Honours</p>
            <p>All university exams were completed on Microsoft Excel and Word and through time pressure and the need for being efficient and proficient during exams, I was able to improve these skills considerably. Furthermore, I completed group projects where I acted as a team leader and allocated work and scheduled meetings to keep track of progress and ensured everyone felt involved. Finally, because most of my university experience was during the pandemic it gave me the opportunity to boost the ability to communicate remotely e.g. doing group projects through various communication platforms (e.g. Microsoft Teams, Zoom).</p>
            <p><span className='highlighted-text'>Loreto Sixth Form College [2015 – 2017]</span></p>
            <p>A-level Spanish, A-level Accounting, A-level Maths, AS-level Economics.</p>
            <p>Achieved grades ABBB accordingly.</p>
            <p><span className='highlighted-text'>The Albion Academy [2011 – 2015]</span></p>
            <p>9 GCSE’s grades A to B with both an A in Mathematics and English Language.</p>
            
      </div>
      
      </div>
      </div>
      
      <div className='footer-div-on-pages'>
      <Footer />
      </div>
      </>
    
    )
  };
  
export default Education;