import React from 'react';
import Cell from './Cell';

const Board = () => {
    const show = () => {
        const cells = [null, null, null, 'X', 'X', 'X', null, null, null];
        console.log(calculateWinner(cells));
    };

    return (
        <div className="game-board">
            {Array(9)
                .fill()
                .map((item, index) => (
                    <Cell key={index}></Cell>
                ))}
            {/* <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell> */}
        </div>
    );
};

export default Board;
