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
          <Collection/>
          <Collection/>
          <Collection/>
          <Collection/>
      </div>
      </div>
      <Footer/> 
   </>
  )
}

export default App
