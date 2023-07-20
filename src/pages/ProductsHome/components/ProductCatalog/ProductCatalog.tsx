import styles from "./ProductCatalog.module.scss";
import products from "../../../../products.json";

interface IProductCatalog {
    category: string;
    filter: string;
}

export const ProductCatalog = (props: IProductCatalog) => {
    let productsFilteredByCategoryAndByName = [];

    if (props.category !== "" && props.filter !== "") {
        productsFilteredByCategoryAndByName = products.data.nodes
            .filter((product) => product.category.name === props.category)
            .filter((product) =>
                product.name
                    .toLocaleUpperCase()
                    .includes(props.filter.toLocaleUpperCase())
            );
    } else if (props.filter !== "") {
        productsFilteredByCategoryAndByName = products.data.nodes.filter(
            (product) =>
                product.name
                    .toLocaleUpperCase()
                    .includes(props.filter.toLocaleUpperCase())
        );
    } else if (props.category !== "") {
        productsFilteredByCategoryAndByName = products.data.nodes.filter(
            (product) => product.category.name === props.category
        );
    } else {
        productsFilteredByCategoryAndByName = products.data.nodes;
    }

    return (
        <div className={styles.ProductCatalog}>
            <p>
                <strong>{productsFilteredByCategoryAndByName.length}</strong>{" "}
                Resultados
            </p>
            <hr />
            <div className={styles.productsContainer}>
                {productsFilteredByCategoryAndByName.map((product) => {
                    return (
                        <div
                            className={styles.figureContainer}
                            key={product.id}
                        >
                            <figure>
                                <img
                                    src={product.images[0].asset.url}
                                    alt="Trulli"
                                />
                                <figcaption>{product.name}</figcaption>
                            </figure>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
