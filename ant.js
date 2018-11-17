class Ant {

    constructor(x, y, width, ruleSet){
        this.x = x;
        this.y = y;
        this.width = width;
        this.currentState = -1;
        this.ruleSet = ruleSet;
        if(this.ruleSet === 45){
            this.dir = 7;
        } else if(this.ruleSet === 90){
            this.dir = 3;
        }
    }

    move(){
        if(this.ruleSet === 45){
            switch(this.dir){
                case 0://up
                    this.y = this.y - this.width;
                    break;

                case 1://up right
                    this.x = this.x + this.width;
                    this.y = this.y - this.width;
                    break;

                case 2://right
                    this.x = this.x + this.width;
                    break;

                case 3://down right
                    this.x = this.x + this.width;
                    this.y = this.y + this.width;
                    break;

                case 4: //down
                    this.y = this.y + this.width;
                    break;

                case 5: // down left
                    this.x = this.x - this.width;
                    this.y = this.y + this.width;
                    break;

                case 6: // left
                    this.x = this.x - this.width;
                    break;

                case 7: // up left
                    this.x = this.x - this.width;
                    this.y = this.y - this.width;
                    break;
            }
        } else if(this.ruleSet === 90){
            switch(this.dir){
                case 0:
                    this.y = this.y - this.width;// up
                    break;

                case 1:
                    this.x = this.x + this.width;// right
                    break;

                case 2:
                    this.y = this.y + this.width;// down
                    break;

                case 3:
                    this.x = this.x - this.width;// left
                    break;
            }
        }

    }

    turn(state){
        let max;
        if(this.ruleSet === 45){
            max = 7;
        } else if(this.ruleSet === 90){
            max = 3;
        }
        if(state === 1){
            if(this.dir === 0){
                this.dir = max;
            } else{
                this.dir--;
            }
        } else if(state === -1){
            if(this.dir === max){
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