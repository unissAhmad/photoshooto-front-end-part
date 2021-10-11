import React, { Component } from "react";
import Switch from "react-switch";
// import './toggleSwitch.css'

class SwitchExample extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        if (this.props.name == "normal") {
            return (
                <Switch className="react-switch"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    onColor="#005A8C"
                    onHandleColor="#F5F5F5"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={35}
                    width={77}
                    id="normal-switch"
                />
            );
        }
        else{
            return(<></>)
        }
    }
}

export default SwitchExample;