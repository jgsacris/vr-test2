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
        color: '#ffffff',
        shader: 'flat',
        opacity: props.opacity || 0.9,
        transparent: true
    }

    const circleGeometry = {
        primitive: 'circle',
        radius: 0.02,
        thetaLength: 0

    }

    const animationFI ={
        property: 'geometry.thetaLength',
        dir: 'normal',
        dur: 1000,
        easing: 'easeInSine',
        loop: false,
        from: 0,
        to: 360,
        startEvents: 'fusing'
    }

    const animationFO = {
        property: 'geometry.thetaLength',
        dir: 'reverse',
        dur: 100,
        easing: 'easeInSine',
        loop: false,
        to: 0,
        startEvents: 'click'
    }

    return (
        <Entity geometry={geometry} material={material} position="0 0 -1">
            <Entity cursor={{ fuse: true, fuseTimeout: 1000 }} geometry={circleGeometry} material={material}             position="0 0 0"
                raycaster="objects: .clickable"
                animation__scale = { animationFI }
                animation__scaleoff={ animationFO }
                event-set__1="_event:mouseleave; geometry.thetaLength: 0"
            >
            </Entity>
        </Entity>
    )
}