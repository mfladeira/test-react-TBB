import { useState } from "react";
import { Input } from "../../components/Input/Input";
import styles from "./ProductsHome.module.scss";
import { ProductCatalog } from "./components/ProductCatalog/ProductCatalog";
import { ProductFilter } from "./components/ProductFilter/ProductFilter";

export const ProductsHome = () => {
    const [category, setCategory] = useState("");

    const changeCategory = (category: string) => {
        setCategory(category);
    };

    return (
        <div className={styles.ProductsHome}>
            <h1 className={styles.title}>O QUE VOCÊ ESTÁ PROCURANDO?</h1>
            <Input placeholder="BUSQUE AQUI" />
            <div className={styles.productFilter}>
                <ProductFilter
                    changeCategory={changeCategory}
                    category={category}
                />
                <ProductCatalog category={category} />
            </div>
        </div>
    );
};
