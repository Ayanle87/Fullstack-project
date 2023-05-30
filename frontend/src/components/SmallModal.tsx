import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import styled from "styled-components";
import BigModal from "./BigModal";
import Pins from "./Pins";

import { useContext } from "react";
import { ProductContext } from "../ProductContext";

// Interface som specificerar vad som ska finnas i product
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface ProductProps {
    // id: number;
    // category: string;
    // visitedPins: number[];
    // onClick: (id: number, category: string) => void;
    products: Product[];
}

// React.FC<PinProps> = ({ id, category, visitedPins, onClick }) =>
// Huvudfunktionen
const SmallModal: React.FC<ProductProps> = ({ products }) => {
    // const products = useContext(ProductContext);
    // Här sparas det som fecthas från backend
    const [result, setResult] = useState<Product[]>([]);

    // Sparar ID:t på vald produkt. Det gör att rätt produkt visas när den är vald
    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );

    //För att kunna öppna och stänga den lilla modalen
    const [isModalOpen, setModalOpen] = useState(false);

    // Om en pin blivit klickad på så ska den byta bild
    const [visitedPins, setVisitedPins] = useState<number[]>([]);

    //För att kunna öppna och stänga den stora modalen
    const [isBigModalOpen, setIsBigModalOpen] = useState(false);

    //Öppnar den stora modalen
    const handleOpen = () => {
        console.log("Öppnar stor modal");

        setIsBigModalOpen(true);
        setModalOpen(false);
    };

    const handleCloseBigModal = () => {
        setIsBigModalOpen(false);
    };

    // Hämtar datan från backendet
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

    // Söker igenom det som fetchats och och letar upp det matchde id:numret.
    const selectedProduct = selectedProductId
        ? result.find((product) => product.id === selectedProductId)
        : null;

    // Funktion som sätter selectedProductIds useState till det ID som klickats på, samt uppdaterar pinsen till nya om de blivit klickade på och öppnar modalen.
    const handleClick = (id: number, category: string) => {
        setSelectedProductId(id);
        handleOpenModal();

        setVisitedPins((prevVisitedPins) => [...prevVisitedPins, id]);
    };

    // Öppnar modalen när man klickar på en pin
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    // Stänger modalen när man klickar på en pin
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {/* {result.length > 0 &&
                result

                    //skapar en array av img baserat på resultatet från fetchen. I src sätter kategorin rätt kategori-bild uifrån produktkatergorin från databasen.Om en pin blivit klickad byts bild (Se categoryImages och categoryImagesVisited längst upp). HandleClick skickar med produkt id:t som argument för att rätt produkt ska visas.
                    .map((product) => (
                        <Pins
                            key={product.id}
                            id={product.id}
                            category={product.category}
                            visitedPins={visitedPins}
                            setPins={setPins}
                        />
                    ))} */}
            {/* Modalen som öppnas 'onClick' på pinsen. Modalen innehåller namn, bild, pris, produktbeskrivning. */}

            {result.length > 0 &&
                result.map((product) => (
                    <button
                        onClick={() =>
                            handleClick(product.id, product.category)
                        }
                    >
                        Öppna annons
                    </button>
                ))}

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="smallModalclass"
                style={{
                    overlay: {
                        zIndex: 9999,
                    },
                }}
            >
                {selectedProduct && (
                    <StyledContainer>
                        <Ul>
                            <Li key={selectedProduct.id}>
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
                                            selectedProduct.image
                                        }
                                        style={imgStyle}
                                        className="imgStyle"
                                    />
                                </StyledImgDiv>

                                <StyledTopContainer>
                                    <StyledH1>{selectedProduct.name}</StyledH1>

                                    <StyledPriceDistanceContainer>
                                        <StyledPrice>
                                            {selectedProduct.price}kr
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
                                        className="arrowStyle"
                                        onClick={handleOpen}
                                    />
                                    {isBigModalOpen && (
                                        <BigModal
                                            selectedProductId={
                                                selectedProductId
                                            }
                                        />
                                    )}
                                </div>
                            </Li>
                        </Ul>
                    </StyledContainer>
                )}
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

const arrowStyle = {
    width: "28px",
    height: "18px",
    // position: "absolute",
    bottom: "10px",
    right: "10px",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    right: "0",
    zIndex: "0",
    // borderRadius: "8.33684px",
};

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledImgDiv = styled.div`
    width: 100%;
    // width: 374px;
    border-radius: 8.33684px;

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

export default SmallModal;
