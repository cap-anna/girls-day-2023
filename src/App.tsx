import rollercoster from '/rollercoster.jpeg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="header">
        <img className="header-img" src={rollercoster} alt="" />
        <div className="headline">
          <h1>My fancy headline 😊</h1>
        </div>
      </div>

      <div className="main-content">
        <div className="drinks">
          <h3 className="content-headline">Our drinks 🍹</h3>
          <p className="info">
            some basic information I'd like to provide my customers
          </p>
          <div className="table">
            <p>
              <strong>Water</strong>
            </p>
            <p>€ 2.90</p>
          </div>
          <br/>
          <div className="table">
            <p>
              <strong>Lemonade</strong>
            </p>
            <p>€ 3.20</p>
          </div>
        </div>
        <div className="burger">
          <h3 className="content-headline">Our burgers 🍔</h3>
          <p className="info">
            some basic information I'd like to provide my customers
          </p>
          <div className="table">
            <div className='name-ingredients'>
              <p>
                <strong>First burger</strong>
              </p>
              <p>Something about ingredients</p>
            </div>
            <p>€ 12.90</p>
          </div>
        </div>
        <div className="sweets">
          <h3 className="content-headline">Time for dessert? 🤤</h3>
          <p className="info">
            some basic information I'd like to provide my customers
          </p>
        </div>
      </div>

      <div className="footer">
        <p className='footer-headline'>This will be an awesome footer</p>
        <div className="footer-content">
          <p>about us</p>
          <div className="divider" />
          <p>find us</p>
          <div className="divider" />
          <p>social media accounts</p>
        </div>
      </div>
    </div>
  );
}

export default App
