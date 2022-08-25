import styles from './Product.module.scss';
import {useState} from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from "prop-types";
import { useMemo } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo (() => {
    const price = props.sizes.find(({name}) => name === currentSize)
    return props.basePrice + price.additionalPrice;

  }, [props.basePrice, currentSize, props.sizes]);


  const handleSubmit = event => {
    event.preventDefault();
    console.log("Added product");
    console.log("==========");
    console.log ("Title", props.title);
    console.log("Price", getPrice(props.basePrice));
    console.log("Size", currentSize);
    console.log("Color", currentColor);
}

    return (
    <article className={styles.product}>
      <ProductImage 
        name={props.name}
        color={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price:{getPrice}</span>
        </header>
        <ProductForm 
          {...props} 
          currentColor={currentColor} 
          setCurrentColor={setCurrentColor} 
          currentSize={currentSize} 
          setCurrentSize={setCurrentSize} 
          handleSubmit={handleSubmit}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
}

export default Product;