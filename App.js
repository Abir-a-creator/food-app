import React from "react"
import './style.css';


function App() {
  return (
    <div className="App">
<div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Healthy Eating</h1>
          <br />
          <img src="/healthyFood.jpg" alt="food" />
          <br />
          <img src="/healthyEating.jpg" alt="Eat" />
        </div>
        <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
          </video>
      
      </div>
    );
  }


export default App;
