import { useContext, useState } from "react";

import ProductContext from "../ProductContext";

{
    /* <TestPins
key={product.id}
id={product.id}
category={product.category}
visitedPins={visitedPins}
setPins={setPins}
setSelectedPinId={setSelectedPinId}
openModal={openModal}
/> */
}

interface PinProps {
    id: number;
    category: string;
    visitedPins: number[];
    setPins: React.Dispatch<React.SetStateAction<number[]>>;
    setSelectedPinId: React.Dispatch<React.SetStateAction<number | null>>;
    openModal: () => void;
    // onClick: (id: number, category: string) => void;
}

const categoryImages: { [key: string]: string } = {
    Elektronik: "/ux ikoner/76h/ElectronicsPin76vh.png",
    Fordon: "/ux ikoner/76h/VehiclePin76vh.png",
    Fritid: "/ux ikoner/76h/SportPin76vh.png",
    Hushåll: "/ux ikoner/76h/HomePin76vh.png",
    Kläder: "/ux ikoner/76h/ClothesPin76vh.png",
    Övrigt: "/ux ikoner/76h/OtherPin76vh.png",
};

const categoryImagesVisited: { [key: string]: string } = {
    Elektronik: "/ux ikoner/76h/ElectronicsPinVisited76vh.png",
    Fordon: "/ux ikoner/76h/VehiclePinVisited76vh.png",
    Fritid: "/ux ikoner/76h/SportPinVisited76vh.png",
    Hushåll: "/ux ikoner/76h/HomePinVisited76vh.png",
    Kläder: "/ux ikoner/76h/ClothesPinVisited76vh.png",
    Övrigt: "/ux ikoner/76h/OtherPinVisited76vh.png",
};

const Pins: React.FC<PinProps> = ({ id, category, visitedPins, openModal }) => {
    const { setPins } = useContext(ProductContext);
    const [selectedPinId, setSelectedPinId] = useState<number | null>(null);

    const handleClick = () => {
        const updatedPins = [...visitedPins, id];
        setPins(updatedPins);
        setSelectedPinId(id);
        openModal();
    };
    return (
        <img
            className="styledPins"
            src={
                visitedPins.includes(id)
                    ? categoryImagesVisited[category]
                    : categoryImages[category]
            }
            alt={category}
            onClick={handleClick}
        />
    );
};

export default Pins;
