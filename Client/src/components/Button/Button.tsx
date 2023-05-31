import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
