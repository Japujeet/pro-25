class Rect{
    constructor(x,width,height){
        var options={
            isStatic:true
          }
        this.body=Bodies.rectangle(x,680,width,height,options);
        this.width=width;
        this.height=680;
        
        World.add(world,this.body);
    }
    display(){
 var pos=this.body.position;
     
        rectMode(CENTER);
        rect( pos.x, pos.y, this.width, this.height);
        
    }
}