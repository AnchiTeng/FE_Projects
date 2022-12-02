const canvas=document.getElementById('gamefield');
const ctx = canvas.getContext('2d');

const resolution = 10;
canvas.width = 600;
canvas.height =400;

const cols = canvas.width / resolution;
const rows = canvas.height / resolution;

// //

function make2dArray(){
//   let arr = new Array(cols);
//   for(let i=0;i<arr.length;i++){
//     arr[i]= new Array(rows);
//     arr[i].map(()=>Math.floor(Math.random()*2))

//   }
//  //console.log('arr',arr)
//   return arr;
return new Array(cols).fill(null)
    .map(() => new Array(rows).fill(null)
      .map(() => Math.floor(Math.random() * 2)));

}


// function makeGrid(cols,rows){
  
//   let grids=make2dArray(cols,rows);
//  for(let i=0; i<cols;i++){
//   for(let j=0;j<rows;j++){
//     grids[i][j]=Math.floor(Math.random()*2);
//   }
//  }
 
//  return grids
// }
let  grid=make2dArray(cols,rows); 

 console.log('grid',grid)
 
 requestAnimationFrame(update);
 function update(){
  grid = nextGen(grid);
  renderGrid(grid);
  requestAnimationFrame(update);
};

//need a copy for nextGen to reference so it can update a new version based on previous state
function nextGen(grid){
  const nextGen = grid.map(arr=>[...arr]);//exactly copy of grid

  for(let col=0;col<grid.length;col++){
    for(let row=0; row<grid[col].length;row++){
      const cell = grid[col][row];
      let numNeighbours = 0;
      // loop through cell's neighbors;
      /*
          1   2  3 .     (-1,-1) . (-1,0), (-1,1)
          4   C  6 .     (0, 1) . (0, 0), (0, 1)
          7   8  9       (1, -1) . (1, 0), (1, 1)
       */

       for(let i=-1;i<2;i++){
         for(let j=-1; j<2; j++){
           if(i===0 && j===0){
            continue;
           }
           const x_cell = col + i;
           const y_cell = row + j;

           if (x_cell >= 0 && y_cell >= 0 && x_cell < cols && y_cell < rows){
           const currentNeighbour = grid[col+i][row+j];
           
           numNeighbours+=currentNeighbour;
           }

           

         }
       }   
//rules
           //if a living cell has more than three neighbors, it dies
           if(cell===1 && numNeighbours>3 ){
            nextGen[col][row] = 0;
           }else if( cell===1 && numNeighbours < 2){
            nextGen[col][row] = 0;
           }else if(cell===0 && numNeighbours===3){
            nextGen[col][row] = 1;
           }

    }
  }
  return nextGen;
}

//console.log('nextGen',nextGen(grid));

 function renderGrid(grid){
   for(let col=0;col<grid.length;col++){
    for(let row=0; row<grid[col].length;row++){
      const cell = grid[col][row];
      ctx.beginPath();
      ctx.rect(col*resolution,row*resolution,resolution,resolution);
      //ctx.stroke();
      //ctx.strokeStyle = 'blue';
       ctx.fillStyle = cell ? 'black' : 'white';
      ctx.fill();
    }
   }


 }

 

 





// const resolution = 10;
// canvas.width = 600;
// canvas.height = 400;

// const COLS = canvas.width / resolution;
// const ROWS = canvas.height / resolution;

// function buildGrid() {
//   return new Array(COLS).fill(null)
//     .map(() => new Array(ROWS).fill(null)
//       .map(() => Math.floor(Math.random() * 2)));
// }

//  let grid = buildGrid();
//  console.log('grid',grid)

// requestAnimationFrame(update);

// function update() {
//   grid = nextGen(grid);
//   render(grid);
//   requestAnimationFrame(update);
// }

// function nextGen(grid) {
//   const nextGen = grid.map(arr => [...arr]);

//   for (let col = 0; col < grid.length; col++) {
//     for (let row = 0; row < grid[col].length; row++) {
//       const cell = grid[col][row];
//       let numNeighbours = 0;
//       for (let i = -1; i < 2; i++) {
//         for (let j = -1; j < 2; j++) {
//           if (i === 0 && j === 0) {
//             continue;
//           }
//           const x_cell = col + i;
//           const y_cell = row + j;

//           if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
//             const currentNeighbour = grid[col + i][row + j];
//             numNeighbours += currentNeighbour;
//           }
//         }
//       }

//       // rules
//       if (cell === 1 && numNeighbours < 2) {
//         nextGen[col][row] = 0;
//       } else if (cell === 1 && numNeighbours > 3) {
//         nextGen[col][row] = 0;
//       } else if (cell === 0 && numNeighbours === 3) {
//         nextGen[col][row] = 1;
//       }
//     }
//   }
//   return nextGen;
// }

// function render(grid) {
//   for (let col = 0; col < grid.length; col++) {
//     for (let row = 0; row < grid[col].length; row++) {
//       const cell = grid[col][row];

//       ctx.beginPath();
//       ctx.rect(col * resolution, row * resolution, resolution, resolution);
//       ctx.fillStyle = cell ? 'black' : 'white';
//       ctx.fill();
//       // ctx.stroke();
//     }
//   }
// }