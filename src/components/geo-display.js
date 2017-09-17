import 'aframe-animation-component';
import 'aframe-event-set-component';
import {Entity} from 'aframe-react';
import React from 'react';

export default props =>{
    let geometry;
    switch(props.shape) {
        case  'sphere':
            geometry = {
                primitive: 'sphere',
                radius: props.size/2
            };
            break;
        case 'cube' :
            geometry = {
                primitive: 'box',
                width: props.size,
                height: props.size,
                depth: props.size 
            };
            break;
        case 'piramid':
            geometry = {
                primitive :'tetrahedron',
                radius: props.size/2
            }

    }

    let material = {
        color: props.color

    }

    return (
        <Entity geometry= {geometry} material = {material} position = {props.position}/>
    )

}