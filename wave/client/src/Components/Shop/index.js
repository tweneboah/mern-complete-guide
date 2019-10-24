import React, { Component } from 'react';
import PageTop from '../utils/page_top';
import {connect} from 'react-redux'
import {getWoods, getBrands} from '../../redux/actions/product_actions';

import CollapseCheckbox from '../utils/CollapseCheckbox'

class Shop extends Component {

    componentDidMount(){
        this.props.dispatch(getWoods())
        this.props.dispatch(getBrands())
    }

//Filter functins
  handleFilters = () => {

  }
    render() {
        console.log('SHOP')
        const products = this.props.products
        return (
            <div>
                <PageTop
                 title = 'Browse Products'
                />

                 <div className='container'>
                      <div className='shop_wrapper'>
                         <div className='left'>
                            {/* checkbox */}
                            <CollapseCheckbox
                               initState = {true}
                               title = 'Brands'
                               list = {products.brands}
                               handleFilters = {(filters) => this.handleFilters(filters, 'brands')}
                            
                            />
                         </div>
                         <div className='right'>
right
                         </div>
                      </div>

                 </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    console.log(state)
    return {
        products: state.products
    }
}
export default connect(mapStateToProps) (Shop);