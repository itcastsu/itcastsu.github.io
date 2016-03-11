(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 588,
	height: 458,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/星空_.jpg", id:"星空"}
	]
};



// symbols:



(lib.星空 = function() {
	this.initialize(img.星空);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,588,458);


(lib.小星星图形 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAagZAhAAQAjAAAZAZQAZAZAAAiQAAAjgZAYQgZAZgjAAQghAAgagZg");
	this.shape.setTransform(8.5,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.小星星 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.小星星图形("synched",0);
	this.instance.setTransform(8.5,8.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5,scaleY:1.5},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


// stage content:



(lib._08小星星 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").ss(2,1,1).p("ACDleIkFK9");
	this.shape.setTransform(398.3,291.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.498)").ss(2,1,1).p("AliliILFLF");
	this.shape_1.setTransform(376,221);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.498)").ss(2,1,1).p("AmKBLIMViV");
	this.shape_2.setTransform(301,193);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.498)").ss(2,1,1).p("Ak8jYIJ5Gx");
	this.shape_3.setTransform(224.3,173.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.498)").ss(2,1,1).p("AkCkmIIFJN");
	this.shape_4.setTransform(166.5,122);

	this.instance = new lib.小星星();
	this.instance.setTransform(192.5,151.5,0.582,0.582,0,0,0,8.5,8.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,6);

	this.instance_1 = new lib.小星星();
	this.instance_1.setTransform(378.5,333.5,0.776,0.776,0,0,0,8.5,8.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,6);

	this.instance_2 = new lib.小星星();
	this.instance_2.setTransform(411.5,256.5,0.518,0.518,0,0,0,8.5,8.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,6);

	this.instance_3 = new lib.小星星();
	this.instance_3.setTransform(340.5,185.5,0.324,0.324,0,0,0,8.5,8.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,6);

	this.instance_4 = new lib.小星星();
	this.instance_4.setTransform(261.5,200.5,0.647,0.647,0,0,0,8.5,8.5);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,6);

	this.instance_5 = new lib.小星星();
	this.instance_5.setTransform(140.6,92.5,0.647,0.647,0,0,0,8.5,8.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,255,255,1)",0,0,6);

	// 背景
	this.instance_6 = new lib.星空();

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(294,229,588,458);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;