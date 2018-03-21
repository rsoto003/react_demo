import React from 'react';

export default props => {
    function handleClick(){
        console.log('this was clicked');

        props.updateColor();
    }        



    return (
        <div>
            <button className="btn btn-outline-danger"onClick={handleClick}>Click me. Or don't? I'm not good at being decisive.</button>
        </div>
    )
}
