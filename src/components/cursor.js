import 'aframe-animation-component';
import 'aframe-event-set-component';
import {Entity} from 'aframe-react';
import React from 'react';

export default props =>{
    const geometry = {
        primitive : 'ring',
        radiusInner : 0.01,
        radiusOuter : 0.016
    }

    const material = {
        color : props.color,
        shader : 'flat',
        opacity : props.opacity || 0.9,
        transparent: true
    }

    return (
        <Entity cursor={{fuse:true, fuseTimeout: 1000}} geometry = {geometry} material = {material} position="0 0 -1"
        raycaster="objects: .clickable"
        animation__scale="property: scale; dir: normal; dur: 1000; easing: easeInSine; loop:false; to: 1.4 1.4 1; startEvents:fusing"
        animation__scaleoff="property: scale; dir: reverse; dur: 150; easing: easeInSine; loop:false; to: 1 1 1; startEvents:click"
        event-set__1="_event: mouseenter; scale: 1 1 1"
        event-set__2="_event: mouseleave; scale: 1 1 1"
        >
        </Entity>
    )
}