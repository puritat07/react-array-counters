import React from 'react';

const ScalarCounter = (props) => (
  <div>
    Count: {props.value}
    <button onClick={props.onAdd}>
      +
    </button>
    <button onClick={props.onSubtract}>
      -
    </button>
    <hr />
  </div>

)

export default ScalarCounter
