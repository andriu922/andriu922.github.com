function Shop (x,y,i) {
	this.x = x;
	this.y = y;
	this.kindSeed = i;

}

Shop.prototype.draw  = function() {
	ctx.drawImage(
		Assets_Shop.imgList[ this.kindSeed ], 
	 	this.x+dx, this.y+dy, 64, 64
	)
}