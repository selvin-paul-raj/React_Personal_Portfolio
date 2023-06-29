/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import img1 from  ".././Images/1.png"
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Selvin PaulRaj K</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur labore neque optio voluptas earum minima doloribus?</p>
        <div className="social-media">
          <a href="#twitter"><i className='bx bxl-twitter'></i></a>
          <a href="#instagram"><i className='bx bxl-instagram'></i></a>
          <a href="#github"><i className='bx bxl-github'></i></a>
          <a href="#linkedin"><i className='bx bxl-linkedin'></i></a>
        </div>
        <a href="#cv" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={img1} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
