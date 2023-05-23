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
    category: string;
}
// src="/ux ikoner/Toggles50h/Logo100px.png"
const categoryImages: { [key: string]: string } = {
    Elektronik: "/ux ikoner/Pins/ElektronikMainD.png",
    Fordon: "/ux ikoner/Pins/FordonMainD.png",
    Fritid: "/ux ikoner/pins/FritidMain@0.png",
    Hushåll: "/ux ikoner/pins/HusMain@0.png",
    Kläder: "/ux ikoner/pins/KladerMain@0.png",
    Övrigt: "/ux ikoner/pins/OvrigtMain@0.png",
};

const ObjectCard: React.FC = () => {
    const [result, setResult] = useState<Product[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement("#root");

        axios.get("http://localhost:8080/").then((response) => {
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
                        <img
                            className="styledPins"
                            key={product.id}
                            src={categoryImages[product.category]}
                            alt={product.name}
                            onClick={() => handleClick(product.id)}
                        />
                    ))}
                <StyledModal>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={handleCloseModal}
                        style={{
                            overlay: {
                                zIndex: 9999,
                                width: "auto",
                                height: "auto",
                            },
                        }}
                    >
                        {selectedProduct && (
                            <ul>
                                <li key={selectedProduct.id}>
                                    <img
                                        src="/ux ikoner/Pins/close-modal.png"
                                        alt=""
                                        style={closeStyle}
                                        onClick={handleCloseModal}
                                    />
                                    <img
                                        alt="product"
                                        src={
                                            "http://localhost:8080" +
                                            selectedProduct.image
                                        }
                                        style={imgStyle}
                                    />

                                    <p>{selectedProduct.name}</p>
                                    <p>{selectedProduct.price}kr</p>
                                    <p>{selectedProduct.description}</p>
                                </li>
                            </ul>
                        )}
                    </Modal>
                </StyledModal>
            </StyledContainer>
        </>
    );
};

const closeStyle = {
    width: "5%",
    height: "5%",
};

const imgStyle = {
    width: "100%",
    height: "100%",
};

const StyledContainer = styled.div`
    position: relative;

    background-color: transparent;
    background: transparent;
`;

const StyledModal = styled.div`
    position: absolute;
`;

export default ObjectCard;
