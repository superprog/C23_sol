class sides {
    constructor(x, y, width, height) {
      var options = {
          //'restitution':0.8,
         // 'friction':0.3,
         // 'density':1.0
         isStatic:true

      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color="white"
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
      //pop();
      //fill(255,0,0);
    }
  };
  