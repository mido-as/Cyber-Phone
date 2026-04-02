import Header from "./components/Header"
import Product from "./components/Product"
import Collection from "./components/Collection"
import Footer from "./components/Footer"
import productsInfo from "./components/productData"


function App() {
  

  return (
   <>
      <Header/>
      <Product/>
      <div className="container d-flex flex-column align-items-start gap-4 p-4">
        <h3>Related Products</h3>
        <div className="d-flex col-10 justify-content-between align-items-center gap-5">
          
          <Collection name = {productsInfo[0].productName}
            code = {productsInfo[0].productCode}
            price = {productsInfo[0].productPrice}
            img = {productsInfo[0].productURL}/>

          <Collection name = {productsInfo[1].productName}
            code = {productsInfo[1].productCode}
            price = {productsInfo[1].productPrice}
            img = {productsInfo[1].productURL}/>

          <Collection name = {productsInfo[2].productName}
            code = {productsInfo[2].productCode}
            price = {productsInfo[2].productPrice}
            img = {productsInfo[2].productURL}/>

          <Collection name = {productsInfo[3].productName}
            code = {productsInfo[3].productCode}
            price = {productsInfo[3].productPrice}
            img = {productsInfo[3].productURL}/>
      </div>
      </div>
      <Footer/> 
   </>
  )
}

export default App
