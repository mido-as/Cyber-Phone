import Header from "./components/Header"
import Product from "./components/Product"
import Collection from "./components/Collection"
import Footer from "./components/Footer"


function App() {
  

  return (
   <>
      <Header/>
      <Product/>
      <div className="container d-flex flex-column align-items-start gap-4 p-4">
        <h3>Related Products</h3>
        <div className="d-flex col-10 justify-content-between align-items-center gap-5">
          <Collection productName = "Apple iPhone 17 Pro Orange"
            productCode = "(MQ233)" 
            productPrice = "1000 $" 
            img = "https://static.reach-tele.com/uploads/thumbs/1a/1a686ddea41de0779e66d3953a9418a7.png"/>
          <Collection productName = "Oneplus 15 with Snapdragon 8 Elite Gen 5"
            productCode = "(MQ243)" 
            productPrice = "700 $" 
            img = "https://image01-in.oneplus.net/media/202511/06/4fd767bdb010e0b78639871524cce2a5.png?x-amz-process=image/format,webp/quality,Q_80"/>
          <Collection productName = "Tecno Camon 40"
            productCode = "(MQ273)" 
            productPrice = "500 $" 
            img = "https://www.atom.com.mm/uploads/ATOM-2025/devicebundle/Camon40_308PX-x-308PX-id.png"/>
          <Collection productName = "Samsung Galaxy S26 Ultra 5G"
            productCode = "(MQ238)" 
            productPrice = "900 $" 
            img = "https://myxprs.com/cdn/shop/files/SamsungGalaxyS26Ultra5G12GBRam512GBxprs.webp?v=1772620020"/>

          
      </div>
      </div>
      <Footer/> 
   </>
  )
}

export default App
