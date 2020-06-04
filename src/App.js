import React,{Fragment} from 'react';
import './App.css';

// import components
import SideBar from './pages/SideBar';

const   MainPage = ({ children }) => (
  <Fragment>
    <SideBar />
    <div id="main" className="main">
      {children}
    </div>
  </Fragment>
);

export default MainPage;
