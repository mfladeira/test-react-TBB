import styles from "./Input.module.scss";
// import lupa from "../../assets/lupa.svg";

interface IInput {
    placeholder: string;
    onChange: (filter: string) => void;
    filter: string;
}

export const Input = (props: IInput) => {
    return (
        <div className={styles.Input}>
            <input
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e.target.value)}
                value={props.filter}
            />
        </div>
    );
};
