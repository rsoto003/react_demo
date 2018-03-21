import React from 'react';
import Button from './button';
import Box from './box';
import { genRandomPos } from '../helpers';


export default function BoxContainer(props){
    const { newColor, color, pos: {top, left}  } = props;

    const containerStyle = {
        display: 'inline-block',
        position: 'absolute',
        transition: '500ms',
        top,
        left
    }

    return (
        <div style={containerStyle}>
            <Button updateColor={newColor}/>
            <Box color={color}/>
        </div>
    )
}