  import React from 'react'
import homebanner from "../images/homeBcg.jpeg";
import "./homestyle.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-12">
                  <h3 style={{margin-top: "250px"; margin-left: "18em"; color: "rgb(255, 255, 255)";}}>Welcome to Food Recipe</h3>
                <Link to="/foodsearch">
                    <button type="button" class="btn btn-success" style={{marginTop:"250px",marginLeft: "42em"}}>Recipe Url</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
