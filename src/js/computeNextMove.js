import _ from 'lodash';

import checkIfWinner from './checkIfWinner';


const findEmptyPositions = (grid) => {
  var emptyPositions = [];
  
  
  for (var rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];

    for (var colIndex = 0; colIndex < row.length; colIndex++) {
      const square = row[colIndex];
      if (!square) {
        emptyPositions.push({row: rowIndex, col: colIndex});
      };
    };
  };
  return emptyPositions;
};


const computeNextMove = (grid) => {
  return _.sample(findEmptyPositions(grid));
};


export default computeNextMove;