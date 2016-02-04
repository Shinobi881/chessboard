var gboard = document.getElementById('gameBoard');
var rows = gboard.children;
var mockRows = [];

function Row (num) {
  this.pos = num + 1;
  this.rowContainer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  this.rowNum = num;
  this.tag = '';

}

function rowPos (num) {
  return num % 2 !== 0 ? 'odd' : 'even';
}


Row.prototype.row = function(){
  this.tag = document.createElement('div');
  this.tag.id = this.pos;
  this.tag.setAttribute('rowContainer', this.rowContainer) 
  this.tag.classList.add(rowPos(this.pos));
};


for (var i = 0; i < 8; i++) {
  var newRow = new Row(i);
  newRow.row();
  gboard.appendChild(newRow.tag);
  console.log(newRow.pieces)
  // newRow.pieces();
  mockRows.push(newRow);
  // console.log(mockRows)
};


function color(num1, num2) {
  var color;
  if ((num1 % 2 !== 0 && num2 % 2 !== 0) || (num1 % 2 === 0 && num2 % 2 === 0)) {
    color = 'black';
  } else {
    color = 'white';
  }
  return color;

}

function Position(coords, color) {
  this.coords = coords;
  this.initPiece = '';
  this.currentPiece = ''; 
  this.empty = true;
  this.color = '';
  this.tag = '';
}

Position.prototype.col = function(row, num, rowEl){
  this.tag = document.createElement('div');
  this.tag.classList.add(color(this.coords[0], this.coords[1]));  // console.log(rowEl, num)
  rowEl.appendChild(this.tag);
};

for (var j = 0; j < mockRows.length; j++) {
  for(var k = 0, length3 = rows.length; k < length3; k++){
    var newPos = new Position([mockRows[j].pos, k+1], color(mockRows[j].pos, k));
    newPos.col(mockRows[j], j, rows[j]);
  }
};

console.log(gboard)

