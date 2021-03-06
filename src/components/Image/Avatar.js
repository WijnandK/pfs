import React from 'react';

import Image from './Image';
 

const avatar = props => (
  <div
    className="avatar"
    style={{ width: props.size + 'rem', height: props.size + 'rem' }}
  >
    <Image imageUrl={props.image} contain={props.contain}/>
  </div>
);

export default avatar;
