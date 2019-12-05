import React from "react";

class InputText extends React.Component {
    state = {val : ""}

    onChange = (evt) => {
        // console.log(evt.currentTarget.value);
        const value = evt.currentTarget.value;
        
        const {callBackParent = ()=>{} } = this.props;
        callBackParent(value);
        
        this.setState({val : value});
    }

    render() {
        const {callBackParent,...otherProp} = this.props; 

        return (
            <input type="text"  {...otherProp}  onChange={this.onChange} />
        );
    }
}

export default InputText;