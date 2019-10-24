import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp, faSave} from '@fortawesome/fontawesome-free-solid'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {Collapse} from '@material-ui/core';


class CollapseCheckbox extends Component {

    state = {
        open: false,
        checked: []
    }

    componentDidMount(){
        if(this.props.initState){
            this.setState({
                open: this.props.initState
            })
        }
    }

    //Handle click

    //This only toggle state

    handleClick = () => {
      this.setState({
          open: !this.state.open
      });
    };

    //Change icon function. This will return jsx

    handleAngle = () => (
      this.state.open ? 
      <FontAwesomeIcon
       icon = {faAngleUp}
       className='icon'
      /> :

      <FontAwesomeIcon
       icon = {faAngleDown}
       className='icon'
      /> 
    )

    //Render list
    renderList = () => (
        this.props.list ?
         this.props.list.map((value) => (
             <ListItem key = {value._id} style ={{padding: '10px 0'}}>
                <ListItemText primary={value.name}/>

                {/* Adding checkbox to the right */}
                <ListItemSecondaryAction>
                     <Checkbox
                      color='primary'
                      checked = {false}
                      onChange = {this.handleToggle(value._id)}
                     />
                </ListItemSecondaryAction>
             </ListItem>
         ))
        : <div>loading....</div>
    )


    //Handle Toggle

    handleToggle = () => {
        
    }
    render() {
        return (
            <div className='collapse_items_wrapper'>
                 <List style ={{borderBottom: '2px solid red'}}>
                     <ListItem onClick ={this.handleClick} style = {{padding: '10px 23px 10px 0'}}>
                         <ListItemText
                          primary = {this.props.title}
                          className='collapse_title'
                         />
                         {this.handleAngle()}
                     </ListItem>

                     <Collapse in ={this.state.open} timeout ='auto'unmountOnExit>
                         {/* these props are required */}
                           <List className='div' disablePadding>
                                {/* function to renderlist */}
                                {this.renderList()}
                           </List>
                     </Collapse>
                 </List>

            </div>
        );
    }
}

export default CollapseCheckbox;