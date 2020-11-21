import React, { useContext, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Spinner from '../../components/spinner/spinner';
import './store.scss';
import ProductItem from '../../components/productItem/productItem';
import { CurrencyContext } from '../../contexts/currencycontext';
import { ProductsContext } from '../../contexts/productsContext';

const StorePage = () => {
  const { currency } = useContext(CurrencyContext);
  const { dispatch } = useContext(ProductsContext);

  const PRODUCTS_QUERY = gql`
      query GetProducts {
        products {
        id, image_url, title, 
        price(currency: ${currency.currency})
      }
    }`;
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);
  useEffect(() => {
    if(data) {
      dispatch({ type: 'SET_PRODUCTS', payload: data.products})
    }
  }, [data, dispatch]);
  
  if(error) {
    return (
      <section className="storepage__wrapper">
        <header>
          <h1>All Products</h1>
          <p>A 360<span>&#176;</span> Look at Lumin</p>
        </header>
        <main>
          <h1 className="error">
            Error occured while fetching products. Please refresh the page!!!
          </h1>
        </main>
      </section>
    )
  }

  return (  
    <section className="storepage__wrapper">
      <header>
        <h1>All Products</h1>
        <p>A 360<span>&#176;</span> Look at Lumin</p>
      </header>
      <main>
        {loading ? <Spinner /> : 
          <section className="products">
            { data.products.map((product) => (
              <ProductItem product={product} key={`${product.id}-${product.title}`}/>
            ))}
          </section>
        }
      </main>
    </section>
  );
}
 
export default StorePage;