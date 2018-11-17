class Grid {
    constructor(rows, width){
        this.rows = rows;
        this.cols = rows;
        this.squareWidth = (width / rows);
        this.grid = this.createGrid();
        this.ant = new Ant(50 * this.squareWidth, 50 * this.squareWidth, this.squareWidth, 90); //90 being the degrees it turns
    }

    createGrid(){
        let grid = [];

        for(let i = 0; i < this.cols; i++){
            grid[i] = [];
            for(let j = 0; j < this.rows; j++){
                grid[i][j] = -1;
            }
        }
        return grid;
    }

    getState(x, y){
        return this.grid[x/this.squareWidth][y/this.squareWidth];
    }

    setState(x, y){
        this.grid[x/this.squareWidth][y/this.squareWidth] *= -1;
    }

    show(context){
        for(let x = 0; x < this.cols; x++){
            for(let y = 0; y < this.rows; y++){
                if(this.grid[x][y] === -1){
                    context.fillStyle = "#fff";
                } else{
                    context.fillStyle = "#000";
                }
                context.fillRect(x * this.squareWidth, y * this.squareWidth, this.squareWidth, this.squareWidth);
            }
        }
        this.ant.show(context);
    }

    update(){
        this.ant.currentState = this.getState(this.ant.x, this.ant.y);
        this.setState(this.ant.x, this.ant.y);
        this.ant.turn(this.ant.currentState);
    }
}