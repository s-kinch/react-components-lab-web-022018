import React from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
  render(){
    return (
      <div className="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <li>Agnes</li>
          <li>Muriel</li>
        </ul>
      </div>
    )
  }
}

export class InFrontOfYou extends React.Component {
  render(){
    return (
      <div>
        <p>You shouldn&apos;t look too far.</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
}


export class ButcherShop extends React.Component {
  render(){
    const PRODUCTS = BUTCHER_PRODUCTS.map(x=><li>{x}</li>)
    return (
      <div className="butcher-shop">
        <p>{"Hello! We have the following products for sale today:"}</p>
        <ul>
          { PRODUCTS }
        </ul>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <OlderCoaster />
    <InFrontOfYou />
    <ButcherShop /> 
  </div>,
  document.getElementById('root')
)
