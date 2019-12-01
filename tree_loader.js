function ImgLoader( L ) {
	this.imgSrc = L;
	this.imgList = [];
	this.imgCnt = 0;
}

ImgLoader.prototype.load = function() {
	for ( let s=0; s<this.imgSrc.length; s++ ){
		let imgTmp = new Image();
		imgTmp.src = this.imgSrc[s];
		imgTmp.onload = () => {
			this.imgCnt++;
			this.imgList.push( imgTmp );
		}
	}
}