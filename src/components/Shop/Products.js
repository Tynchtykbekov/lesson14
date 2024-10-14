import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 'b1',
    title: 'Harry Potter and Prisoner of Azkaban',
    price: 20,
    description: 'One of the best books of Wizard World stories'
  } ,
  {
    id: 'b1',
    title: 'Harry Potter and Fire Cup',
    price: 20,
    description: 'Buy now with 20% off discount'
  },
  {
    id: 'b1',
    title: 'Harry Potter and Sorcecer Stone',
    price: 20,
    description: 'Amazing story and amazing book'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(el => {
     return <ProductItem
      
      key={el.id}
     id={el.id}
      title= {el.title}
      price={el.price}
      description= {el.description}
    />
        })}
   
      </ul>
    </section>
  );
};

export default Products;
