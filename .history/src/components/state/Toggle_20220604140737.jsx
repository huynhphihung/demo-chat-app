import React from 'react';
import { useState } from 'react';
// Stateless functional component: là component không có sử dụng state
// function Toggle() {
//     return <div className="toggle"></div>
// }

// // Stateful functional component: là component có sử dụng state
// function Toggle2() {
//     return <div className="toggle2"></div>
// }

function Toggle() {
    // 1. enabling state: useState( initialize value )
    // 2. initialze state: useState(false)
    // 3. reading state: 
    // 4. update state

    const array = useState(false)
    console.log(array);

    return <div className="toggle"></div>
}

export default Toggle