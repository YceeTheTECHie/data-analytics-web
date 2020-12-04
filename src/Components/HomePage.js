import React, {Component} from 'react';
import Main from './Main'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
class HomePage extends Component {


  render() { 
    return ( 
      <React.Fragment>
        <Main />
      <AboutUs />
      
      <ContactUs />
      </React.Fragment>
    );
  }
}
 
export default HomePage ;