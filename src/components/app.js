import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { Component } from 'react';
import Button from './button';
import Box from './box';
import {getRandomColor, genRandomPos} from '../helpers';
import BoxContainer from './box_container';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            boxes: [
                {color: 'red',
                 pos: genRandomPos()
                },
                {color: 'rebeccapurple',
                pos: genRandomPos()
                },
                {color: 'green',
                pos: genRandomPos()
                },
                {color: 'orange',
                pos: genRandomPos()
                },
                {color: 'black',
                pos: genRandomPos()
                }
            ]
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(index){
       const newBoxes = this.state.boxes.slice();
       
       newBoxes[index].color = getRandomColor();

       newBoxes[index].pos = genRandomPos();

       this.setState({
           boxes: newBoxes
       })
    }
    render(){

    const boxElements = this.state.boxes.map((item, index) => {
        return <BoxContainer key={index} pos={item.pos} newColor={() => this.changeColor(index)} color={item.color}/>
    });

    return (
        <div className="container">
            <h1 className="text-center my-3">Components Demo </h1>
            { boxElements }
        </div>
        )
    };
};

export default App;
