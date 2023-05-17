import { useState } from "react";
import Modal from "react-modal";

function ObjectCard() {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                {" "}
                <h1>Produkt</h1>
                <p>Pris</p>
                <p>Beskrivning</p>
                <p>Avstånd</p>
            </Modal>
        </>
    );
}

export default ObjectCard;
