import { useState } from "react";
import { Input } from "../../components/Input/Input";
import styles from "./ProductsHome.module.scss";
import { ProductCatalog } from "./components/ProductCatalog/ProductCatalog";
import { ProductFilter } from "./components/ProductFilter/ProductFilter";

export const ProductsHome = () => {
    const [category, setCategory] = useState("");
    const [filter, setFilter] = useState("");

    const onChangeCategory = (category: string) => {
        setCategory(category);
    };

    const onChangeFilter = (filter: string) => {
        setFilter(filter);
    };

    return (
        <div className={styles.ProductsHome}>
            <h1 className={styles.title}>O QUE VOCÊ ESTÁ PROCURANDO?</h1>
            <Input
                placeholder="BUSQUE AQUI"
                filter={filter}
                onChange={onChangeFilter}
            />
            <div className={styles.productFilter}>
                <ProductFilter
                    onChange={onChangeCategory}
                    category={category}
                />
                <ProductCatalog category={category} filter={filter} />
            </div>
        </div>
    );
};
