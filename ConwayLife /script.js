const conway=document.getElementById('grid');
//let h1=document.createElement('canvas');




// function setup(){
//     createCanvas(400, 300); 
    
// }

// function draw(){
//     background(220); 
      
//     // Use color() function 
//     let c = color('green'); 
  
//     // Use fill() function to fill color 
//     fill(c); 
      
//     // Draw a rectangle 
//     rect(50, 50, 300, 200); 
// }

// var x = document.createElement("CANVAS");

  
//h1.setAttribute("id","gameCanvas")
 // conway.appendChild(h1);

  (function () {
    const canvas = document.getElementById('gameCanvas')
    const ctx = canvas.getContext('2d')
  
  })()

// class Cell
// {
//     // Set the size for each cell
//     static width = 10;
//     static height = 10;

//     constructor (context, gridX, gridY)
//     {
//         this.context = context;

//         // Store the position of this cell in the grid
//         this.gridX = gridX;
//         this.gridY = gridY;

//         // Make random squares alive
//         this.alive = Math.random() > 0.5;
//     }

//     draw() {
//         // Draw a square, let the state determine the color
//         this.context.fillStyle = this.alive?'#ff8080':'#303030';
//         this.context.fillRect(this.gridX * Cell.width, this.gridY * Cell.height, Cell.width, Cell.height);
//     }
// }

// this.gameObjects = [];

// createGrid()
// {
//     for (let y = 0; y < GameWorld.numRows; y++) {
//         for (let x = 0; x < GameWorld.numColumns; x++) {
//             this.gameObjects.push(new Cell(this.context, x, y));
//         }
//     }
// }

// // Start your loop for the first time
// window.requestAnimationFrame(() => this.gameLoop());

// gameLoop() {
//     // Check the surrounding of each cell
//     this.checkSurrounding();

//     // Clear the screen
//     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

//     // Draw all the game objects
//     for (let i = 0; i < this.gameObjects.length; i++) {
//         this.gameObjects[i].draw();
//     }

//     // The loop function has reached it's end, keep requesting new frames
//     setTimeout( () => {
//         window.requestAnimationFrame(() => this.gameLoop());
//     }, 100) // The delay will make the game easier to follow
// }




