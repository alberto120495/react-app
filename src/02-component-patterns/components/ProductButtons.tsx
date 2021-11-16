import { CSSProperties, useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface ButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  //TODO: isMaxReached = useCallback, dependencias[ counter, maxCount ]
  //True si el counter === maxCount
  //false si no lo es

  const isMaxReached = useCallback(() => {
    return !!maxCount && counter === maxCount;
  }, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
