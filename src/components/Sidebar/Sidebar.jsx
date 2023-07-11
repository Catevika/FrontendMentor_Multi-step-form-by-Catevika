import { NavLink, useLocation } from 'react-router-dom';
import bgDesktop from '../../assets/images/bg-sidebar-desktop.svg';
import bgMobile from '../../assets/images/bg-sidebar-mobile.svg';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <header className='sidebar-container'>
      <img src={bgDesktop} alt='' className='desktop-bg background' />
      <img src={bgMobile} alt='' className='mobile-bg background' />
      <nav className='sidebar-menu'>
        <NavLink to='/'
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }>
          <div aria-hidden='true' className='step-btn'>1</div>
          <div className='step-info'>
            <p className='step-number'>Step 1</p>
            <p className='step-text'>Your info</p>
          </div>
        </NavLink>

        <NavLink to={'/plan'}
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }>
          <div aria-hidden='true' className='step-btn'>2</div>
          <div className='step-info'>
            <p className='step-number'>Step 2</p>
            <p className='step-text'>Select plan</p>
          </div>
        </NavLink>

        <NavLink to='/addons'
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }>
          <div aria-hidden='true' className='step-btn'>3</div>
          <div className='step-info'>
            <p className='step-number'>Step 3</p>
            <p className='step-text'>Add-ons</p>
          </div>
        </NavLink>

        <NavLink to={'/summary/main'}
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