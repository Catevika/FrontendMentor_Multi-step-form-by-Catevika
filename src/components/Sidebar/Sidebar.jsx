import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserContext';
import bgDesktop from '../../assets/images/bg-sidebar-desktop.svg';
import bgMobile from '../../assets/images/bg-sidebar-mobile.svg';
import './Sidebar.css';
import { useContext } from 'react';

// TODO: Create user Context or mix with Addons + Plan

const Sidebar = () => {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const { username, email, phone } = user;

  const handleClick = (e) => {
    const isUserDefined = username !== '' && email !== '' && phone !== '';
    if (!isUserDefined) e.preventDefault();
  };

  return (
    <header className='sidebar-container'>
      <img src={bgDesktop} alt='' className='desktop-bg background' />
      <img src={bgMobile} alt='' className='mobile-bg background' />
      <nav className='sidebar-menu'>
        <NavLink to='/'
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }>
          <div className='step-btn'>1</div>
          <div className='step-info'>
            <p className='step-number'>Step 1</p>
            <p className='step-text'>Your info</p>
          </div>
        </NavLink>

        <NavLink to={'/plan'}
          onClick={handleClick}
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }>
          <div className='step-btn'>2</div>
          <div className='step-info'>
            <p className='step-number'>Step 2</p>
            <p className='step-text'>Select plan</p>
          </div>
        </NavLink>

        <NavLink to='/addons'
          onClick={handleClick}
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }>
          <div className='step-btn'>3</div>
          <div className='step-info'>
            <p className='step-number'>Step 3</p>
            <p className='step-text'>Add-ons</p>
          </div>
        </NavLink>

        <NavLink to={'/summary/main'}
          onClick={handleClick}
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }>
          <div id={location.pathname === '/summary/thanks' ? 'step' : 'notStep'} className='step-btn'>4</div>
          <div className='step-info'>
            <p className='step-number'>Step 4</p>
            <p className='step-text'>Summary</p>
          </div>
        </NavLink>
      </nav>
    </header >
  );
};

export default Sidebar;