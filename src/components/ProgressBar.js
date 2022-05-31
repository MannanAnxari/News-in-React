import React, { Component } from 'react'


class ProgressBar extends Component {

    static defaultProps = {
        width: "width: 50%;"
    }
    // const { label = "Count" } = this.props;


    render() {
        const { width } = this.props

        return (
            <div className=''>
                <div className="progress" >
                    <div className="progress-bar" role="progressbar" aria-valuenow="70"
                        aria-valuemin="0" aria-valuemax="100" style={{width: `${width}%`}}>
                        {/* aria-valuemin="0" aria-valuemax="100" style={spanStyles}> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default ProgressBar;
