import React, { Component } from "react";
import "./Home.css";
import logo from "./slider-1.jpeg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <center>
            <h1>Need Serice from Us?</h1>
          </center>
        </div>

       
          <div class="container">
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png"
                    width="50px"
                  />

                  <p>Painting</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png"
                    width="50px"
                  />

                  <p>Cleaning and Pest Control</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg"
                    width="50px"
                  />

                  <p>Electrician</p>
                </div>
              </div>
            </Link>
            <Link to="/carpenters" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"
                    width="50px"
                    height="50px"
                  />

                  <p>Plumbers and Carpenters</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"
                    width="50px"
                  />

                  <p>Appliance Repair</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1648014014246-972464.png"
                    width="50px"
                  />

                  <p>House Cleaning</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1615440995882-3b2e17.png"
                    width="50px"
                  />

                  <p>Ac Service& Repair</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
                    width="50px"
                  />

                  <p>Men's Theraples</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
                    width="50px"
                  />

                  <p>Women Theraples</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1648016137982-eab9ea.png"
                    width="50px"
                  />

                  <p>Age Care Cleaning</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1648013933586-d6a28b.png"
                    width="50px"
                  />

                  <p>End of Lease Cleaning</p>
                </div>
              </div>
            </Link>
          </div>
          
        
        <br/>
        <br/>
        <center>
        <h1>Home Repairs</h1>
        </center>
        <br/>

          <div class="container1">
            <Link to="/carpenters" className="images">
              <div class="card1">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg"
                    width="156px"
                  />

                  <p>Carpenters</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card1">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/electrician.jpg"
                    width="156px"
                  />

                  <p>Electricians</p>
                </div>
              </div>
            </Link>
            <Link to="/" className="images">
              <div class="card1">
                <div class="content">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg"
                    width="156px"
                  />

                  <p>Plumbers</p>
                </div>
              </div>
            </Link>
            </div>

      </div>
    );
  }
}

export default Home;
