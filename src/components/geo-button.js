import {Entity} from 'aframe-react';
import React from 'react';
import 'aframe-event-set-component';

export default class GeoButton extends React.Component{

    constructor(props){
        super(props);
        this.initGeometries(props);
        let s = this.initGeometries(props);
        console.log("state", s);
        this.state = this.initGeometries(props);
    }

    componentDidMount = () =>{
        
        if(this.domNode){
            this.domNode.el.addEventListener('click', (ev) =>{
                console.log('didMount', this);
                this.props.onClick({shape: this.props.label, color:this.props.color});
            })
        }
    }

    initGeometries(props){
        const geometyCircle = {
            primitive : 'circle',
            radius : props.size/2 || 1
        }
    
        const geometrySquare = {
            primitive: 'plane',
            width: props.size,
            height: props.size
        }
    
        const midSize = props.size/2;
        const geometryTrinagle = {
            primitive: 'triangle',
            vertexA : '0 ' + midSize + ' 0',
            vertexB : -midSize + ' -' + midSize + ' 0',
            vertexC : midSize + ' -' + midSize + ' 0'
        }
        let geometry = geometyCircle;
        switch (props.shape){
            case 'triangle':
                geometry = geometryTrinagle;
                break;
            case 'square':
                geometry = geometrySquare
                break;
        }
    
        const material = {
            color : props.color,
            shader : 'flat',
            opacity : props.opacity || 0.9,
            transparent: true
        }
    
        const text = {
            value : props.label,
            color: 'white',
            width: props.size * 3,
            align: 'center',
            transparent:true,
            anchor: 'center'
        }
        return {
            geometry: geometry,
            material : material,
            text : text,
            position: props.position
        }
    }

    render(){
        return (
            <Entity geometry={this.state.geometry} 
                material = {this.state.material} 
                position = {this.state.position} 
                text ={this.state.text} class='clickable'
                event-set__1="_event: mousedown; scale: 1 1 1"
                event-set__2="_event: mouseup; scale: 1.2 1.2 1"
                event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
                ref = {c => this.domNode = c}
                onClick = {() => {console.log('clicked')}}
            >  
            </Entity>
        )
    }
}

GeoButton.defaultProps = {
    shape: 'circle',
    opacity: 0.9,
    postion: '0 0 0'
}