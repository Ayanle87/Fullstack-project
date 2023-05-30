import React, { useState } from "react";

import Modal from "react-modal";
import styled from "styled-components";
import BigModal from "./BigModal";

// Definiera de stylade komponenterna här
const StyledContainer = styled.div`
  /* Stylings för container */
`;

const Ul = styled.ul`
  /* Stylings för ul */
`;

const Li = styled.li`
  /* Stylings för li */
`;

const StyledImgDiv = styled.div`
  /* Stylings för imgDiv */
`;

const StyledTopContainer = styled.div`
  /* Stylings för topContainer */
`;

const StyledH1 = styled.h1`
  /* Stylings för h1 */
`;

const StyledPriceDistanceContainer = styled.div`
  /* Stylings för priceDistanceContainer */
`;

const StyledPrice = styled.div`
  /* Stylings för price */
`;

const StyledDistance = styled.div`
  /* Stylings för distance */
`;

const arrowStyle = {
  /* Stylings för arrowStyle */
};

interface ModalPinsProps {
  selProduct: number;
}

const ModalPins: React.FC<ModalPinsProps> = ({ selProduct }) => {
  // Här kommer din befintliga kod utan ändringar
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <Modal
      isOpen={isModalOpen}
      // onRequestClose={handleCloseModal}
      className="smallModalclass"
      style={{
        overlay: {
          zIndex: 9999,
        },
      }}/>}
    // >
    //   {selectedProduct && (
    //     <StyledContainer>
    //       <Ul>
    //         <Li key={selectedProduct.id}>
    //           <StyledImgDiv>
    //             <img
    //               src="/ux ikoner/Pins/close-modal.png"
    //               alt="Kryss för att stänga annonsen"
    //               className="closeStyle"
    //               // style={closeStyle}
    //               // onClick={handleCloseModal}
    //             />

    //             <img
    //               alt="product"
    //               src={"http://localhost:8080" + selectedProduct.image}
    //               style={imgStyle}
    //               className="imgStyle"
    //             />
    //           </StyledImgDiv>

    //           <StyledTopContainer>
    //             <StyledH1>{selectedProduct.name}</StyledH1>

    //             <StyledPriceDistanceContainer>
    //               <StyledPrice>{selectedProduct.price}kr</StyledPrice>
    //               <StyledDistance>500m bort</StyledDistance>
    //             </StyledPriceDistanceContainer>
    //           </StyledTopContainer>
    //           <div>
    //             <img
    //               src="/ux ikoner/arrow.png"
    //               alt="Pil för att öppna annonsen"
    //               style={arrowStyle}
    //               onClick={handleOpen}
    //             />
    //             {isBigModalOpen && (
    //               <BigModal selectedProductId={selectedProductId} />
    //             )}
    //           </div>
    //         </Li>
    //       </Ul>
    //     </StyledContainer>
    //   )}
          // </Modal>
  // );
// };

export default ModalPins;
