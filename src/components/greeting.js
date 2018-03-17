import React from 'react';

function Greeting(props){
    console.log('Greeting props: ', props);

    const { name, favColor } = props;

    const greetingStyle = {
        color: favColor
    }

    return (
        <h1 style={greetingStyle}>Hello, {props.name}, welcome. </h1>
    )
}

export default Greeting;