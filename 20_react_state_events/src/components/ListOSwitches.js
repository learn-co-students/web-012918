import Lightswitch from './Lightswitch'
import React from 'react'
import UUID from 'uuid'

class ListOSwitches extends React.Component {

  constructor(){

    super();
    this.state = {
      switches: []
    }
    for (var i = 0; i < 25; i++) {
      this.state.switches.push({
        isOn: true,
        key: UUID()
      })
    }
  }

  allOn = () => {
    this.setAll(true);
  }

  allOff = () => {
    this.setAll(false);
  }


  setAll(value) {
    const newSwitches = this.state.switches.map((switchy) => this.cloneAndSet(switchy, value));
    this.setState({
      switches: newSwitches
    })
  }

  cloneAndToggle(switchedSwitch) {
    return this.cloneAndSet(switchedSwitch, !switchedSwitch.isOn);
  }

  cloneAndSet(switchedSwitch, value) {
    return { 
      ...switchedSwitch,
      isOn: value
    };
  }


  lightSwitchOnClick = (switchedSwitch) => {

    const index = this.state.switches.indexOf(switchedSwitch);

    const switchesBefore = this.state.switches.slice(0, index)
    const switchesAfter = this.state.switches.slice(index + 1)

    const newSwitch = this.cloneAndToggle(switchedSwitch)

    const newSwitches = [...switchesBefore, newSwitch, ...switchesAfter]

    this.setState({
      switches: newSwitches
    })
  }

  render(){

    const switches = this.state.switches.map((lightSwitch) => 
      <Lightswitch key={ lightSwitch.key } 
                   lightSwitch={ lightSwitch } 
                   onClick={ this.lightSwitchOnClick } />
    ); 

    return <section>
      <button className="all-on" onClick={ this.allOn }>All on</button>
      <button className="all-off" onClick={ this.allOff }>All off</button>
      <ul className="container">
        { switches }
      </ul>
    </section>
  }

}

export default ListOSwitches

