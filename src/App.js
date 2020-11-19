import './App.scss';
import ProductItem from './components/productItem/productItem';

function App() {

  const handleClick = () => {
    console.log('click');
  }
  return (
    <div className="App">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export default App;
