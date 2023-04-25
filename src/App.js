
import './App.css';
import ProductCard from './components/card'
import productDetails from './components/productDetails';

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
  }
    return (
      <div className="App">
      <ProductCard 
      alertFunction  = {AlerUserOne}
      productId= {productDetails[0].productId}
productPic= {productDetails[0].productPic}
productName= {productDetails[0].productName}
Brand= {productDetails[0].Brand}
productDescription ={productDetails[0].productDescription}
Price ={productDetails[0].Price}
Rating ={productDetails[0].Rating}
    />
    <ProductCard 
    alertFunction  = {AlerUserTwo}
    productId= {productDetails[1].productId}
productPic= {productDetails[1].productPic}
productName= {productDetails[1].productName}
Brand= {productDetails[1].Brand}
productDescription ={productDetails[1].productDescription}
Price ={productDetails[1].Price}
Rating ={productDetails[1].Rating}
  />
  <ProductCard 
  alertFunction  = {AlerUserThree}
  productId= {productDetails[2].productId}
productPic= {productDetails[2].productPic}
productName= {productDetails[2].productName}
Brand= {productDetails[2].Brand}
productDescription ={productDetails[2].productDescription}
Price ={productDetails[2].Price}
Rating ={productDetails[2].Rating}
/>
<ProductCard 
alertFunction  = {AlerUserFour}
productId= {productDetails[3].productId}
productPic= {productDetails[3].productPic}
productName= {productDetails[3].productName}
Brand= {productDetails[3].Brand}
productDescription ={productDetails[3].productDescription}
Price ={productDetails[3].Price}
Rating ={productDetails[3].Rating}
/>
<ProductCard 
alertFunction  = {AlerUserFive}
productId= {productDetails[4].productId}
productPic= {productDetails[4].productPic}
productName= {productDetails[4].productName}
Brand= {productDetails[4].Brand}
productDescription ={productDetails[4].productDescription}
Price ={productDetails[4].Price}
Rating ={productDetails[4].Rating}
/>
      </div>
    );
    }
 


export default App;
