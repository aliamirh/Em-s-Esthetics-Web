import React from 'react';
import '../App.css';

const Services = () => {
  return (
    <div style={divContentMargin}>
      <div style={centerMenu}>
        <h1 style={headerFont}>Services</h1>
        <p style={boldTextUnderline}>Holistic Skin Treatments</p>
        <p>30 minutes ...............................................$45</p>
        <p>50 minutes ...............................................$65</p>
        <p>Anti-Aging (includes acid peel) .............$85</p>
        <p>Acne (includes acid peel) .......................$85</p>
        <h2>Add-on: </h2>
        <p>High Frequency ......................................$10</p>
        <p>Fruit/lactic/glycolic acid peel ................$15</p>
        <p style={boldTextUnderline}>Lash Extensions</p>
        <h2>Initial Set :</h2>
        <p>Classic..................................................... $175</p>
        <p>Hybrid .....................................................$200</p>
        <p>Volume........................................ COMING SOON!</p>
        <h2>Fill:</h2>
        <p>2-3 week fill : Classic ..............................$60</p>
        <p>4 week fill: Classic ..................................$75</p>
        <p>2-3 week fill: Hybrid................................$70</p>
        <h2>*Lash prices subject to change. </h2>
        <p style={boldTextUnderline}>Waxing & Tinting</p>
        <p>Brow .........................................................$15</p>
        <p>Brow Tint..................................................$15</p>
        <p>Brow Wax & Tint......................................$25</p>
        <p>Lash Tint ..................................................$20</p>
        <p>
          Lip.............................................................$10
        </p>
        <p>Brow/Lip combo......................................$20</p>
        <p>Chin..........................................................$12</p>
        <p>Cheeks/Sides of face...............................$20</p>
        <p>Full face (includes brows)........................$45</p>
        <p>Full arm ....................................................$50</p>
        <p>Half arm ...................................................$30</p>
        <p>Full leg .....................................................$70</p>
        <p>Half leg ....................................................$40</p>
        <p>Back .........................................................$60</p>
        <p>Chest .......................................................$35</p>
        <p>Stomach ..................................................$30</p>
        <p>Underarm ................................................$20</p>
        <p style={boldTextUnderline}>Natural Makeup</p>
        <p style={boldText}>Application:</p>
        <p>Including false lashes............................. $50</p>
        <p>Without false lashes ...............................$45</p>
        <p>Private Lesson..........................................$65/hour</p>
        <h2>*Please Call/E-mail to Inquire about Bridal</h2>
        <h2 style={boldText}>Aromatherapy</h2>
        <p>
          Personal one-on-one meetings are available complimentary. Specialty
          dōTERRA products available by request.
        </p>
      </div>
    </div>
  );
};

const divContentMargin = {
  marginLeft: '20%',
  marginRight: '20%'
};

const centerMenu = {
  textAlign: 'center'
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
export default Services;
