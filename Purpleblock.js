class Purpleblock{
    constructor(x,y,width,height){

     var options={
         isStatic:true,
         'friction':0,
         'restitution':0.4

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
        var angle=this.body.position;
       push()
        translate(pos.x,pos.y);
        rotate(angle);   
        rectMode(CENTER);
        strokeWeight(4);
        fill(200,162,200);
        rect(0,0,this.width,this.height);
        pop();
        
        

    }
};