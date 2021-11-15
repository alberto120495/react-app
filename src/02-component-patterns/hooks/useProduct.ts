import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/productInterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args:onChangeArgs) => void;
  value?:number
}

function useProduct({onChange, product, value = 0}:useProductArgs) {
  const [counter, setCounter] = useState(value);

  const isControlledRef = useRef(!!onChange)

  const increaseBy = (value: number) => {

    if(isControlledRef.current && onChange){
      return onChange({count:value, product})
    }

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);
    onChange && onChange({count:newValue, product});
  };


  useEffect(() => {
    setCounter(value)
  }, [value])

  return { counter, increaseBy };
}

export default useProduct;
