import { useContext, useState } from "react";
import { ProductContext } from "../ProductContext";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const FirstModal: React.FC<{ selectedProductId: number | null }> = ({
    selectedProductId,
}) => {
    const { products } = useContext(ProductContext);
    const [isFirstModalOpen, setFirstModalOpen] = useState(true);

    const handleCloseFirstModal = () => {
        setFirstModalOpen(false);
    };

    return (
        <>
            <Modal
                show={isFirstModalOpen}
                onHide={handleCloseFirstModal}
                className="firstModalclass"
            >
                {products.length > 0 &&
                    products.map((product) => {
                        const isSelectedProduct =
                            selectedProductId !== null &&
                            selectedProductId === product.id;

                        return (
                            <StyledContainer key={product.id}>
                                {isSelectedProduct && (
                                    <Ul>
                                        <Li>
                                            <StyledImgDiv>
                                                <img
                                                    src="/ux ikoner/Pins/close-modal.png"
                                                    alt="Kryss för att stänga annonsen"
                                                    className="closeStyle"
                                                    style={closeStyle}
                                                    onClick={
                                                        handleCloseFirstModal
                                                    }
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
                                            <p>
                                                Description:{" "}
                                                {product.description}
                                            </p>
                                        </Li>
                                    </Ul>
                                )}
                            </StyledContainer>
                        );
                    })}
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

export default FirstModal;
