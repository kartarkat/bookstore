import React, { useState } from 'react'

const Debounce = (func, wait=500) => {

// const debounce = (func, wait=500) => {
    let timeout;
    return function(...args) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }



    // return (
    //     <div>
    //         <input onChange={e => processChange(e)} />
    //         <div>{d}</div>
    //     </div>
    // )
// }

export default Debounce