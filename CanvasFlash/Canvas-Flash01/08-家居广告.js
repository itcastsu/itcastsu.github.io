(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.DSC_1800 = function() {
	this.spriteSheet = ss["08_家居广告_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.DSC_1936 = function() {
	this.spriteSheet = ss["08_家居广告_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.DSC_1800();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,567,377);


(lib.pic01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.DSC_1936();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,567,377);


(lib.font01 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("幸\n福\n家\n园", "53px 'FZYaoTi'", "#FFFFFF");
	this.text.lineHeight = 53;
	this.text.lineWidth = 53;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,243.4);


(lib.补间1 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("美\n好\n人\n生", "53px 'FZYaoTi'", "#FFFFFF");
	this.text.lineHeight = 53;
	this.text.lineWidth = 57;
	this.text.setTransform(-30.5,-121.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-121.7,61,243.4);


// stage content:
(lib._08家居广告 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// font02
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(160,435.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({y:155.7},8).wait(8).to({startPosition:0},0).to({y:439.7},8).to({_off:true},1).wait(23));

	// pic02
	this.instance_1 = new lib.pic02("synched",0);
	this.instance_1.setTransform(283,189,1,1,0,0,0,283.5,188.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({x:-84,alpha:1},20).wait(25).to({startPosition:0},0).to({x:284,alpha:0},22).wait(1));

	// font01
	this.instance_2 = new lib.font01("synched",0);
	this.instance_2.setTransform(160,-130,1,1,0,0,0,28.5,121.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({y:132},12).wait(8).to({startPosition:0},0).to({y:-130},10).to({_off:true},1).wait(88));

	// pic01
	this.instance_3 = new lib.pic01("synched",0);
	this.instance_3.setTransform(283.5,188.5,1,1,0,0,0,283.5,188.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-83.5,alpha:1},29).wait(30).to({startPosition:0},0).to({x:283.5,alpha:0},21).to({_off:true},1).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,150,567,377);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;