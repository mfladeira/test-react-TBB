import styles from "./ProductFilter.module.scss";
import products from "../../../../products.json";

export const ProductFilter = () => {
    const categories = Array.from(
        new Set(products.data.nodes.map((product) => product.category.name))
    );

    return (
        <div className={styles.ProductFilter}>
            <p>Filtros</p>
            <hr />
            <div className={styles.containerOptions}>
                {categories.map((category) => {
                    return (
                        <div className={styles.option} key={category}>
                            <input
                                type="radio"
                                id={category}
                                name="categories"
                                value={category}
                            />
                            <label htmlFor={category}>{category}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
