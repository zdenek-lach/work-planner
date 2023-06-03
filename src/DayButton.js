import React, { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { Button, Form, Modal } from "react-bootstrap";

function DayButton({ text, onClick }) {
    const [isHomeOffice, setIsHomeOffice] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState("");
    const [isModalSaved, setIsModalSaved] = useState(false);

    const handleDayClick = (event) => {
        if (event.shiftKey) {
            setIsHomeOffice(!isHomeOffice);
        }
    };

    const handleRightClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleModalClose = () => {
        if (!isModalSaved) {
            setIsHomeOffice(false);
        }
        setShowModal(false);
    };

    const handleSaveNote = () => {
        setIsModalSaved(true);
        setShowModal(false);
        // Save the note and home office option in your data structure or database
        console.log("Note saved:", note);
        console.log("Home office option:", isHomeOffice);
    };

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const isCurrentDay = text === currentDay;

    return (
        <button
            className={`btn ${isCurrentDay ? "btn-primary" : "btn-secondary"}`}
            onClick={(event) => {
                onClick();
                handleDayClick(event);
            }}
            onContextMenu={handleRightClick}
        >
      <span className={`day-number ${isHomeOffice ? "home-office" : ""}`}>
        {text}
      </span>
            {isHomeOffice && <RiHome2Line className="home-office-icon" />}

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formHomeOffice">
                            <Form.Check
                                type="checkbox"
                                label="Home Office"
                                checked={isHomeOffice}
                                onChange={() => setIsHomeOffice(!isHomeOffice)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formNote">
                            <Form.Label>Note</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveNote}>
                        Save Note
                    </Button>
                </Modal.Footer>
            </Modal>
        </button>
    );
}

export default DayButton;
