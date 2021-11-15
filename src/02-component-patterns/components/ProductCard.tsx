import useProduct from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/productInterfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

const { Provider } = ProductContext;

export function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value
}: Props) {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}

export default ProductCard;
