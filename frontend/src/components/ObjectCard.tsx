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

interface ObjectCardProps {
    // productId: number;
    id: number;
}

const ObjectCard: React.FC<ObjectCardProps> = ({ id }) => {
    const [result, setResult] = useState<Product[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement("#root");
    }, []);

    const handleClick = async () => {
        axios.get(`http://localhost:8080/${id}`).then((response) => {
            console.log("Response data:", response.data);
            console.log("Result:", result);

            setResult([response.data]);
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
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={handleCloseModal}>Stäng</button>
            </Modal>
        </>
    );
};

export default ObjectCard;
