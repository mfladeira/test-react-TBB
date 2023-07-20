import styles from "./ProductFilter.module.scss";
import products from "../../../../products.json";
import resetFilter from "../../../../assets/resetFilter.svg";

interface IProductFilter {
    onChange: (category: string) => void;
    category: string;
}

export const ProductFilter = (props: IProductFilter) => {
    const categories = Array.from(
        new Set(products.data.nodes.map((product) => product.category.name))
    );

    return (
        <div className={styles.ProductFilter}>
            <div className={styles.containerFilter}>
                <p>Filtros</p>
                <img
                    src={resetFilter}
                    alt="Ícone de resetar"
                    onClick={() => props.onChange("")}
                />
            </div>
            <hr />
            <div className={styles.containerOptions}>
                {categories.map((category) => {
                    return (
                        <div className={styles.option} key={category}>
                            <input
                                type="radio"
                                checked={props.category === category}
                                id={category}
                                name="categories"
                                value={category}
                                onChange={(e) => props.onChange(e.target.value)}
                            />
                            <label htmlFor={category}>{category}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
