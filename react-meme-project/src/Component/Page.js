import React from 'react';

// A inner component can be prevented from rendering in React using state object and event handlers. 
// To prevent a component from rendering return null

function WarningBanner(props) {
    if(!props.warn) {return null;}

    return (
        <div className='WarningBanner-Div'>
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render(){
        return (
            <div className='Page-Div'>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default Page