(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("An/IAIAAv/IP/AAIAAI4IoVAAIAAHHg");
	this.shape.setTransform(51.3,51.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102.5,102.5);


// stage content:
(lib._06原件操作技巧 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件1("synched",0);
	this.instance.setTransform(509.5,51.3,1,1,0,0,0,51.3,51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:61.6,y:334.3},21).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.setTransform(57.3,59.3,1,1,0,0,0,51.3,51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:469.3,y:317.3},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(281,200,554.7,110.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;