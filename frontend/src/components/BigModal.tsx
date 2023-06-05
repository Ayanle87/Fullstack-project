import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../ProductContext";
import Modal from "react-modal";
import axios from "axios";
import styled from "styled-components";
import ContactSeller from "../ContactSeller";

import { useLocation } from "react-router-dom";

import queryString from "query-string";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface BigModalProps {
    selectedProductId: number | null;

    onClose: () => void;

}

// const BigModal: React.FC<BigModalProps> = ({ selectedProductId, onClose, }) => {


// }

const BigModal: React.FC<BigModalProps> = ({ selectedProductId, onClose }) => {

    const [result, setResult] = useState<Product[]>([]);
    const [isBigModalOpen, setBigModalOpen] = useState(true);

    const location = useLocation();
    const { productId } = queryString.parse(location.search);

    const { products, setProducts } = useContext(ProductContext);

    useEffect(() => {
        Modal.setAppElement("#root");

        axios
            .get("http://localhost:8080/")
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleClose = () => {
        // setBigModalOpen(false);

        products.forEach((product) => {
            if (product.id === selectedProductId) {
                product.isOpen = false;
                console.log("rad 24", product.id, product.isOpen);
            }
        });

        setProducts([...products]);
    };

    return (
        <>
            <Modal
                isOpen={isBigModalOpen}
                // onRequestClose={() => setBigModalOpen(false)}
                className="modalclass"
                style={{
                    overlay: {
                        zIndex: 9999,
                    },
                }}
            >
                {result
                    .filter((product) => product.id === Number(productId))
                    .map((product) => (
                        <StyledContainer key={product.id}>
                            <Ul>
                                <Li>
                                    <StyledImgDiv>
                                        <img
                                            src="/ux ikoner/Pins/close-modal.png"
                                            alt=""
                                            className="closeStyle"
                                            style={closeStyle}
                                            onClick={handleClose}
                                        />

                                        <img
                                            alt="product"
                                            src={
                                                "http://localhost:8080" +
                                                product.image
                                            }
                                            style={imgStyle}
                                            className="imgBigStyle"
                                        />

                                    </StyledImgDiv>


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

                                    <StyledDescriptionDiv>
                                        <StyledDescription>
                                            {product.description}
                                        </StyledDescription>
                                    </StyledDescriptionDiv>
                                </Li>
                            </Ul>
                        </StyledContainer>
                    ))}
                      <ContactSeller />
            </Modal>
        </>
    );
};

// CSS

const closeStyle = {
    width: "17.74px",
    height: "17.74px",
    top: "5px",
    right: "10px",
    zIndex: "1",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    right: "0",
    zIndex: "0",
};

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1500px) {
        display: flex;
        flex-direction: row;

        // align-items: start;
        // justify-content: start;
    }
`;

const StyledImgDiv = styled.div`
    width: 100%;

    height: 309.84px;
    position: relative;
    background: #495057;
    object-fit: contain;

    z-index: 0;

    @media (min-width: 1500px) {
        width: 677px;
        height: 100%;
        left: 0;
        top: 0;
    }
`;

const StyledTopContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 1500px) {
        width: 677px;
        height: 100%;
        right: 0;
        top: 0;
    }
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

export default BigModal;
