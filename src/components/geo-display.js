import 'aframe-animation-component';
import {Entity} from 'aframe-react';
import React from 'react';

export default props =>{
    let geometry;
    

    let material = {
        color: props.color

    }

    let entity;

    switch(props.shape) {
        case  'sphere':
            geometry = {
                primitive: 'sphere',
                radius: props.size/2
            };
            entity = <Entity geometry= {geometry} material = {material} position = {props.position}/>;
            break;
        case 'cube' :
            geometry = {
                primitive: 'box',
                width: props.size,
                height: props.size,
                depth: props.size 
            };
            entity = <Entity geometry= {geometry} material = {material} position = {props.position}/>;
            break;
        case 'piramid':
            geometry = {
                primitive :'tetrahedron',
                radius: props.size/2
            }
            let pos1 = {x:-1, y:0, z: 0};
            let pos2 = {x: 1, y:0, z: 0};
            entity = <Entity position = {props.position}>
                    <Entity geometry= {geometry} material = {material} position = {pos1}/>
                    <Entity geometry= {geometry} material = {material} position = {pos2}/>
                </Entity>;
            break;
        default:
            geometry = {
                primitive: 'sphere',
                radius: props.size/2
            };
            entity = <Entity geometry= {geometry} material = {material} position = {props.position}/>;

    }


    return (
        entity
    )

}