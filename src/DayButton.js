import React, { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { Button, Form, Modal } from "react-bootstrap";

function DayButton({ day, color, isHomeOffice, note, onClick }) {
    const [showModal, setShowModal] = useState(false);
    const [isModalSaved, setIsModalSaved] = useState(false);
    const [localIsHomeOffice, setLocalIsHomeOffice] = useState(isHomeOffice);
    const [localNote, setLocalNote] = useState(note);

    const handleDayClick = (event) => {
        if (event.shiftKey) {
            setLocalIsHomeOffice(!localIsHomeOffice);
            onClick(day, localIsHomeOffice, localNote, true);
        } else {
            onClick(day, localIsHomeOffice, localNote, false);
        }
    };


    const handleRightClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleModalClose = () => {
        if (!isModalSaved) {
            setLocalIsHomeOffice(isHomeOffice);
        }
        setShowModal(false);
    };

    const handleSaveNote = () => {
        setIsModalSaved(true);
        setShowModal(false);
        onClick(localIsHomeOffice, localNote);
    };

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const isCurrentDay = day === currentDay;

    return (
        <button
            className={`btn ${isCurrentDay ? "btn-primary" : `btn-${color}`}`}
            onClick={(event) => {
                onClick(localIsHomeOffice, localNote);
                handleDayClick(event);
            }}
            onContextMenu={handleRightClick}
        >
      <span className={`day-number ${localIsHomeOffice ? "home-office" : ""}`}>
        {day}
      </span>
            {localIsHomeOffice && <RiHome2Line className="home-office-icon" />}

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
                                checked={localIsHomeOffice}
                                onChange={() => setLocalIsHomeOffice(!localIsHomeOffice)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formNote">
                            <Form.Label>Note</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={localNote}
                                onChange={(e) => setLocalNote(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveNote}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </button>
    );
}

export default DayButton;
