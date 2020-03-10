import React from 'react';
import '../App.css';
import bkgImg from '../fillerImages/background.jpg';

const Services = () => {
  return (
    <div style={backGroundImg}>
      <div style={divContentMargin}>
        <div style={centerMenu}>
          <h1 style={headerFont}>Services</h1>
          <p style={boldTextUnderline}>Holistic Skin Treatments</p>
          <p>30 minutes ...............................................$45</p>
          <p>50 minutes ...............................................$65</p>
          <p>Anti-Aging (includes acid peel) .............$85</p>
          <p>Acne (includes acid peel) .......................$85</p>
          <p>Add-on: </p>
          <p>High Frequency ......................................$10</p>
          <p>Fruit/lactic/glycolic acid peel ................$15</p>
          <p style={boldTextUnderline}>Lash Extensions</p>
          <p>Initial Set :</p>
          <p>
            Classic..................................................... $175
          </p>
          <p>
            Hybrid .....................................................$200
          </p>
          <p>Volume........................................ COMING SOON!</p>
          <p>Fill:</p>
          <p>2-3 week fill : Classic ..............................$60</p>
          <p>4 week fill: Classic ..................................$75</p>
          <p>2-3 week fill: Hybrid................................$70</p>
          <p>*Lash prices subject to change. </p>
          <p style={boldTextUnderline}>Waxing & Tinting</p>
          <p>
            Brow .........................................................$15
          </p>
          <p>Brow Tint..................................................$15</p>
          <p>Brow Wax & Tint......................................$25</p>
          <p>Lash Tint ..................................................$20</p>
          <p>
            Lip.............................................................$10
          </p>
          <p>Brow/Lip combo......................................$20</p>
          <p>
            Chin..........................................................$12
          </p>
          <p>Cheeks/Sides of face...............................$20</p>
          <p>Full face (includes brows)........................$45</p>
          <p>
            Full arm ....................................................$50
          </p>
          <p>Half arm ...................................................$30</p>
          <p>
            Full leg .....................................................$70
          </p>
          <p>
            Half leg ....................................................$40
          </p>
          <p>
            Back .........................................................$60
          </p>
          <p>
            Chest .......................................................$35
          </p>
          <p>Stomach ..................................................$30</p>
          <p>Underarm ................................................$20</p>
          <p style={boldTextUnderline}>Natural Makeup</p>
          <p style={boldText}>Application:</p>
          <p>Including false lashes............................. $50</p>
          <p>Without false lashes ...............................$45</p>
          <p>
            Private Lesson..........................................$65/hour
          </p>
          <p>*Please Call/E-mail to Inquire about Bridal</p>
          <p style={boldTextUnderline}>Aromatherapy</p>
          <p>
            Personal one-on-one meetings are available complimentary. Specialty
            dōTERRA products available by request.
          </p>
        </div>
      </div>
    </div>
  );
};

const divContentMargin = {
  marginLeft: '20%',
  marginRight: '20%'
};

const centerMenu = {
  marginLeft: '40%'
};

const headerFont = {
  fontFamily: 'sans-serif'
};

const boldText = {
  fontWeight: 'bold'
};

const boldTextUnderline = {
  fontWeight: 'bold',
  textDecoration: 'underline'
};

const backGroundImg = {
  backgroundImage: `url(${bkgImg})`,
  backgroundSize: 'cover'
};

export default Services;
