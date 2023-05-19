import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

function ObjectCard() {
    const [result, setResult] = useState<Product[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement("#root");
    }, []);

    const handleClick = () => {
        axios.get("http://localhost:8080/").then((response) => {
            console.log("Response data:", response.data);
            setResult(response.data);
            handleOpenModal();
        });
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button onClick={handleClick}>Hämta produkter</button>
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                <h1>Produkt</h1>

                {result.length > 0 && (
                    <ul>
                        {result.map((product) => (
                            <li key={product.id}>
                                <p>{product.name}</p>
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={handleCloseModal}>Stäng</button>
            </Modal>
        </>
    );
}

export default ObjectCard;
