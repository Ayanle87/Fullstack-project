import { useContext, useState, useEffect } from "react";
import ProductContext from "../ProductContext";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

import BigModal from "./BigModal";

interface ModalProps {
    selectedPinId: number | null;
    // onClose: () => void;
}

const ModalFunction: React.FC<ModalProps> = ({ selectedPinId }) => {
    const { products } = useContext(ProductContext);
    const [isModalOpen, setModalOpen] = useState(false);
    //För att kunna öppna och stänga den stora modalen
    const [isBigModalOpen, setIsBigModalOpen] = useState(false);

    useEffect(() => {
        if (selectedPinId !== null) {
            setModalOpen(true);
        }
    }, [selectedPinId]);

    // Stänger modalen när man klickar på en pin
    const handleCloseModal = () => {
        setModalOpen(false);
        // onClose();
    };

    //Öppnar den stora modalen
    const handleOpen = () => {
        console.log("Öppnar stor modal");

        // setIsBigModalOpen(true);
        setModalOpen(true);
    };

    return (
        <>
            {products.length > 0 &&
                products.map((product) => (
                    <button onClick={() => handleOpen()}>ModalFunction</button>
                ))}
            <Modal
                show={isModalOpen}
                onClose={handleCloseModal}
                className="smallModalclass"
            >
                {selectedPinId !== null && (
                    <Ul>
                        {products
                            .filter((product) => product.id === selectedPinId)
                            .map((product) => (
                                <Li key={product.id}>
                                    <StyledImgDiv>
                                        <img
                                            src="/ux ikoner/Pins/close-modal.png"
                                            alt="Kryss för att stänga annonsen"
                                            className="closeStyle"
                                            style={closeStyle}
                                            onClick={handleCloseModal}
                                        />

                                        <img
                                            alt="product"
                                            src={
                                                "http://localhost:8080" +
                                                product.image
                                            }
                                            style={imgStyle}
                                            className="imgStyle"
                                        />
                                    </StyledImgDiv>
                                    <h2>{product.name}</h2>
                                    <p>Price: {product.price}</p>
                                    <p>Description: {product.description}</p>
                                    <StyledTopContainer>
                                        <StyledH1>{product.name}</StyledH1>
                                        <StyledPriceDistanceContainer>
                                            <StyledPrice>
                                                {product.price}kr
                                            </StyledPrice>
                                            <StyledDistance>
                                                500m bort
                                            </StyledDistance>
                                        </StyledPriceDistanceContainer>
                                    </StyledTopContainer>
                                    <div>
                                        <img
                                            src="/ux ikoner/arrow.png"
                                            alt="Pil för att öppna annonsen"
                                            style={arrowStyle}
                                            onClick={handleOpen}
                                        />
                                    </div>
                                </Li>
                            ))}
                    </Ul>
                )}
            </Modal>
        </>
    );
};
const closeStyle = {
    width: "17.74px",
    height: "17.74px",
    top: "5px",
    right: "10px",
    zIndex: "1",
};

const arrowStyle = {
    width: "28px",
    height: "18px",
    bottom: "0px",
    left: "5px",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    right: "80",
    zIndex: "0",
};

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledImgDiv = styled.div`
    width: 100%;
    // width: 374px;

    height: 224px;
    position: relative;
    background: #495057;
    object-fit: contain;
    top: -0.11px;

    z-index: 0;
`;

const StyledTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledH1 = styled.h1`
   
    font-family: "Open Sans", bold, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.25px;
    margin-left: 15px;
    margin-bottom; 15px;
    margin-top: 15px;

    color: #000000;
`;

const StyledPriceDistanceContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
`;

const StyledPrice = styled.p`
    font-family: "Open Sans", bold, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.25px;

    // display: flex;
    // align-items: center;
    // text-align: right;
`;
const StyledDistance = styled.p`
    font-family: "Open Sans", sans-serif;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;

    letter-spacing: 0.135894px;

    color: #000000;
`;

const StyledDescription = styled.p`
    position: relative;

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.25px;

    //     display: flex;
    // align-items: center;
`;

const StyledDescriptionDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    // object-fit: contain;
    width: 322.15px;
    height: 265.18px;
    padding: 10px;
    // align-items: center;
    margin-left: 15px;
    margin-top: 10px;

    border: 0.543575px solid #c0d0b9;
    border-radius: 2.71787px;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 75.62px;
    isolation: isolate;

    width: 100%;
    height: 733.38px;
    left: 13px;
    top: 50.57px;
`;

const Li = styled.li`
    list-style: none;
`;

export default ModalFunction;
