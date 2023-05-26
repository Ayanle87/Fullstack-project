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

interface ObjectCardProps {
  onProductClick: (id: number) => void;
  product:Product;
}


const categoryImages: { [key: string]: string } = {
    Elektronik: "/ux ikoner/Pins/ElektronikMainD.png",
    Fordon: "/ux ikoner/Pins/FordonMainD.png",
    Fritid: "/ux ikoner/pins/FritidMain@0.png",
    Hushåll: "/ux ikoner/pins/HusMain@0.png",
    Kläder: "/ux ikoner/pins/KladerMain@0.png",
    Övrigt: "/ux ikoner/pins/OvrigtMain@0.png",
};



  const ObjectCard: React.FC<ObjectCardProps> = ({ onProductClick,product }) => {
    const [result, setResult] = useState<Product[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(
         null
     );
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement("#root");
        console.log("hej");

        axios.get("http://localhost:8080/").then((response) => {
            setResult(response.data);
        });
    }, []);

    // const handleClick = (id: number) => {
    //     setSelectedProductId(id);
    //     handleOpenModal();
    // };

     const handleClick = (id: number) => {
    onProductClick(id);
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

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="modalclass"
                style={{
                    overlay: {
                        zIndex: 9999,
                    },
                }}
            >
                {selectedProduct && (
                    <Ul>
                        <Li key={selectedProduct.id}>
                            <StyledImgDiv>
                                <img
                                    src="/ux ikoner/Pins/close-modal.png"
                                    alt=""
                                    className="closeStyle"
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
                            </StyledImgDiv>

                            <StyledH1>{selectedProduct.name}</StyledH1>
                            <StyledPrice>{selectedProduct.price}kr</StyledPrice>
                            <StyledDistance>500m bort</StyledDistance>
                            <StyledDescriptionDiv>
                                <StyledDescription>
                                    {selectedProduct.description}
                                </StyledDescription>
                            </StyledDescriptionDiv>
                        </Li>
                    </Ul>
                )}
            </Modal>
            {/* </StyledContainer> */}
        </>
    );
};

const closeStyle = {
    width: "30px",
    height: "30px",
    // position: "absolute",
    top: "5px",
    right: "70px",
    zIndex: "1",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    zIndex: "0",
};

const StyledImgDiv = styled.div`
    width: auto;
    height: 309.84px;
    position: relative;
    background: #495057;
    z-index: 0;
`;

const StyledH1 = styled.h1`
    width: 233.74px;
    height: 19px;
    font-family: "Open Sans", bold, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14.0731px;
    line-height: 19px;
    letter-spacing: 0.135894px;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

const StyledPrice = styled.p`
    width: 27px;
    height: 12px;

    font-family: "Open Sans", sans-serif;

    font-style: normal;
    font-weight: 600;
    font-size: 8.69719px;
    line-height: 12px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.135894px;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;
const StyledDistance = styled.p`
    width: 46px;
    height: 12px;

    font-family: "Open Sans", sans-serif;

    font-style: normal;
    font-weight: 400;
    font-size: 8.69719px;
    line-height: 12px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.135894px;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

const StyledDescription = styled.p`
    position: absolute;
    width: 315.93px;
    height: 154.34px;
    // left: 6.22px;
    // top: 4.95px;

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14.5019px;
    line-height: 20px;
    letter-spacing: 0.258963px;

    color: #000000;
`;

const StyledDescriptionDiv = styled.div`
    box-sizing: border-box;

    width: 322.15px;
    height: 265.18px;

    /* Secondary/Light green */

    border: 0.543575px solid #c0d0b9;
    border-radius: 2.71787px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 75.62px;
    isolation: isolate;

    // position: relative;
    width: 100%;
    height: 733.38px;
    left: 13px;
    top: 50.57px;
`;

const Li = styled.li`
    list-style: none;
`;

export default ObjectCard;
