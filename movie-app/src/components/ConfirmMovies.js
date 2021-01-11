import React,  { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ConfirmMovies(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="outline-light" size="lg" block onClick={handleShow}>
        Confirm
      </Button>  
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Selected Movies</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.selectedMovies.map(movie => (
              <h4 className='center'>{movie.Title}</h4>
          ))}</Modal.Body>
          <Modal.Footer>
            <Button className='confirm' variant="info" size="lg" block onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
  }
  

export default ConfirmMovies;