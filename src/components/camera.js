import {Entity} from 'aframe-react';
import React from 'react';
import 'aframe-mouse-cursor-component'

export default props => (
    <Entity>
        <Entity primitive="a-camera" look-controls wasd-controls mouse-cursor {...props}/>
    </Entity>
)