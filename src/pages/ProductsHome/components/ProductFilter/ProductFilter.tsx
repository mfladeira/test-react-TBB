import styles from "./ProductFilter.module.scss";
import products from "../../../../products.json";

interface IProductFilter {
    changeCategory: (category: string) => void;
    category: string;
}

export const ProductFilter = (props: IProductFilter) => {
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
                                onChange={(e) =>
                                    props.changeCategory(e.target.value)
                                }
                            />
                            <label htmlFor={category}>{category}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
