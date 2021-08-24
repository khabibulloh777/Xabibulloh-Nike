import './App.css';
import Home from './pages/Homepage/Home';
 import Cart from './pages/Cartpage/Cart';
 import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './components/Products/Products';
import Section2 from './components/Section2/Section2';
function App() {
     const handleHeaderSearch= (e) =>{
      const mainHeader =   document.querySelector('.main__header')
      mainHeader.classList.add('mainHeaderSearchActive')
      const minContainer = document.querySelector('.main__container')
      minContainer.classList.add('mainContainerNotActive')
    }
  const handleHeaderSearchHide = (e) =>{
    const mainHeader =   document.querySelector('.main__header')
    mainHeader.classList.remove('mainHeaderSearchActive')
    const minContainer = document.querySelector('.main__container')
    minContainer.classList.remove('mainContainerNotActive')
    }
    

  
  return (
    <Router>
      <div className="app">

      <Header  callback={handleHeaderSearch} removeCakkback={handleHeaderSearchHide} />
        <Switch>
        <Route exact path="/" component={() => <Home/>}/>
          <Route exact path="/cart" component={() => <Cart/>} />
          <Route exact path="/products" component={() => <Products/>} /> 
          <Route exact path="/Section2" component={() => <Section2/> } />
        </Switch>
      </div>
    </Router>
  );
}



export default App;