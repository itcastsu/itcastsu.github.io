(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 100,
	fps: 24,
	color: "#333333",
	manifest: []
};



// symbols:



(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.text = new cjs.Text("广州传智播客", "53px 'FZYaoTi'", "#00FFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 55;
	this.text.lineWidth = 392;
	this.text.setTransform(196,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,396,71.4);


// stage content:
(lib._04先分析再制作 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1("synched",0);
	this.instance.setTransform(377,52.3,1,1,0,0,0,198,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:197.9,regY:36.1,scaleX:0.19,scaleY:0.19,rotation:-15,x:375.1,y:49.7,alpha:0},7).to({regX:198,regY:35.6,scaleX:1,scaleY:1,rotation:0,x:377,y:52.3,alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(529,66.7,396,71.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;