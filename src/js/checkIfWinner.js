import _ from 'lodash';

const transpose = (grid) => {
  return _.zip.apply(_, grid);
}

const checkLine = (line) => {
  const totals = _.countBy(line);
  const players = ['x', 'o'];
  
  for (var i = 0; i < players.length; i++) {
    if (totals[players[i]] === 3) {
      return players[i];
    };
  };
};

const checkRows = (grid) => {
  for (var row = 0; row < grid.length; row++) {
    var line = checkLine(grid[row]);
    if (line) {
      return line
    };
  };
};

const checkColumns = (grid) => {
  return checkRows(transpose(grid));
};

const checkDiagonals = (grid) => {
  const diagonalOne = checkLine([grid[0][0], grid[1][1], grid[2][2]]);
  const diagonalTwo = checkLine([grid[0][2], grid[1][1], grid[2][0]]); 
  
  return diagonalOne || diagonalTwo;
}


const checkIfWinner = (grid) => {
  return checkColumns(grid) || checkRows(grid) || checkDiagonals(grid);
};

export default checkIfWinner;