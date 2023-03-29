import { ReactComponent as Logo } from "../Design-Materials/icons-etc/SVG/Logo.svg";
import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import BasicTable from "./highscore-data";
import '../App.css';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);
  const handleClear = () => {
    {/* we will add the rules here to clear the highscores */}
  }

   const handleLogoClick = () => {
    window.location.reload();
  }

  return (
    <div>
      <Navbar className="custom-nav">
 feature/main-screen
  <Navbar.Brand href="#">
    <a onClick={() => window.location.reload()}>
      <Logo
        width="150"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </a>
  </Navbar.Brand>
  <button className="highscores" onClick={handleModal}>HIGHSCORES</button>
</Navbar>

        <Navbar.Brand href="#home">
          <Logo
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo" onClick={handleLogoClick}
          />
        </Navbar.Brand>
        <button className="highscores" onClick={handleModal}>HIGHSCORES</button>
      </Navbar>
 main
      <Modal show={showModal} backdrop='static' onHide={handleModal}>
        <Modal.Header className="custom-modal-header" closeButton>
          <Modal.Title className="highscores-title ">HIGHSCORES</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          {/* Add our highscores content here */}
         <BasicTable></BasicTable>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
 feature/main-screen
          <button className="custom-btn" onClick={handleClear}>CLEAR</button>
          <button className="custom-btn" onClick={handleModal}>CLOSE</button>

          <button className="modal-btn" onClick={handleClear}>CLEAR</button>
          <button className="modal-btn" onClick={handleModal}>CLOSE</button>
 main
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;