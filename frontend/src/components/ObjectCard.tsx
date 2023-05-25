import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import styled from "styled-components";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

const ObjectCard: React.FC = () => {
    const [result, setResult] = useState<Product[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement("#root");
        console.log("hej")

        axios.get("http://localhost:8081/").then((response) => {
            setResult(response.data);

        });
    }, []);

    const handleClick = (id: number) => {
        setSelectedProductId(id);
        handleOpenModal();
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const selectedProduct = selectedProductId
        ? result.find((product) => product.id === selectedProductId)
        : null;

    return (
        <>
            <StyledContainer>
                {result.length > 0 &&
                    result.map((product) => (
                        <button
                            key={product.id}
                            value={product.id}
                            onClick={() => handleClick(product.id)}
                        >
                            {product.name}
                        </button>
                    ))}

                <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                    <h1>Produkt</h1>

                    {selectedProduct && (
                        <ul>
                            <li key={selectedProduct.id}>
                                <img
                                    alt="product"
                                    src={
                                        "http://localhost:8081" +
                                        selectedProduct.image
                                    }
                                />

                                <p>{selectedProduct.name}</p>
                                <p>{selectedProduct.price}kr</p>
                                <p>{selectedProduct.description}</p>
                            </li>
                        </ul>
                    )}
                    <button onClick={handleCloseModal}>Stäng</button>
                </Modal>
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.div`
    position: relative;

    background-color: transparent;
    background: transparent;
`;

export default ObjectCard;
