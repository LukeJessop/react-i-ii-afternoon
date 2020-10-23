import React, {Component} from 'react'

class Previous extends Component{
render(){
    return(
        <div className="Previous">
            <button onClick={this.props.decreaseValue}>Previous</button>
        </div>
        )
    }
}

export default Previous