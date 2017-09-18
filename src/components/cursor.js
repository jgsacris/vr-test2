import 'aframe-animation-component';
import 'aframe-event-set-component';
import { Entity } from 'aframe-react';
import React from 'react';

export default props => {
    const geometry = {
        primitive: 'ring',
        radiusInner: 0.01,
        radiusOuter: 0.016
    }

    const material = {
        color: props.color,
        shader: 'flat',
        opacity: props.opacity || 0.9,
        transparent: true
    }

    const circleGeometry = {
        primitive: 'circle',
        radius: 0.02,
        thetaLength: 0

    }

    return (
        <Entity geometry={geometry} material={material} position="0 0 -1">
            <Entity cursor={{ fuse: true, fuseTimeout: 1000 }} geometry={circleGeometry} material={material} position="0 0 0"
                raycaster="objects: .clickable"
                animation__scale="property: geometry.thetaStart; dir: noraml; dur: 1000; easing: easeInSine; loop:false; to: 360; startEvents:fusing"
                animation__scaleoff="property: geometry.thetaStart; dir: reverse; dur: 150; easing: easeInSine; loop:false; to: 0; startEvents:click"
            >
            </Entity>
        </Entity>
    )
}