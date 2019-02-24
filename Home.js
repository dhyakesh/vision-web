import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <div>
      <section className="section container scrollspy" id="contact">
        <h1>VISION IS OUR MISSION</h1>
        <div className="row">
          <div className="col s12 l5">
            <img src="v3.jpg" alt="" className="responsive-img materialboxed" />
          </div>
          <div className="col s12 l5 offset-l2">
            <h4>Education to learners with special needs</h4>
            Education is fundamental for the development of the individual as
            well as for the welfare of the society. Education is not only about
            studies. It is also about how one develops his/her ideas and
            imaginations and grows up into a unique human. On the left is a
            picture of scribes helping the differently abled learn !
          </div>
        </div>
        <div className="row">
          <div className="col s12 l5 offset-l2">
            <h4>Extending a helping hand</h4>
            There no doubt the visually impaired children will contribute to
            the society and create wonders provided they have a proper access to
            reading materials. Our education becomes meaningless when it cannot
            be even useful to enrich one fellow being who has certain special
            needs
          </div>
          <div className="col s12 l5">
            <img src="v5.jpg" alt="" className="responsive-img materialboxed" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 l5">
            <img src="v1.jpg" alt="" className="responsive-img materialboxed" />
          </div>
          <div className="col s12 l5 offset-l2">
            <h4>Be the change !</h4>
            Why not help them out when you can do . The main goal is to build
            strategies which could make them learn easier and better. When
            everyone keeps talking about the change, we thought why not we be
            the change !
          </div>
        </div>
      </section>
      <footer className="page-footer indigo ">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <p className="grey-text text-lighten-4">
                Contact: dhyakeshsoundarajan@gmail.com, aashi.sep28@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © Copyright 2019
            <a className="grey-text text-lighten-4 right" href="#!">
              Made with <i className="material-icons">favorite</i> by Dhyakesh S
              & Aasikaa CMR
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
