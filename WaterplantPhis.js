function WaterPlant (x,y) {
	this.x = x;
	this.y = y;
	this.phase = 0;
	this.phaseLen = [5000,5000,5000];
	this.cntDown = 5000;

}

WaterPlant.prototype.draw  = function() {
	this.cntDown--;
	if( this.cntDown<1 ){
		this.phase = (this.phase + 1) % 3;
		this.cntDown = this.phaseLen[this.phase];
	}
	ctx.drawImage(
		Assets_WaterPlant.imgList[ this.phase ], 
	 	this.x+dx, this.y+dy, 32, 32
	)
}