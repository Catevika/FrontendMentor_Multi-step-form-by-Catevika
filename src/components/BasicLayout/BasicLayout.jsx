import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const BasicLayout = () => {
  return (
    <main className='main-page-container'>
      <div className='main-page'>
        <Sidebar />

        <h1>Multi-step form</h1>

        <Outlet />
      </div>
    </main>

  );
};

export default BasicLayout;