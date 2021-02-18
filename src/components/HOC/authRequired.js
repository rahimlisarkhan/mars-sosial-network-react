import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export const AuthRequired = Component => {
  
    let RedirectComponent =(props) =>{
        // console.log('====================================');
        // console.log(props.authenfication);
        // console.log('====================================');
            if(!props.authenfication)
                return <Redirect to='/login'/>
            
            return <Component  {...props} />
        }
    
    return connect(mapsStateToProps,null)(RedirectComponent);
}
   
let mapsStateToProps = (state) => ({authenfication:state.authenfication.auth})
    