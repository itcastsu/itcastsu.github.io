(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
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


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AzSDIIAAmPMAmlAAAIAAGPg");
	this.shape.setTransform(123.5,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,247,40);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.星空();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,588,458);


// stage content:
(lib._03遮罩层动画原理 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 遮罩 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwEVKIAA9MMAvxAAAIAAdMg");
	var mask_graphics_1 = new cjs.Graphics().p("AvwVGIAA87MAvWAAAIAAc7g");
	var mask_graphics_2 = new cjs.Graphics().p("AvcVCIAA8rMAu8AAAIAAcrg");
	var mask_graphics_3 = new cjs.Graphics().p("AvHU+IAA8aMAugAAAIAAcag");
	var mask_graphics_4 = new cjs.Graphics().p("AuzU6IAA8KMAuFAAAIAAcKg");
	var mask_graphics_5 = new cjs.Graphics().p("AufU2IAA75MAtqAAAIAAb5g");
	var mask_graphics_6 = new cjs.Graphics().p("AuKUyIAA7pMAtPAAAIAAbpg");
	var mask_graphics_7 = new cjs.Graphics().p("At2UtIAA7XMAs0AAAIAAbXg");
	var mask_graphics_8 = new cjs.Graphics().p("AthUpIAA7HMAsYAAAIAAbHg");
	var mask_graphics_9 = new cjs.Graphics().p("AtNUlIAA63MAr9AAAIAAa3g");
	var mask_graphics_10 = new cjs.Graphics().p("As5UhIAA6mMAriAAAIAAamg");
	var mask_graphics_11 = new cjs.Graphics().p("AskUdIAA6WMArHAAAIAAaWg");
	var mask_graphics_12 = new cjs.Graphics().p("AsQUZIAA6FMAqsAAAIAAaFg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar8UVIAA51MAqRAAAIAAZ1g");
	var mask_graphics_14 = new cjs.Graphics().p("ArnUQIAA5jMAp1AAAIAAZjg");
	var mask_graphics_15 = new cjs.Graphics().p("ArTUMIAA5TMApaAAAIAAZTg");
	var mask_graphics_16 = new cjs.Graphics().p("Aq/UIIAA5CMApAAAAIAAZCg");
	var mask_graphics_17 = new cjs.Graphics().p("AqqUEIAA4yMAokAAAIAAYyg");
	var mask_graphics_18 = new cjs.Graphics().p("AqWUAIAA4iMAoJAAAIAAYig");
	var mask_graphics_19 = new cjs.Graphics().p("AqCT8IAA4RMAnuAAAIAAYRg");
	var mask_graphics_20 = new cjs.Graphics().p("AptT4IAA4BMAnTAAAIAAYBg");
	var mask_graphics_21 = new cjs.Graphics().p("ApZTzIAA3vMAm4AAAIAAXvg");
	var mask_graphics_22 = new cjs.Graphics().p("ApFTvIAA3fMAmdAAAIAAXfg");
	var mask_graphics_23 = new cjs.Graphics().p("AowTrIAA3OMAmBAAAIAAXOg");
	var mask_graphics_24 = new cjs.Graphics().p("AocTnIAA2+MAlmAAAIAAW+g");
	var mask_graphics_25 = new cjs.Graphics().p("AoHTjIAA2uMAlLAAAIAAWug");
	var mask_graphics_26 = new cjs.Graphics().p("AnzTfIAA2dMAkwAAAIAAWdg");
	var mask_graphics_27 = new cjs.Graphics().p("AnfTbIAA2NMAkVAAAIAAWNg");
	var mask_graphics_28 = new cjs.Graphics().p("AnKTWIAA17MAj5AAAIAAV7g");
	var mask_graphics_29 = new cjs.Graphics().p("Am2TSIAA1rMAjeAAAIAAVrg");
	var mask_graphics_30 = new cjs.Graphics().p("AmiTOIAA1aMAjEAAAIAAVag");
	var mask_graphics_31 = new cjs.Graphics().p("AmNTKIAA1KMAioAAAIAAVKg");
	var mask_graphics_32 = new cjs.Graphics().p("Al5TGIAA05MAiNAAAIAAU5g");
	var mask_graphics_33 = new cjs.Graphics().p("AllTCIAA0pMAhyAAAIAAUpg");
	var mask_graphics_34 = new cjs.Graphics().p("AlQS+IAA0ZMAhXAAAIAAUZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ak8S5IAA0HMAg8AAAIAAUHg");
	var mask_graphics_36 = new cjs.Graphics().p("AkoS1IAAz3MAghAAAIAAT3g");
	var mask_graphics_37 = new cjs.Graphics().p("AkTSxIAAzmMAgFAAAIAATmg");
	var mask_graphics_38 = new cjs.Graphics().p("Aj/StIAAzWIfqAAIAATWg");
	var mask_graphics_39 = new cjs.Graphics().p("AjrSpIAAzFIfQAAIAATFg");
	var mask_graphics_40 = new cjs.Graphics().p("AjWSlIAAy1Ie0AAIAAS1g");
	var mask_graphics_41 = new cjs.Graphics().p("AjCShIAAykIeZAAIAASkg");
	var mask_graphics_42 = new cjs.Graphics().p("AiuScIAAyVId+AAIAASVg");
	var mask_graphics_43 = new cjs.Graphics().p("AiZSYIAAyFIdiAAIAASFg");
	var mask_graphics_44 = new cjs.Graphics().p("AiFSUIAAx0IdIAAIAAR0g");
	var mask_graphics_45 = new cjs.Graphics().p("AhwSQIAAxkIcsAAIAARkg");
	var mask_graphics_46 = new cjs.Graphics().p("AhcSMIAAxTIcRAAIAARTg");
	var mask_graphics_47 = new cjs.Graphics().p("AhISIIAAxDIb2AAIAARDg");
	var mask_graphics_48 = new cjs.Graphics().p("AgzSDIAAwxIbbAAIAAQxg");
	var mask_graphics_49 = new cjs.Graphics().p("AgfR/IAAwhIbAAAIAAQhg");
	var mask_graphics_50 = new cjs.Graphics().p("AgLR7IAAwRIalAAIAAQRg");
	var mask_graphics_51 = new cjs.Graphics().p("AAIR3IAAwAIaLAAIAAQAg");
	var mask_graphics_52 = new cjs.Graphics().p("AAcRzIAAvwIZwAAIAAPwg");
	var mask_graphics_53 = new cjs.Graphics().p("AAwRvIAAvfIZWAAIAAPfg");
	var mask_graphics_54 = new cjs.Graphics().p("ABFRrIAAvPIY6AAIAAPPg");
	var mask_graphics_55 = new cjs.Graphics().p("ABZRmIAAu9IYfAAIAAO9g");
	var mask_graphics_56 = new cjs.Graphics().p("ABtRiIAAutIYEAAIAAOtg");
	var mask_graphics_57 = new cjs.Graphics().p("ACCReIAAucIXpAAIAAOcg");
	var mask_graphics_58 = new cjs.Graphics().p("ACWRaIAAuMIXOAAIAAOMg");
	var mask_graphics_59 = new cjs.Graphics().p("ACqRWIAAt8IWzAAIAAN8g");
	var mask_graphics_60 = new cjs.Graphics().p("AC/RSIAAtrIWXAAIAANrg");
	var mask_graphics_61 = new cjs.Graphics().p("ADTROIAAtbIV8AAIAANbg");
	var mask_graphics_62 = new cjs.Graphics().p("ADnRJIAAtJIViAAIAANJg");
	var mask_graphics_63 = new cjs.Graphics().p("AD8RFIAAs5IVGAAIAAM5g");
	var mask_graphics_64 = new cjs.Graphics().p("AEQRBIAAsoIUrAAIAAMog");
	var mask_graphics_65 = new cjs.Graphics().p("AElQ9IAAsYIUPAAIAAMYg");
	var mask_graphics_66 = new cjs.Graphics().p("AE5Q5IAAsIIT0AAIAAMIg");
	var mask_graphics_67 = new cjs.Graphics().p("AFNQ1IAAr3ITaAAIAAL3g");
	var mask_graphics_68 = new cjs.Graphics().p("AFiQxIAArnIS+AAIAALng");
	var mask_graphics_69 = new cjs.Graphics().p("AF2QsIAArVISjAAIAALVg");
	var mask_graphics_70 = new cjs.Graphics().p("AGKQoIAArFISIAAIAALFg");
	var mask_graphics_71 = new cjs.Graphics().p("AGfQkIAAq0IRtAAIAAK0g");
	var mask_graphics_72 = new cjs.Graphics().p("AGzQgIAAqkIRSAAIAAKkg");
	var mask_graphics_73 = new cjs.Graphics().p("AHHQcIAAqTIQ3AAIAAKTg");
	var mask_graphics_74 = new cjs.Graphics().p("AHcQYIAAqDIQbAAIAAKDg");
	var mask_graphics_75 = new cjs.Graphics().p("AHwQUIAApzIQAAAIAAJzg");
	var mask_graphics_76 = new cjs.Graphics().p("AIEQPIAAphIPmAAIAAJhg");
	var mask_graphics_77 = new cjs.Graphics().p("AIZQLIAApRIPKAAIAAJRg");
	var mask_graphics_78 = new cjs.Graphics().p("AItQHIAApAIOvAAIAAJAg");
	var mask_graphics_79 = new cjs.Graphics().p("AJBQDIAAowIOUAAIAAIwg");
	var mask_graphics_80 = new cjs.Graphics().p("AJWP/IAAofIN4AAIAAIfg");
	var mask_graphics_81 = new cjs.Graphics().p("AJqP7IAAoPINeAAIAAIPg");
	var mask_graphics_82 = new cjs.Graphics().p("AJ/P2IAAn9INCAAIAAH9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:203,y:135.5}).wait(1).to({graphics:mask_graphics_1,x:202.3,y:135.1}).wait(1).to({graphics:mask_graphics_2,x:201.6,y:134.7}).wait(1).to({graphics:mask_graphics_3,x:200.9,y:134.3}).wait(1).to({graphics:mask_graphics_4,x:200.3,y:133.8}).wait(1).to({graphics:mask_graphics_5,x:199.6,y:133.4}).wait(1).to({graphics:mask_graphics_6,x:198.9,y:133}).wait(1).to({graphics:mask_graphics_7,x:198.2,y:132.6}).wait(1).to({graphics:mask_graphics_8,x:197.5,y:132.2}).wait(1).to({graphics:mask_graphics_9,x:196.9,y:131.8}).wait(1).to({graphics:mask_graphics_10,x:196.2,y:131.4}).wait(1).to({graphics:mask_graphics_11,x:195.5,y:130.9}).wait(1).to({graphics:mask_graphics_12,x:194.8,y:130.5}).wait(1).to({graphics:mask_graphics_13,x:194.2,y:130.1}).wait(1).to({graphics:mask_graphics_14,x:193.5,y:129.7}).wait(1).to({graphics:mask_graphics_15,x:192.8,y:129.3}).wait(1).to({graphics:mask_graphics_16,x:192.1,y:128.9}).wait(1).to({graphics:mask_graphics_17,x:191.4,y:128.5}).wait(1).to({graphics:mask_graphics_18,x:190.8,y:128}).wait(1).to({graphics:mask_graphics_19,x:190.1,y:127.6}).wait(1).to({graphics:mask_graphics_20,x:189.4,y:127.2}).wait(1).to({graphics:mask_graphics_21,x:188.7,y:126.8}).wait(1).to({graphics:mask_graphics_22,x:188,y:126.4}).wait(1).to({graphics:mask_graphics_23,x:187.4,y:126}).wait(1).to({graphics:mask_graphics_24,x:186.7,y:125.5}).wait(1).to({graphics:mask_graphics_25,x:186,y:125.1}).wait(1).to({graphics:mask_graphics_26,x:185.3,y:124.7}).wait(1).to({graphics:mask_graphics_27,x:184.7,y:124.3}).wait(1).to({graphics:mask_graphics_28,x:184,y:123.9}).wait(1).to({graphics:mask_graphics_29,x:183.3,y:123.5}).wait(1).to({graphics:mask_graphics_30,x:182.6,y:123.1}).wait(1).to({graphics:mask_graphics_31,x:181.9,y:122.6}).wait(1).to({graphics:mask_graphics_32,x:181.3,y:122.2}).wait(1).to({graphics:mask_graphics_33,x:180.6,y:121.8}).wait(1).to({graphics:mask_graphics_34,x:179.9,y:121.4}).wait(1).to({graphics:mask_graphics_35,x:179.2,y:121}).wait(1).to({graphics:mask_graphics_36,x:178.5,y:120.6}).wait(1).to({graphics:mask_graphics_37,x:177.9,y:120.2}).wait(1).to({graphics:mask_graphics_38,x:177.2,y:119.7}).wait(1).to({graphics:mask_graphics_39,x:176.5,y:119.3}).wait(1).to({graphics:mask_graphics_40,x:175.8,y:118.9}).wait(1).to({graphics:mask_graphics_41,x:175.2,y:118.5}).wait(1).to({graphics:mask_graphics_42,x:174.5,y:118.1}).wait(1).to({graphics:mask_graphics_43,x:173.8,y:117.7}).wait(1).to({graphics:mask_graphics_44,x:173.1,y:117.3}).wait(1).to({graphics:mask_graphics_45,x:172.4,y:116.8}).wait(1).to({graphics:mask_graphics_46,x:171.8,y:116.4}).wait(1).to({graphics:mask_graphics_47,x:171.1,y:116}).wait(1).to({graphics:mask_graphics_48,x:170.4,y:115.6}).wait(1).to({graphics:mask_graphics_49,x:169.7,y:115.2}).wait(1).to({graphics:mask_graphics_50,x:169,y:114.8}).wait(1).to({graphics:mask_graphics_51,x:168.4,y:114.4}).wait(1).to({graphics:mask_graphics_52,x:167.7,y:113.9}).wait(1).to({graphics:mask_graphics_53,x:167,y:113.5}).wait(1).to({graphics:mask_graphics_54,x:166.3,y:113.1}).wait(1).to({graphics:mask_graphics_55,x:165.7,y:112.7}).wait(1).to({graphics:mask_graphics_56,x:165,y:112.3}).wait(1).to({graphics:mask_graphics_57,x:164.3,y:111.9}).wait(1).to({graphics:mask_graphics_58,x:163.6,y:111.5}).wait(1).to({graphics:mask_graphics_59,x:162.9,y:111}).wait(1).to({graphics:mask_graphics_60,x:162.3,y:110.6}).wait(1).to({graphics:mask_graphics_61,x:161.6,y:110.2}).wait(1).to({graphics:mask_graphics_62,x:160.9,y:109.8}).wait(1).to({graphics:mask_graphics_63,x:160.2,y:109.4}).wait(1).to({graphics:mask_graphics_64,x:159.6,y:109}).wait(1).to({graphics:mask_graphics_65,x:158.9,y:108.5}).wait(1).to({graphics:mask_graphics_66,x:158.2,y:108.1}).wait(1).to({graphics:mask_graphics_67,x:157.5,y:107.7}).wait(1).to({graphics:mask_graphics_68,x:156.8,y:107.3}).wait(1).to({graphics:mask_graphics_69,x:156.2,y:106.9}).wait(1).to({graphics:mask_graphics_70,x:155.5,y:106.5}).wait(1).to({graphics:mask_graphics_71,x:154.8,y:106.1}).wait(1).to({graphics:mask_graphics_72,x:154.1,y:105.6}).wait(1).to({graphics:mask_graphics_73,x:153.4,y:105.2}).wait(1).to({graphics:mask_graphics_74,x:152.8,y:104.8}).wait(1).to({graphics:mask_graphics_75,x:152.1,y:104.4}).wait(1).to({graphics:mask_graphics_76,x:151.4,y:104}).wait(1).to({graphics:mask_graphics_77,x:150.7,y:103.6}).wait(1).to({graphics:mask_graphics_78,x:150.1,y:103.2}).wait(1).to({graphics:mask_graphics_79,x:149.4,y:102.7}).wait(1).to({graphics:mask_graphics_80,x:148.7,y:102.3}).wait(1).to({graphics:mask_graphics_81,x:148,y:101.9}).wait(1).to({graphics:mask_graphics_82,x:147.3,y:101.5}).wait(1));

	// 图层 4
	this.instance = new lib.元件3("synched",0);
	this.instance.setTransform(633.5,190,1,1,0,0,0,123.5,20);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-126.5},82).wait(1));

	// 动画
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.setTransform(294,229,1,1,0,0,0,294,229);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:176,y:89},82).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,284,306,187);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;