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
            this.domNode.el.addEventListener('click', ev =>{
                //console.log('didMount', this);
                this.props.onClick({shape: this.props.label, color:this.props.color});
            });
            this.domNode.el.addEventListener('mouseenter', ev =>{
                let state = {...this.state, scale:{x:1.2, y:1.2, z:1.2}};
                //console.log("STATE", state);
                this.setState(state);
            });
            this.domNode.el.addEventListener('mouseleave', ev =>{
                let state = {...this.state, scale:{x:1, y:1, z:1}};
                //console.log("STATE", state);
                this.setState(state);
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
            position: props.position,
            scale: {
                x:1,
                y:1,
                z:1
            }
        }
    }

    render(){
        return (
            <Entity geometry={this.state.geometry} 
                material = {this.state.material} 
                position = {this.state.position} 
                text ={this.state.text} class='clickable'
                scale={this.state.scale}
                ref = {c => this.domNode = c}
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