class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		//this.h=h
		this.body=Bodies.circle(x, y, r);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			fill(255,255,0)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}