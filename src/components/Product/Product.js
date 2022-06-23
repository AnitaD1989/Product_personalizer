import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import {useState} from 'react';
import Products from '../Products/Products';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }


  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(item =>
                <li key={item}><button type="button" onClick={() => props.setCurrentSize(item.name)} className={clsx( item.name) === props.currentSize && styles.active}>{item.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item => <li key={item}><button type="button" onClick={() => props.setCurrentColor(item)} className={clsx(styles['color' + item[0].toUpperCase() + item.substr(1).toLowerCase()], item === props.currentColor && styles.active)} /></li>)}
            </ul>
          </div>
  
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;