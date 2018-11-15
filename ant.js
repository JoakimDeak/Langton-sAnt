class Ant {

    constructor(x, y, width){
        this.x = x;
        this.y = y;
        this.width = width;
        this.currentState = 0;
        this.dir = 3;
    }

    move(){
        switch(this.dir){
            case 0: this.y = this.y - this.width;//up
            break;

            case 1: this.x = this.x + this.width;//right
            break;

            case 2 : this.y = this.y + this.width;//down
            break;

            case 3: this.x = this.x - this.width;//left
            break;
        }
    }

    turn(state){
        if(state === 1){
            if(this.dir === 0){
                this.dir = 3;
            } else{
                this.dir--;
            }
        } else{
            if(this.dir === 3){
                this.dir = 0;
            } else{
                this.dir++;
            }
        }
        this.move();
    }

    show(context){
        context.fillStyle = "#f00";
        context.fillRect(this.x, this.y, this.width, this.width);
    }
}