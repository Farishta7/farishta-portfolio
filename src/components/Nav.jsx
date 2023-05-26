import { Link } from 'react-router-dom';
import logo from '../farishta-tariq-portfolio-title.png'

const Nav = () => {
    return (
      <nav className="nav">
        <div style={{ paddingBottom: '20px' }}>
          <Link to="/">
          <img src={logo} alt='logo'style={{width: '45rem'}} className="title"/>
          </Link>
          </div>
      
      <div className='nav-box'>
      <Link to="/" className='nav-tabs'>Home | </Link>
      <Link to="/projects" className='nav-tabs'>My Projects | </Link>
      <Link to="/education" className='nav-tabs'>Education</Link>
      {/* <Link to="/skills" className='nav-tabs'>Skills | </Link> */}
      {/* <Link to="/interests" className='nav-tabs'>Interests</Link> */}
      </div>
    </nav>
        
    )
  };
  
export default Nav;

