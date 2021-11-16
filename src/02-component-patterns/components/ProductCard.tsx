import useProduct from "../hooks/useProduct";
import { createContext, CSSProperties } from "react";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/productInterfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const { Provider } = ProductContext;

export function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
}

export default ProductCard;
