import styles from "./ProductCatalog.module.scss";
import products from "../../../../products.json";

interface IProductCatalog {
    category: string;
}

export const ProductCatalog = (props: IProductCatalog) => {
    const productsFilteres = products.data.nodes.filter(
        (product) => product.category.name === props.category
    );
    
    return (
        <div className={styles.ProductCatalog}>
            <p>
                <strong>{products.data.nodes.length}</strong> resultados
            </p>
            <hr />
            <div className={styles.productsContainer}>
                {productsFilteres.map((product) => {
                    return (
                        <figure key={product.id}>
                            <img
                                src={product.images[0].asset.url}
                                alt="Trulli"
                            />
                            <figcaption>
                                Fig.1 - Trulli, Puglia, Italy.
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </div>
    );
};
