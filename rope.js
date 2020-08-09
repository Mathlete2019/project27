const Constraint = Matter.Constraint;
class Rope{
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX=offSetX;
        this.offSetY=offSetY;
        var options={
            stiffness:0.04,
            length:10,
            bodyB:body2,
            bodyA:body1,
            pointB:{x:this.offSetX,y:this.offSetY}
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        stroke("blue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}