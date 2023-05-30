import { useContext, useState } from "react";

import ProductContext from "./ProductContext";

interface PinProps {
    id: number;
    category: string;
    visitedPins: number[];
    setPins: React.Dispatch<React.SetStateAction<number[]>>;
    setSelectedPinId: React.Dispatch<React.SetStateAction<number | null>>;
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

const Pins: React.FC<PinProps> = ({ id, category, visitedPins }) => {
    const { setPins } = useContext(ProductContext);
    const [selectedPinId, setSelectedPinId] = useState<number | null>(null);

    const handleClick = () => {
        console.log(id, category);
        const updatedPins = [...visitedPins, id];
        console.log(updatedPins);

        setPins(updatedPins);
        setSelectedPinId(id);
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
