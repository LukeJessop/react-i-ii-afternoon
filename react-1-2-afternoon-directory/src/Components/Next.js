import React, {Component} from 'react'

class Next extends Component{
    render(){
        return(
            <div className="Next">
                <button onClick={this.props.increaseValue}>Next</button>
           </div>
        )
    }
}

export default Next