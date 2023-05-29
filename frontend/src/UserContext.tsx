import { createContext } from "react";

// const categoryImages: { [key: string]: string } = {
//     Elektronik: "/ux ikoner/76h/ElectronicsPin76vh.png",
//     Fordon: "/ux ikoner/76h/VehiclePin76vh.png",
//     Fritid: "/ux ikoner/76h/SportPin76vh.png",
//     Hushåll: "/ux ikoner/76h/HomePin76vh.png",
//     Kläder: "/ux ikoner/76h/ClothesPin76vh.png",
//     Övrigt: "/ux ikoner/76h/OtherPin76vh.png",
// };

// const categoryImagesVisited: { [key: string]: string } = {
//     Elektronik: "/ux ikoner/76h/ElectronicsPinVisited76vh.png",
//     Fordon: "/ux ikoner/76h/VehiclePinVisited76vh.png",
//     Fritid: "/ux ikoner/76h/SportPinVisited76vh.png",
//     Hushåll: "/ux ikoner/76h/HomePinVisited76vh.png",
//     Kläder: "/ux ikoner/76h/ClothesPinVisited76vh.png",
//     Övrigt: "/ux ikoner/76h/OtherPinVisited76vh.png",
// };

interface categoryImages {}

interface categoryImagesVisited {}

interface Produkter {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export const UserContext = createContext<{
    setProducts: (produkter: Produkter[]) => void;
    setCategoryImages: (img: string) => void;
    setCategoryImagesVisted: (img: string) => void;
}>;
