class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(4);
            stroke("#47230F");
            
            if(pointA.x<220){

                //Drawing the line from the back of the bird to the left end of the catapult....
         line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
         //Drawing the line from the back of the bird to the right end of the catapult....
         line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,10,30)

            }

            else {

                //Drawing the line from the back of the bird to the left end of the catapult....
         line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
         //Drawing the line from the back of the bird to the right end of the catapult....
         line(pointA.x+20, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3,pointA.x+30,pointA.y-10,10,30)

            }
         
            pop();

        }

        image(this.sling1,200,20)
        image(this.sling2,170,20)
    } 
    
}