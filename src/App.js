
import './App.css';
import ProductCard from './components/card'
import productDetails from './components/proData';

function App() {
  // {productDetails.map(function ncard(val){
   // console.log(val.Price);
   function AlerUserOne () {
    alert( 'Product of is' + productDetails[0].productId + ', which is Shoes of brand '+ productDetails[0].Brand + 'has of rupees'+ productDetails[0].Price + 'is added in the cart , please proceed to pay !!! '
    )
  }
  function AlerUserTwo () {
    alert( 'Product of is' + productDetails[1].productId + ', which is Shoes of brand '+ productDetails[1].Brand + 'has of rupees'+ productDetails[1].Price + 'is added in the cart , please proceed to pay !!! '
    )
  }
  function AlerUserThree () {
    alert( 'Product of is' + productDetails[2].productId + ', which is Shoes of brand '+ productDetails[2].Brand + 'has of rupees'+ productDetails[2].Price + 'is added in the cart , please proceed to pay !!! '
    )
  }
  function AlerUserFour () {
    alert( 'Product of is' + productDetails[3].productId + ', which is Shoes of brand '+ productDetails[3].Brand + 'has of rupees'+ productDetails[3].Price + 'is added in the cart , please proceed to pay !!! '
    )
  }
  function AlerUserFive () {
    alert( 'Product of is' + productDetails[4].productId + ', which is Shoes of brand '+ productDetails[5].Brand + 'has of rupees'+ productDetails[4].Price + 'is added in the cart , please proceed to pay !!! '
    )
  }<>
  {productDetails.map((val,index)=>{
    return (
      <div className="App" key={val.productId} >
     
    
      <ProductCard key={val.productId}
      productId={val.productId}
      productDetails={val.productDescription}
      productName={val.productName}
      Brand={val.Brand}
      Price={val.Price}
      Rating={val.Rating}
    />
   
      </div>
      
    );
  })}
  </>
    }
 


export default App;
