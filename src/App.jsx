import React from 'react';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Sidebar from './Components/Sidebar';
import Messeges from './Components/Messeges'
import SoftEnq from './Components/SoftEnq';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1 app-content">
        <Sidebar />
        <div className="flex-grow-1">
          <Admin />
          <Messeges/>
          <SoftEnq/>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
