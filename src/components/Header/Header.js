import React from "react";
import "./Header.css";


const Header = (props) => (
  <div className="main-container">



    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active " href="/" id="button"><h3>Clicky Game</h3> <span class="sr-only">(current)</span></a></div>
        <a class="nav-item nav-link active" id="instructions" ><h3>Click an Image to Begin</h3> <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link active" id="score" ><h3>Score:{props.score}</h3> <span class="sr-only"></span></a>
        <a class="nav-item nav-link active" id="top-score" ><h3>Top Score:{props.topScore}</h3> <span class="sr-only"></span></a>




      </div>
    </nav>






  </div> //main div!!




)

export default Header;