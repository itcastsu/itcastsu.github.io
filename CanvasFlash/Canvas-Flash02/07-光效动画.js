(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 970,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib._5902 = function() {
	this.spriteSheet = ss["07_光效动画_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5903 = function() {
	this.spriteSheet = ss["07_光效动画_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.qqBG = function() {
	this.spriteSheet = ss["07_光效动画_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.人物2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5902();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,343);


(lib.人物1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5903();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,275);


(lib.光效内部 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EC15D4","rgba(236,21,212,0)"],[0.059,0.678,1],0,0,0,0,0,87.7).s().p("ApmJnQj/j/AAloQAAlnD/j/QD/j/FnABQFogBD+D/QEAD/AAFnQAAFokAD/Qj+D+loABQlngBj/j+g");
	this.shape.setTransform(87,87);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,174,174);


(lib.光效 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.光效内部("synched",0);
	this.instance.setTransform(87,87,1,1,0,0,0,87,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:1.37},4).to({scaleX:3.47,scaleY:0.18},10).to({scaleY:0.02},15).to({regY:86.8,scaleY:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,174);


// stage content:



(lib._07光效动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.人物2();
	this.instance.setTransform(494.1,238.6,1,1,0,0,0,125,171.5);
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(5, 126, 1)];
	this.instance.cache(-2,-2,254,347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).wait(33).to({alpha:0},10).wait(1));

	// 光效2
	this.instance_1 = new lib.光效("synched",0);
	this.instance_1.setTransform(482,249,1,1,90,0,0,87,87);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({_off:true},32).wait(44));

	// 人物1
	this.instance_2 = new lib.人物1();
	this.instance_2.setTransform(493,257,1,1,0,0,0,100,137.5);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(134, 5, 1)];
	this.instance_2.cache(-2,-2,204,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(30).to({alpha:0},10).to({_off:true},1).wait(76));

	// 光效1
	this.instance_3 = new lib.光效("synched",0);
	this.instance_3.setTransform(482,249,1,1,0,0,0,87,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},34).wait(117));

	// 背景
	this.instance_4 = new lib.qqBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,250,970,500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;