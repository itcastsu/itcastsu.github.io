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



(lib.飞机 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAVpYIAARuIgoBDg");
	this.shape.setTransform(41.6,60.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F7F7F").s().p("AgTIWIAAxuIAnSxg");
	this.shape_1.setTransform(45.8,60.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#999999"],[0,1],-55,0,55.1,0).s().p("AAApYIgoSxImMgNIAdkMIGXuYIGYOYIAcEMImLANg");
	this.shape_2.setTransform(43.7,60.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.4,120.4);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ADwjwQBkBlAACLQAACNhkBjQhjBkiNAAQiLAAhkhkQhkhjAAiNQAAiLBkhlQBkhjCLAAQCNAABjBjg");
	this.shape.setTransform(34.1,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F7F7F").s().p("AjvDwQhkhkAAiMQAAiMBkhjQBkhkCLAAQCNAABjBkQBkBjAACMQAACMhkBkQhjBkiNAAQiLAAhkhkg");
	this.shape_1.setTransform(34.1,34.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,70.1,70.1);


// stage content:
(lib._01引导层动画基础 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 动画
	this.instance = new lib.飞机("synched",0);
	this.instance.setTransform(-28,431.4,0.634,0.634,75,0,0,43.8,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.6,regY:60.4,rotation:30,guide:{path:[-27.9,431.3,8.3,425.9,42.9,412.2,94.2,391.9,142.7,365.7,166.7,352.6,189.8,338,217.2,320.7,243.1,301.3,247,298.4,250.8,295.3,270.7,279.5,287.8,260.5,294.6,250.5,300.2,240,322.6,198.4,325.6,150.5,325.7,148.4,325.8,146.3,327.5,86.9,270.5,59.8,244,47.2,216.6,44.6,186.9,41.8,156.3,50.8,98,67.9,69.6,122.8,41.1,177.8,60.1,235.2,80.5,297.3,146.1,300.1,153.9,300.3,161.6,300.1,163.2,300.1,164.9,300,166.3,300,167.6,299.9,213.2,297.5,255.6,277.5,272.1,269.7,287.8,260.5,293.7,258.2,299.5,255.8,345.4,236.8,389.9,213.9,400,208.7,410,203.6,452.5,181.3,494,156.8,526.7,137.5,557.5,115.5,575.1,102.9,592.1,89.4,637.4,53.4,669.5,5,678.7,-8.9,687.5,-22.9], orient:'auto'}},99).wait(1));

	// 图层 3
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.setTransform(6.6,6.4,1,1,0,0,0,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[6.8,6.6,-6.9,24.7,-8.5,51.9,-12.1,111.6,-0.7,170.3,11,230.5,58.3,269.9,102.6,306.8,161.7,300.1,163.2,300,164.8,299.7,166.3,299.8,167.7,299.9,178.4,300.4,189.1,300.5,220.5,300.8,250.9,295.3,276.1,290.8,300.4,282.3,317.5,275.5,334,267.2,380.4,244,410.1,203.6,414.4,197.7,418.4,191.3,451.8,138.6,430.7,80.7,417.1,60.1,394.9,49.7,340.3,24.1,278.9,25.6,242.7,26.5,216.7,44.6,198.8,57,185.7,77.5,154.6,126.4,147.7,183.9,140.4,244.1,164.8,299.7,164.9,299.9,165,300,172.6,316.3,183.7,330.5,186.7,334.3,189.9,338,225.3,379.2,277.9,396.3,335,414.9,393.1,399.7,396,398.8,399,397.9,453.4,379.7,501.8,349,528.9,331.9,548.3,307.1,584.4,260.9,591.3,201.3,597.5,148.3,557.6,115.4,550.8,109.8,542.6,104.7,491,72.8,430.7,80.7,412.1,81.6,394.6,88.1,348.5,105.3,325.6,146.3,320.5,155.5,316.5,165.9,302.7,202.1,300,240,299.5,247.8,299.4,255.7,299.2,268.9,300.4,282.3,303.1,300.2,311.5,316.2,339.3,369.6,393.1,399.7,414.9,410.4,438.6,415,496.2,426.6,555.3,426.2,576.2,426.1,597.1,424.9]}},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203.7,171.4,113.1,496.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;