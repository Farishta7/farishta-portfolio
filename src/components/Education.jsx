import Footer from './Footer'
import '../App.css';

const Education = () => {
  return (
    <>
      <h1 class='text-4xl ...'>Educationnnn</h1>
      <div className='parent-div'>
        <div className="text-block">
          
            <p><span className='highlighted-text'>Manchester Metropolitan University [2019 – 2022]</span></p>
            <p>BSc (Hons) Accounting & Finance</p>
            <p>First-Class Honours</p>
            <p>All university exams were completed on Microsoft Excel and Word and through time pressure and the need for being efficient and proficient during exams, I was able to improve these skills considerably. Furthermore, I completed group projects where I acted as a team leader and allocated work and scheduled meetings to keep track of progress and ensured everyone felt involved. Finally, because most of my university experience was during the pandemic it gave me the opportunity to boost the ability to communicate remotely e.g. doing group projects through various communication platforms (e.g. Microsoft Teams, Zoom).</p>
            <p>Extra-curricular activities: student ambassador, course representative, badminton club, jogging club. </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37975.97037287591!2d-2.348982951367187!3d53.4952962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487baf2873e7c939%3A0xfdee929b8f307869!2sManchester%20metropolitan%20university!5e0!3m2!1sen!2suk!4v1684489629403!5m2!1sen!2suk"
              width="100%"
              height="200px"
              style={{borderRadius: '20px'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title='Manchester Metropolitan University location on Google Maps'>
            </iframe>
          </div>
          <div className="text-block">
            <p><span className='highlighted-text'>Loreto Sixth Form College [2015 – 2017]</span></p>
            <p>A-level Spanish, A-level Accounting, A-level Maths, AS-level Economics.</p>
            <p>Achieved grades ABBB accordingly.</p>
            <p>Extra-curricular activities: Accounting department ambassador, badminton club, chess club.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.352044233224!2d-2.2543502841571668!3d53.46216818000337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1fa3e744603%3A0x7af8d82a2f3eda05!2sLoreto%20College!5e0!3m2!1sen!2suk!4v1684489818483!5m2!1sen!2suk"
              width="100%"
              height="200px"
              style={{borderRadius: '20px'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title='Loreto Sixth Form College location on Google Maps'>
            </iframe>
          </div>
          <div className="text-block">
            <p><span className='highlighted-text'>The Albion Academy [2011 – 2015]</span></p>
            <p>9 GCSE’s grades A to B with both an A in Mathematics and English Language.</p>
            <p>Extra-curricular activities: Head Girl, peer mentor, badminton, trampolining, rounders, chess club, reading club.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.5207228101076!2d-2.2822801065410916!3d53.494892892267295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae2d903268b3%3A0x4973e12e42ce446e!2sThe%20Albion%20Academy!5e0!3m2!1sen!2suk!4v1684489906909!5m2!1sen!2suk"
              width="100%"
              height="200px"
              style={{borderRadius: '20px'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title='The Albion Academy location on Google Maps'>
            </iframe>
          </div>
      
      </div>
      
      <div className='footer-div-on-pages'>
      <Footer />
      </div>
      </>
    
    )
  };
  
export default Education;