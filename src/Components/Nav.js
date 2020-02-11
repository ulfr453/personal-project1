import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Nav extends Component{
    constructor(){
        super()
        this.state ={

        }
    }

    render(){
        return(
            <div>
                <button className='drillsbutton' onClick={() => this.props.history.push('/drills')}>Drills</button>
                <button className='trainersbutton' onClick={() => this.props.history.push('/trainers')}>Trainers</button>
                Title
                <button className='homebutton' onClick={() => this.props.history.push('/')}>Home</button>
                <button className='mytrainingbutton' onClick={() => this.props.history.push('/mytraining')}>My Training</button>
                <button className='loginbutton' onClick={() => this.props.history.push('/auth')}>Login</button>

                </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {user: state.reducer.user};
    
// }

export default (withRouter(Nav))