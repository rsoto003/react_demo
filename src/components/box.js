import React from 'react';

export default function(props){
    const boxStyle = {
        display: 'inline-block',
        height: '150px',
        width: '150px',
        backgroundColor: props.color,
        margin: '15px',
        transitionDuration: '500ms',
        borderRadius: '50%'
    }


    return <div style={boxStyle}/>
}