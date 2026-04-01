function Footer() {
  return (
   <div id="footer" className="container col-10 d-flex justify-content-center align-items-center mt-5">

    <div className="col-10 d-flex justify-content-center align-items-start flex-column" >

      <div id="footerContent" className="d-flex justify-content-between align-items-start gap-3 p-4">

        <div className="col-3">
          <h4>Cyber</h4>
          <p>We are a residential interior design firm located in Portland. Our 
            boutique-studio offers more than
          </p>
        </div>

        <div>
          <h4>Services</h4>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
        </div>

        <div>
          <h4>Assistance to the buyer</h4>
            <ul className="list-unstyled d-flex flex-column gap-2" >
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
        </div>

      </div>

      <div id="footerSocial" className="d-flex justify-content-between" >
          <img src="https://img.icons8.com/?size=100&id=102907&format=png&color=FFFFFF" alt="" />
          <img src="https://img.icons8.com/?size=100&id=118490&format=png&color=FFFFFF" alt="" />
          <img src="https://img.icons8.com/?size=100&id=juS4pYkbvSCh&format=png&color=FFFFFF" alt="" />
          <img src="https://img.icons8.com/?size=100&id=84884&format=png&color=FFFFFF" alt="" />
      </div>

    </div>
   </div>
  )
}

export default Footer