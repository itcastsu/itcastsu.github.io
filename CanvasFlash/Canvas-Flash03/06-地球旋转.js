(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 588,
	height: 458,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.星空 = function() {
	this.spriteSheet = ss["06_地球旋转_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8664147_125845322102_2 = function() {
	this.spriteSheet = ss["06_地球旋转_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.小球球 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._8664147_125845322102_2();
	this.instance.setTransform(0,0,0.34,0.34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102.1,102.1);


// stage content:
(lib._06地球旋转 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["06_地球旋转_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-150,-106.9)).s().p("A3bwrMAu3AAAIAAXCImjAAIAAEtQzwEt0kA7g");
	this.shape.setTransform(303,183.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

	// 小地球
	this.instance = new lib.小球球("synched",0);
	this.instance.setTransform(92.2,225.4,1,1,0,0,0,51,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[92.3,225.3,72.8,255.4,80.4,283.8,92.7,329.5,167.8,344,243,358.5,336.9,333.3,430.9,308.1,488.8,258,546.6,207.8,534.4,162.3,522.1,116.6,447,102.2,371.8,87.7,277.8,112.9,183.9,138.1,126,188,110.6,201.4,100.1,214.4]}},69).wait(1));

	// 大地球
	this.instance_1 = new lib._8664147_125845322102_2();
	this.instance_1.setTransform(153,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// 背景
	this.instance_2 = new lib.星空();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294,229,588,458);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;