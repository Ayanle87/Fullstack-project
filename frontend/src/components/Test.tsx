import { useContext } from "react";
import { ProductContext } from "../ProductContext";

const Test: React.FC = () => {
    const { products } = useContext(ProductContext);

    return (
        <>
            <h1>Test</h1>{" "}
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Test;
