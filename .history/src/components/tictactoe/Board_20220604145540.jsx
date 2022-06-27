import React from 'react'
import Cell from './Cell'

const Board = () => {
    const arr = Array(9).fill(0)
    
  return (
    <div className='game-board'>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
    </div>
  )
}

export default Board