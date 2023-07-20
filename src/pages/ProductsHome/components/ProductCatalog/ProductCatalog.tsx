import styles from "./ProductCatalog.module.scss";
import products from "../../../../products.json";

interface IProductCatalog {
    category: string;
    filter: string;
}

export const ProductCatalog = (props: IProductCatalog) => {
    const productsFilteredByCategoryAndByName = products.data.nodes
        .filter((product) => product.category.name === props.category)
        .filter((product) =>
            product.name
                .toLocaleUpperCase()
                .includes(props.filter.toLocaleUpperCase())
        );

    return (
        <div className={styles.ProductCatalog}>
            <p>
                <strong>{products.data.nodes.length}</strong> resultados
            </p>
            <hr />
            <div className={styles.productsContainer}>
                {productsFilteredByCategoryAndByName.map((product) => {
                    return (
                        <figure key={product.id}>
                            <img
                                src={product.images[0].asset.url}
                                alt="Trulli"
                            />
                            <figcaption>{product.name}</figcaption>
                        </figure>
                    );
                })}
            </div>
        </div>
    );
};
