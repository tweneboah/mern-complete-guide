import React, { Component } from 'react';
import HomeSlider from '../Home/Home_Slider';
import HomePromotion from '../Home/Home_promotion';
import {getProductsByArrival, getProductsBySell} from '../../redux/actions/product_actions';
import {connect} from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div>
                <HomeSlider/>
                <HomePromotion/>
            </div>
        );
    }
}


const mapStateToProps = (state) =>  {
  return {
      products: state.products
  }
}

export default connect() (Home);