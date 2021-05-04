class Base{
    constructor(x,y,width,height){

     var options={
         isStatic:true
     }

     this.x=x;
     this.y=y;
     this.height=height;
     this.width=width;

     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
       
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();
        
    }
};