// import Modal from "react-modal";
import styled from "styled-components";
import ObjectCard from "../components/ObjectCard";

function TestView() {
    return (
        <>
            <StyledContainer>
                {" "}
                <h1>TestView</h1>
                <ObjectCard />
                {/* <button>Objekt-knapp</button> */}
            </StyledContainer>
        </>
    );
}

const StyledContainer = styled.div`
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
`;

export default TestView;
