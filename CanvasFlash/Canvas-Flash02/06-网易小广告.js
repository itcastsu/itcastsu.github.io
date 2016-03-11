(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.image1 = function() {
	this.spriteSheet = ss["06_网易小广告_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image11 = function() {
	this.spriteSheet = ss["06_网易小广告_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.image14 = function() {
	this.spriteSheet = ss["06_网易小广告_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.image3 = function() {
	this.spriteSheet = ss["06_网易小广告_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.image8 = function() {
	this.spriteSheet = ss["06_网易小广告_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.人物4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.image11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,89);


(lib.人物3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.image8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,87);


(lib.人物2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.image14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,82);


(lib.人物1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.image3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,90);


// stage content:
(lib._06网易小广告 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 人物1
	this.instance = new lib.人物1("synched",0);
	this.instance.setTransform(168.9,44.5,1,1,0,0,0,61.5,45);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(71).to({startPosition:0},0).to({x:133.9,alpha:0},10).wait(1));

	// 人物2
	this.instance_1 = new lib.人物2("synched",0);
	this.instance_1.setTransform(118.4,48.5,1,1,0,0,0,67,41);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},14).wait(60).to({startPosition:0},0).to({x:133.9,alpha:0},10).wait(1));

	// 人物3
	this.instance_2 = new lib.人物3("synched",0);
	this.instance_2.setTransform(215.4,46.5,1,1,0,0,0,53,43.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({alpha:1},14).wait(49).to({startPosition:0},0).to({x:133.9,alpha:0},10).wait(1));

	// 人物4
	this.instance_3 = new lib.人物4("synched",0);
	this.instance_3.setTransform(40.9,49,1,1,0,0,0,41.5,44.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).to({alpha:1},14).wait(38).to({startPosition:0},0).to({x:133.9,alpha:0},10).wait(1));

	// 背景
	this.instance_4 = new lib.image1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,44.5,700,90.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;