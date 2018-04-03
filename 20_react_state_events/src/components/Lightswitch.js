import React from 'react'


  
  
    function onOrOff(props){
      return props.lightSwitch.isOn ? "on" : "off";
    }

    function containerClass(props){
      return "switch " + onOrOff(props);
    }

const Lightswitch = (props) => {

      return (<li className={ containerClass(props) }>
        <button onClick={ () => props.onClick(props.lightSwitch) }>Switch me</button>
        <span>I&apos;m { onOrOff(props) }</span>
      </li>);

}


export default Lightswitch