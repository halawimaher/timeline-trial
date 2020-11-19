import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './Scroll2.css'

function Scroll2() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -600 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 300, duration: 300 }}
    >
      { props => (
        <div style={props}>
          <div style={c1style}>
            <h1>Souad Ali</h1>
          </div>
        </div>
      )}
    </Spring>
  )
}

const c1style = {
  margin: 10,
}

export default Scroll2