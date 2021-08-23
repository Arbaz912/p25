class paper{
  
    constructor(x,y) {
        var options={
            isStatic:false,
            "restitution":0.3,
            "friction":0,
            "density":1.2
        }
        
        this.body=Bodies.rectangle(x,y,options)
        
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    
    }
      display()
      {
              
              strokeWeight(4);
              fill(128)
              paper.scale = 0.5;
              imageMode(CENTER)
              image(this.image,0,0)
             
    }
    }