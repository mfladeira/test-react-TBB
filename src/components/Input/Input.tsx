import styles from "./Input.module.scss";
// import lupa from "../../assets/lupa.svg";

interface IInput {
    placeholder: string;
}

export const Input = (props: IInput) => {
    return (
        <div className={styles.Input}>
            <input placeholder={props.placeholder} />
        </div>
    );
};
