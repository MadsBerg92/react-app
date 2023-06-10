import ProductInterface from "../../components/products/ProductInterface";


const getProductBySearch = function (searchQuery: string): Promise<ProductInterface[]> {
    const url = `http://localhost:3016/product?search=${encodeURIComponent(searchQuery)}`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

export default getProductBySearch;