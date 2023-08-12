import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../ProductContext";
import Modal from "react-modal";
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
}

const BigModal: React.FC<BigModalProps> = ({ selectedProductId }) => {
    const [result, setResult] = useState<Product[]>([]);
    const [isBigModalOpen, setBigModalOpen] = useState(true);

    const { products, setProducts } = useContext(ProductContext);
    const location = useLocation();
    const { productId } = queryString.parse(location.search);

    useEffect(() => {
        Modal.setAppElement("#root");
        setResult(
            products.filter((product) => product.id === Number(productId))
        );
    }, [productId, products]);

    const handleClose = () => {
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
            <div className="modalcontainer">
                <Modal
                    isOpen={isBigModalOpen}
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
                                        <div>
                                            {" "}
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
                                        </div>
                                        <StyledDesktopContainer>
                                            <StyledTopContainer>
                                                <img
                                                    src="/ux ikoner/Pins/close-modal.png"
                                                    alt=""
                                                    className="closeStyleDesktop"
                                                    onClick={handleClose}
                                                />

                                                <StyledH1>
                                                    {product.name}
                                                </StyledH1>

                                                <StyledPriceDistanceContainer>
                                                    <StyledPrice>
                                                        {product.price} kr
                                                    </StyledPrice>
                                                    {/* <StyledDistance>
                                                        Avstånd
                                                    </StyledDistance> */}
                                                </StyledPriceDistanceContainer>
                                            </StyledTopContainer>

                                            <StyledDescriptionDiv>
                                                <StyledDescription>
                                                    {product.description}
                                                </StyledDescription>
                                            </StyledDescriptionDiv>
                                            <ContactSeller />
                                        </StyledDesktopContainer>
                                    </Li>
                                </Ul>
                            </StyledContainer>
                        ))}
                </Modal>
            </div>
        </>
    );
};

// CSS

const closeStyleMobile = {
    width: "17.74px",
    height: "17.74px",
    top: "5px",
    right: "10px",
    zIndex: "1",
};

const closeStyle = {
    width: "17.74px",
    height: "17.74px",
    top: "2px",
    right: "5px",
    zIndex: "1",
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    object-fit: fill;

    @media (min-width: 1000px) and (max-width: 1300px) {
        display: flex;
        flex-direction: row;
        height: 400px;

        align-items: start;
        justify-content: start;
    }

    @media (min-width: 1300px) {
        display: flex;
        flex-direction: row;
        height: 100%;

        align-items: start;
        justify-content: start;
    }
`;

const StyledDesktopContainer = styled.div`
    @media (min-width: 1000px) and (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        margin-left: 50px;
        height: 100%;
        right: 0;
    }
    @media (min-width: 1300px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        margin-left: 50px;
        height: 100%;
        right: 0;
    }
`;
const imgStyle = {
    width: "100%",
    height: "100%",

    padding: "0",
    zIndex: "0",
};

const StyledImgDiv = styled.div`
    width: auto;
    // width: 374px;
    display: flex;
    border-radius: 8.33684px;
    align-items: center;
    justify-content: center;
    height: 224px;
    position: relative;
    background: #495057;
    object-fit: fill;
    top: 0.5px;
    bottom: 0;

    z-index: 0;

    @media (min-width: 1000px) and (max-width: 1300px) {
        width: 400px;
        height: 450px;
        margin-top: -30px;

        // height: 100%;
    }
    @media (min-width: 1300px) {
        width: 677px;
        height: 450px;
        margin-top: 0px;
    }
`;

const StyledPriceDistanceContainer = styled.div`
    padding: 10px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: space-between;

    // margin-left: 15px;
    // margin-right: 15px;

    @media (min-width: 1000px) and (max-width: 1300px) {
        display: flex;
        flex-direction: row;
        padding: 0;
        justify-content: space-between;
        align-items: space-between;
    }

    @media (min-width: 1300px) {
        display: flex;
        flex-direction: row;
        padding: 0;

        justify-content: space-between;
        align-items: space-between;
    }
`;

const StyledTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;

    @media (min-width: 1000px) and (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 10px;
        justify-content: start;
    }

    @media (min-width: 1300px) {
        display: flex;
        margin-left: 10px;

        flex-direction: column;
        align-items: start;
        justify-content: start;
    }
`;

const StyledDescriptionDiv = styled.div`
    box-sizing: border-box;
    display: flex;

    width: 310px;
    height: 150px auto;
    padding: 10px;
    margin-left: 10px;

    margin-top: 10px;

    border: 0.543575px solid #c0d0b9;
    border-radius: 2.71787px;

    @media (min-width: 1000px) and (max-width: 1300px) {
        border: 1px solid #c0d0b9;
        border-radius: 5px;
        height: auto;
    }

    @media (min-width: 1300px) {
        border: 1px solid #c0d0b9;
        border-radius: 5px;
        height: auto;
    }
`;

const StyledH1 = styled.h1`

    font-family: "Open Sans", bold, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.25px;
    margin-bottom; 15px;
    margin-top: 15px;
    margin-left: 10px;


    color: #000000;

    @media (min-width: 1000px) and (max-width: 1300px) {
        font-size: 18px;
        line-height: 35px;
        letter-spacing: -0.06em;
        margin-left: 10px;
        margin-bottom; 5px;
        margin-top: 5px;
    }

    @media (min-width: 1300px) {
        // margin-top:50px;
        font-size: 18px;
        line-height: 35px;
        letter-spacing: -0.06em;

        margin-bottom; 5px;
        margin-top: 5px;
    }
`;

const StyledPrice = styled.p`
    // display: flex;
    display: flex;
    justify-content: end;
    align-items: end;
    font-family: "Open Sans", bold, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.25px;
`;
const StyledDistance = styled.p`
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.135894px;
    color: red;

    @media (min-width: 1000px) and (max-width: 1300px) {
        margin-left: 200px;
        font-size: 12px;
    }

    @media (min-width: 1300px) {
        margin-left: 200px;
        font-size: 12px;
    }
`;

const StyledDescription = styled.p`
    position: relative;

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 19px;
    letter-spacing: 0.25px;

    @media (min-width: 1000px) and (max-width: 1300px) {
        width: 428px;
        height: auto;
    }

    @media (min-width: 1300px) {
        width: 428px;
        height: auto;
    }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    top: 50.57px;
`;

const Li = styled.li`
    list-style: none;
    height: 800px;
`;

export default BigModal;
