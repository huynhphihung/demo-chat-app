import React from 'react'

const initState = {
    job: '',
    jobs: []
}

// 2
const SET_JOB = 'set_job'

const Reducer = () => {
  return (
    <div>
        <h3>Todo</h3>
        <input type="text" placeholder='Enter todo...' />
        <button>Add</button>
        <ul>
            
        </ul>
    </div>
  )
}

export default Reducer