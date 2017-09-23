import 'aframe-animation-component';
import 'aframe-event-set-component';
import { Entity } from 'aframe-react';
import React from 'react';

export default class Cursor extends React.Component {
    constructor(){
        super();
        this.state = {
            circleGeometry : {
                primitive: 'circle',
                radius: 0.02,
                thetaLength: 0
    
            }
        }
    }

    componentDidMount = () =>{
        
        if(this.domNode){
            this.domNode.el.addEventListener('mouseleave', ev =>{
                
                let state = {...this.state, circleGeometry:{...this.state.circleGeometry, thetaLength:0}};
                console.log("STATE CURSOR", state);
                this.setState(state);
            });
        }
    }

    render() {
        const geometry = {
            primitive: 'ring',
            radiusInner: 0.01,
            radiusOuter: 0.016
        }

        const material = {
            color: '#ffffff',
            shader: 'flat',
            opacity: this.props.opacity || 0.9,
            transparent: true
        }

        const circleGeometry = {
            primitive: 'circle',
            radius: 0.02,
            thetaLength: 0

        }

        const animationFI = {
            property: 'geometry.thetaLength',
            dir: 'normal',
            dur: 1000,
            easing: 'easeInSine',
            loop: false,
            from: 0,
            to: 360,
            restartEvents: 'fusing'
        }

        const animationFO = {
            property: 'geometry.thetaLength',
            dir: 'reverse',
            dur: 500,
            easing: 'easeInSine',
            loop: false,
            to: 0,
            startEvents: 'click, mouseleave'
        }

        return (
            <Entity geometry={geometry} material={material} position="0 0 -1">
                <Entity cursor={{ fuse: true, fuseTimeout: 1000 }} geometry={this.state.circleGeometry}  material={material} position="0 0 0"
                    raycaster="objects: .clickable"
                    animation__scale={animationFI}
                    animation__scaleoff={animationFO}
                    ref = {c => this.domNode = c}
                >
                </Entity>
            </Entity>
        )
    }
}