import "./Normalize.css";
import "./App.css";
import Navbar from "./navbar";
import img from "./assets/burgess-milner-OYYE4g-I5ZQ-unsplash 1.png";
import PROMOTION from "./assets/PROMOTION.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={img} alt="" style={{ width: "100%" }} />
        <div className="content">
          <center>
            Home of the best merch store. Huggy merch store!
            <p className="Danger">
              <strong>Don't buy anything = I kill you - Huggy Playz</strong>
            </p>
          </center>
          <div style={{flexWrap: "nowrap"}}>
          <div className="card" style={{ width: "18rem"}}>
            <img src={PROMOTION} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            </div>

            <div style={{flexWrap: "wrap"}}>
          <div className="card" style={{ width: "18rem"}}>
            <img src={PROMOTION} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            </div>
            </div>
          </div>
          

            
        </div>
      </div>
    </>
  );
}

export default App;
