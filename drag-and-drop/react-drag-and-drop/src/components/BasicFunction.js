// Sortable.create(element, {
//     group: " groupName",
//     animation: 200,
//     delayOnTouchStart: true,
//     delay: 2,
//   });

import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const BasicFunction = () => {
  const [state, setState] = useState([
    { id: 1, name: 'shrek1' },
    { id: 2, name: 'fiona2' },
    { id: 3, name: 'shrek3' },
    { id: 4, name: 'fiona4' },
    { id: 5, name: 'shrek5' },
    { id: 6, name: 'fiona6' },
  ]);

  return (
    <ReactSortable
      list={state}
      setList={setState}
      group="groupName"
      animation={200}
      delay={2}
    >
      {state.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};

export default BasicFunction;
