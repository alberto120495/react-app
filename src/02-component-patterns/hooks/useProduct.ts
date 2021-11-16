import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/productInterfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?:InitialValues
}

function useProduct({ onChange, product, value = 0, initialValues }: useProductArgs) {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMountedRef = useRef(false)

  const increaseBy = (value: number) => {
    let newValue =  Math.max(counter + value, 0);
    if(initialValues?.maxCount) {
     newValue = Math.min(newValue, initialValues.maxCount);
    }
    
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });

  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if(!isMountedRef.current) return
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMountedRef.current = true
  }, [])

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
  };
}

export default useProduct;
