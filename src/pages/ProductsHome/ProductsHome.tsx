import { Input } from "../../components/Input/Input";
import styles from "./ProductsHome.module.scss";
import { ProductCatalog } from "./components/ProductCatalog/ProductCatalog";
import { ProductFilter } from "./components/ProductFilter/ProductFilter";

export const ProductsHome = () => {
    return (
        <div className={styles.ProductsHome}>
            <h1 className={styles.title}>O QUE VOCÊ ESTÁ PROCURANDO?</h1>
            <Input placeholder="BUSQUE AQUI" />
            <div className={styles.productFilter}>
                <ProductFilter />
                <ProductCatalog category="Roll On"/>
            </div>
        </div>
    );
};
