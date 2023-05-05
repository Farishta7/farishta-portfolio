import ReactPlayer from 'react-player';
import logo from '../maximize.png'
import '../App.css';
import Footer from './Footer'


const Projects = () => {
    return (
      <>
        <h1>My Northcoders Projects</h1>
        <div className="text-block">
          <h3>Back-end Project:</h3>
          <p style={{textAlign: 'left'}}>The back-end project was the most challenging part of the bootcamp for me as I initially struggled to understand the idea of ports listening for requests express endpoints. I used Express, the Node.js web application framework to create APIs and handle requests. Furthermore, I also worked on express routing, parametric endpoints, queries, express.json middleware to access the body of a request and node-postgres with express. To test all the APIs, I used insomnia which helped to debug as well. used Insomnia to test the APIs. Additionally, the entire backend was built with Model-View-Controller pattern in mind to divide the logic into separate components making it easy to make changes. USED SQL
          </p>
          <a
            href="https://github.com/Farishta7/farishtas-back-end-project"
            target='blank'
            style={{ color: "#B22222", textDecoration: 'underline' }}>Github - Back-end Project </a>
          
          <img src={logo} alt="new window logo" width="15" height="15" />
          <br />
          <a
             href="https://farishtas-project.onrender.com/api/articles"
             target='blank'
             style={{ color: "#B22222", textDecoration: 'underline' }}
          >Render - NC News </a>
          <img src={logo} alt="new window logo" width="15" height="15" />
          <p style={{textAlign: 'left'}}>Examples of GET request endpoints to try for Render:</p>
          <ul style={{textAlign: 'left'}}>
            <li>/api/topics</li>
            <li>/api/articles</li>
            <li>/api/articles/:article_id</li>
            <li>/api/articles/:article_id/comments</li>
          </ul>
          
          <h3>Front-end project:</h3>
          <p>My front-end project is a simple web application to display articles. It is connected to my back-end project and I used React to build it. Using React Function components helped to write less code than Class components and was far easier to understand. To capture, e.g. a new comment added to an article, I used controlled components to capture its value and to always apply optimistic rendering </p>
          <a
            href='https://farishta-nc-news.netlify.app/'
            target='blank'
            style={{ color: "#B22222", textDecoration: 'underline' }}>Netlify - NC </a>
          <img src={logo} alt="new window logo" width="15" height="15" />
          <p>Mini projects:</p>
          <h3>Group Project</h3>
          <p>Our group project spanned over 3 weeks.</p>
          <p>Week 1:</p>
          <p>Split our group of 4 into 2 teams to individually come up with project ideas and then come together to vote on the preferred one.</p>
          <div className='group-project-video-div'>
            <ReactPlayer
              className='group-project-video'
              url={'https://youtu.be/7tYZa7_appQ'}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          
         
          
        </div>
        <div className='footer-div-on-pages'>
      <Footer />
      </div>
      </>
      
    )
  };
  
export default Projects;