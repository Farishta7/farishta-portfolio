import ReactPlayer from 'react-player';
import logo from '../maximize.png'
import ncNewsNetlify from '../netlify.png';
import ncNewsRender from '../render.png'
import '../App.css';
import Footer from './Footer';

const Projects = () => {
    return (
      <>
        <h1 class='text-4xl ...'>My Projects</h1>
        <div className='parent-div'>
          
        <div className="text-block">
          <h3>Northcoders Back-end Project</h3>
            <p>The back-end project was the most challenging part of the bootcamp for me as I initially struggled to understand <span className='highlighted-text'>Model-View-Controller pattern </span> and connecting models with controllers. 
            </p>
            <p>The project is a replication of a news website with a few endpoints.</p>
            <p>I used Express, the Node.js web application framework to create APIs and handle requests. Furthermore, I also worked on <span className='highlighted-text'>express routing</span>, parametric endpoints, queries, express.json middleware to access the body of a request and node-postgres.</p>
            <p> 
            
            To test all the APIs, I used <span className='highlighted-text'>Insomnia</span> which helped to debug as well. Finally, part of the project also included using <span className='highlighted-text'>SQL</span> to retrieve specific data from my database and to execute all the required queries.</p>
          <a
            href="https://github.com/Farishta7/farishtas-back-end-project"
            target='blank'
            style={{ color: "#B22222", textDecoration: 'underline' }}>Github - Back-end Project </a>
          
          <img src={logo} alt="new window logo" width="15" height="15" />
            <br />
            <br />
            <div style={{ paddingBottom: '20px' }}>
            <a
             href="https://farishtas-project.onrender.com/api/articles"
             target='blank'
             style={{ color: "#B22222", textDecoration: 'underline',  }}
            >Render - back-end project - "NC News" </a>
            <img src={logo} alt="new window logo" width="15" height="15" />
            </div>
            <a href="https://farishtas-project.onrender.com/api/articles" target="_blank" rel="noreferrer">
            <img src={ncNewsRender} className='render-image' alt="new window logo"  />
            </a>
          <p>Examples of GET request endpoints to try on Render above:</p>
          <ul>
            <li>/api/topics</li>
            <li>/api/articles</li>
            <li>/api/articles/:article_id</li>
          </ul>
          </div>
          <div className="text-block">
          <h3 >Northcoders Front-end project</h3>
            <p >My front-end project is a simple web application to display articles built in <span className='highlighted-text'>React.js</span> and is connected to my back-end project. Using React Function components helped to write less code than Class components and was far easier to understand. To capture a new comment added to an article, I used <span className='highlighted-text'>State</span> to capture its value and to always apply <span className='highlighted-text'>optimistic rendering</span>.</p>

            <p>To contact my API and retrieve my data, I used <span className='highlighted-text'>axios</span> as an alternative to the useEffect hook. One benefit of using axios was that instead of trying to programmatically build the query ourselves, axios allowed me to pass any possible number of queries and built the query string for me. </p>

            <p>I also learned about the importance of <span className='highlighted-text'>accessibility</span> and to try and make the website easy to use for as many different people and situations as possible. For example, I did not use any clashing colours or leave any inputs without labels. </p>
            <p>Last but not least, I used <span className='highlighted-text'>Netlify</span> to host the website:</p>
          

            <div style={{ paddingBottom: '20px' }}>
            <a
            href='https://farishta-nc-news.netlify.app/'
            target='blank'
                style={{ color: "#B22222", textDecoration: 'underline' }}>Netlify - "NC News" </a>
              
            <img src={logo} alt="new window logo" width="15" height="15" />
            </div>
            <a href="https://farishta-nc-news.netlify.app/" target="_blank" rel="noreferrer">
                <img className='netlify-image' src={ncNewsNetlify} alt="new window logo" />
            </a>
          </div>
          <div className="text-block">
            <h3>Northcoders Group Project</h3>
            <p>The app we worked on was called "Event Buddy" and it was created to solve the issue of concert goers who needed to plan a trip with someone new to concerts/music festicals either locally or abroad. We had <span className='highlighted-text'>2.5 weeks</span> to create everything as a team from scratch and as challenging as it was, it was also the most engaging and interesting part of the bootcamp for me! Please refer to the video below for further details and the tech stack.</p>
            <p>The main areas I worked on was styling, research into APIs to access a live music database and geolocation request to be able to display concerts nearest to the user.  </p>
            <p>I ensured the colour palette was <span className='highlighted-text'>consistent</span> throughout the app to create a <span className='highlighted-text'>uniform and vibrant </span>looking appearance. Since the app is targeting a specific group, research into what colours to use provided me with information that specific colours are associated with certain emotions which is why I decided on orange as the primary colour.</p>
            <p>One of the biggest blockers was finding an API that catered to our needs for the app. After trial and error with APIs from "Eventbrite", "Songkick" and "SeatGeek", I successfully spiked the <span className='highlighted-text'>"ticketmaster" API</span> and was able to retrieve all required information for our app. </p>
            <p>The <span className='highlighted-text'>geolocation information request</span> was essential to be able to provide nearest concerts with the users permission. This was achieved through <span className='highlighted-text'>Expo</span> and if the user was unwilling to provide this, they also had the option to input a city instead. I was able to use a geocoding API to convert the city name to a pair of latitude and longitude coordinates (necessary for the "ticketmaster" API) and display the relevant data to the user.</p>
            <p>We followed all protocol and this included spiking, creating <span className='highlighted-text'>user stories</span> and assigning tickets to each team member to achieve continuous progress throughout the project. Routine morning standups and further team meetings throughout the day accomplished clear communication and sharing our individual progress. This also helped with <span className='highlighted-text'>bug fixing</span> as any changes pulled from main did not perform as expected for ech team memeber. However, through team work and determination, we successfully achieved our <span className='highlighted-text'>MVPs</span> (minimum viable product) and created fully functioning app. </p>
            
            <a
            href='https://github.com/Farishta7/event-buddy'
            target='blank'
            style={{ color: "#B22222", textDecoration: 'underline' }}>Github - Event Buddy App</a>
            <img src={logo} alt="new window logo" width="15" height="15" />

            <br></br>
            <br></br>
          <div className='group-project-video-div'>
            <ReactPlayer
              className='group-project-video'
              url={'https://youtu.be/mO6DO84zNZE'}
              controls={true}
              width="100%"
              height="100%"
            />
            </div>
            <br></br>
            <a
            href='https://github.com/Farishta7/event-buddy'
            target='blank'
            style={{ color: "#B22222", textDecoration: 'underline' }}
            >Event Buddy - further details</a>
            <img src={logo} alt="new window logo" width="15" height="15" />
            </div>
            {/* <h3>Northcoders Mini projects</h3>
            <h3>My C# Project</h3>
            <h3>My TypeScript Project</h3> */}



            
          
         
          
        </div>

      <Footer />
      </>
      
    )
  };
  
export default Projects;