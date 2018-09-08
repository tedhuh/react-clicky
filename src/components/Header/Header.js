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
        <ul id="score">Score: {props.score}</ul>
        <ul id="top-score">Top Score: {props.topScore}</ul>


      </div>
    </nav>






  </div> //main div!!




)

export default Header;