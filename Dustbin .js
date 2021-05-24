class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            restitution:0, 
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.options = options;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);  
        rect(pos.x - 110, pos.y - 40, this.height, this.width/2);
        rect(pos.x + 100, pos.y - 40, this.height, this.width/2);
    } 
  };