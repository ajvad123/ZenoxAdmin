import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <div id="sidebar" className="sidebar bg-dark text-white p-3 vh-100 mb-5">
      <Nav className="flex-column">
        <Nav.Link href="index.html" className="text-white">
         <h3>Dashboard</h3>
        </Nav.Link>
       
        <div id="tables-nav" className="collapse show">
         
          <Nav.Link href="#app" className="text-white ms-3 active">
            <i className="bi bi-circle"></i> Student Details
          </Nav.Link>
          <Nav.Link href="#msg" className="text-white ms-3 active">
            <i className="bi bi-circle"></i> Messeges
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
}

export default Sidebar;
