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



// stage content:
(lib._01flash基本操作 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,0,0,0.478)").ss(1,1,1).p("AFBlBQCGCGAAC7QAAC8iGCFQiFCGi8AAQi7AAiFiGQiGiFAAi8QAAi7CGiGQCFiFC7AAQC8AACFCFg");
	this.shape.setTransform(199.7,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AlBFBQiFiFAAi8QAAi7CFiFQCGiFC7AAQC8AACFCFQCGCFAAC7QAAC8iGCFQiFCFi8ABQi7gBiGiFg");
	this.shape_1.setTransform(199.7,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AlBFBQiFiFAAi8QAAi7CFiFQCGiFC7AAQC8AACFCFQCGCFAAC7QAAC8iGCFQiFCFi8ABQi7gBiGiFg");
	this.shape_2.setTransform(315.7,163.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AlBFBQiFiFAAi8QAAi7CFiFQCGiFC7AAQC8AACFCFQCGCFAAC7QAAC8iGCFQiFCFi8ABQi7gBiGiFg");
	this.shape_3.setTransform(205.7,307.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AlBFBQiFiFAAi8QAAi7CFiFQCGiFC7AAQC8AACFCFQCGCFAAC7QAAC8iGCFQiFCFi8ABQi7gBiGiFg");
	this.shape_4.setTransform(70.7,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:199.7,y:53.5}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:315.7,y:163.5}}]},4).to({state:[{t:this.shape_3},{t:this.shape,p:{x:205.7,y:307.5}}]},5).to({state:[{t:this.shape_4},{t:this.shape,p:{x:70.7,y:193.5}}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(428.2,207,93,93);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;