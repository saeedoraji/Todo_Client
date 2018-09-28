import React from 'react';
import './layout.css';

export default props => (
  <div className={props.className || 'layout'}>
    {props.children}
  </div>
)
