import React from 'react';
import { Spring } from 'react-spring/renderprops';

function Scroll() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -600 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ delay: 700, duration: 700 }}
    >
      { props => (
        <div style={props}>
          <div style={c2style}>
            <h3>Creator,<span style={spanStyle1}>Designer,</span><span style={spanStyle2}>Mentor</span></h3>
          </div>
        </div>
      )}
    </Spring>
  )
}

const c2style = {
  color: 'green',
  margin: 20
}
const spanStyle1 = {
  color: 'blue',
  margin: 20
}
const spanStyle2 = {
  color: 'red',
}

export default Scroll
