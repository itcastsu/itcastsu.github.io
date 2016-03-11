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
(lib._05高级遮罩 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 遮罩 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ADcQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDHABCMCMQCMCNAADHQAADGiMCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_1 = new cjs.Graphics().p("AD/QtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_2 = new cjs.Graphics().p("AEiQtQiMiNAAjGQAAjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_3 = new cjs.Graphics().p("AFFQtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_4 = new cjs.Graphics().p("AFoQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_5 = new cjs.Graphics().p("AGLQtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_6 = new cjs.Graphics().p("AGuQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_7 = new cjs.Graphics().p("AHRQtQiMiNAAjGQAAjHCMiNQCMiMDHgBQDIABCMCMQCNCNAADHQAADGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_8 = new cjs.Graphics().p("AH0QtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_9 = new cjs.Graphics().p("AIXQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDHABCMCMQCMCNAADHQAADGiMCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_10 = new cjs.Graphics().p("AI6QtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_11 = new cjs.Graphics().p("AJdQtQiMiNAAjGQAAjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_12 = new cjs.Graphics().p("AKAQtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_13 = new cjs.Graphics().p("AKjQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_14 = new cjs.Graphics().p("ALGQtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_15 = new cjs.Graphics().p("ALpQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_16 = new cjs.Graphics().p("AMMQtQiMiNAAjGQAAjHCMiNQCMiMDHgBQDIABCMCMQCNCNAADHQAADGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_17 = new cjs.Graphics().p("AMvQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_18 = new cjs.Graphics().p("ANSQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDHABCMCMQCMCNAADHQAADGiMCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_19 = new cjs.Graphics().p("AN1QtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_20 = new cjs.Graphics().p("AOYQtQiMiNAAjGQAAjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_21 = new cjs.Graphics().p("AO7QtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_22 = new cjs.Graphics().p("APeQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_23 = new cjs.Graphics().p("AQBQtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_24 = new cjs.Graphics().p("AQkQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_25 = new cjs.Graphics().p("ARHQtQiMiNAAjGQAAjHCMiNQCMiMDHgBQDIABCMCMQCNCNAADHQAADGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_26 = new cjs.Graphics().p("ARqQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_27 = new cjs.Graphics().p("ASNQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDHABCMCMQCMCNAADHQAADGiMCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_28 = new cjs.Graphics().p("ASwQtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_29 = new cjs.Graphics().p("ATTQtQiMiNAAjGQAAjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_30 = new cjs.Graphics().p("AT2QtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_31 = new cjs.Graphics().p("AUZQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_32 = new cjs.Graphics().p("AU8QtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_33 = new cjs.Graphics().p("AVfQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_34 = new cjs.Graphics().p("AWCQtQiMiNAAjGQAAjHCMiNQCMiMDHgBQDIABCMCMQCNCNAADHQAADGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_35 = new cjs.Graphics().p("AVgQtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNAADHQAADGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_36 = new cjs.Graphics().p("AU+QtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_37 = new cjs.Graphics().p("AUcQtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_38 = new cjs.Graphics().p("AT6QtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_39 = new cjs.Graphics().p("ATYQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_40 = new cjs.Graphics().p("AS2QtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_41 = new cjs.Graphics().p("ASUQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_42 = new cjs.Graphics().p("ARyQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDHABCMCMQCMCNAADHQAADGiMCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_43 = new cjs.Graphics().p("ARQQtQiMiNAAjGQAAjHCMiNQCMiMDHgBQDIABCMCMQCNCNAADHQAADGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_44 = new cjs.Graphics().p("AQuQtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_45 = new cjs.Graphics().p("AQMQtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_46 = new cjs.Graphics().p("APqQtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_47 = new cjs.Graphics().p("APIQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_48 = new cjs.Graphics().p("AOmQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_49 = new cjs.Graphics().p("AOEQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_50 = new cjs.Graphics().p("ANiQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_51 = new cjs.Graphics().p("ANAQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDGABCNCMQCMCNAADHQAADGiMCNQiNCMjGABQjIgBiMiMg");
	var mask_graphics_52 = new cjs.Graphics().p("AMeQtQiMiNAAjGQAAjHCMiNQCMiMDHgBQDIABCMCMQCNCNAADHQAADGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_53 = new cjs.Graphics().p("AL8QtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNAADHQAADGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_54 = new cjs.Graphics().p("ALaQtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_55 = new cjs.Graphics().p("AK4QtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_56 = new cjs.Graphics().p("AKWQtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_57 = new cjs.Graphics().p("AJ0QtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_58 = new cjs.Graphics().p("AJSQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_59 = new cjs.Graphics().p("AIwQtQiMiNAAjGQAAjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_60 = new cjs.Graphics().p("AIOQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDHABCMCMQCMCNAADHQAADGiMCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_61 = new cjs.Graphics().p("AHsQtQiMiNAAjGQAAjHCMiNQCMiMDHgBQDIABCMCMQCNCNAADHQAADGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_62 = new cjs.Graphics().p("AHKQtQiNiNAAjGQAAjHCNiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_63 = new cjs.Graphics().p("AGoQtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_64 = new cjs.Graphics().p("AGGQtQiMiNgBjGQABjHCMiNQCNiMDHgBQDGABCNCMQCMCNABDHQgBDGiMCNQiNCMjGABQjHgBiNiMg");
	var mask_graphics_65 = new cjs.Graphics().p("AFkQtQiNiNABjGQgBjHCNiNQCMiMDHgBQDIABCMCMQCNCNgBDHQABDGiNCNQiMCMjIABQjHgBiMiMg");
	var mask_graphics_66 = new cjs.Graphics().p("AFCQtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCMCNABDHQgBDGiMCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_67 = new cjs.Graphics().p("AEgQtQiNiNABjGQgBjHCNiNQCMiMDIgBQDHABCMCMQCNCNgBDHQABDGiNCNQiMCMjHABQjIgBiMiMg");
	var mask_graphics_68 = new cjs.Graphics().p("AD+QtQiMiNgBjGQABjHCMiNQCNiMDGgBQDHABCNCMQCNCNAADHQAADGiNCNQiNCMjHABQjGgBiNiMg");
	var mask_graphics_69 = new cjs.Graphics().p("ADcQtQiNiNAAjGQAAjHCNiNQCMiMDIgBQDHABCMCMQCMCNAADHQAADGiMCNQiMCMjHABQjIgBiMiMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:104,y:121}).wait(1).to({graphics:mask_graphics_1,x:107.5,y:121}).wait(1).to({graphics:mask_graphics_2,x:111,y:121}).wait(1).to({graphics:mask_graphics_3,x:114.5,y:121}).wait(1).to({graphics:mask_graphics_4,x:118,y:121}).wait(1).to({graphics:mask_graphics_5,x:121.5,y:121}).wait(1).to({graphics:mask_graphics_6,x:125,y:121}).wait(1).to({graphics:mask_graphics_7,x:128.5,y:121}).wait(1).to({graphics:mask_graphics_8,x:132,y:121}).wait(1).to({graphics:mask_graphics_9,x:135.5,y:121}).wait(1).to({graphics:mask_graphics_10,x:139,y:121}).wait(1).to({graphics:mask_graphics_11,x:142.5,y:121}).wait(1).to({graphics:mask_graphics_12,x:146,y:121}).wait(1).to({graphics:mask_graphics_13,x:149.5,y:121}).wait(1).to({graphics:mask_graphics_14,x:153,y:121}).wait(1).to({graphics:mask_graphics_15,x:156.5,y:121}).wait(1).to({graphics:mask_graphics_16,x:160,y:121}).wait(1).to({graphics:mask_graphics_17,x:163.5,y:121}).wait(1).to({graphics:mask_graphics_18,x:167,y:121}).wait(1).to({graphics:mask_graphics_19,x:170.5,y:121}).wait(1).to({graphics:mask_graphics_20,x:174,y:121}).wait(1).to({graphics:mask_graphics_21,x:177.5,y:121}).wait(1).to({graphics:mask_graphics_22,x:181,y:121}).wait(1).to({graphics:mask_graphics_23,x:184.5,y:121}).wait(1).to({graphics:mask_graphics_24,x:188,y:121}).wait(1).to({graphics:mask_graphics_25,x:191.5,y:121}).wait(1).to({graphics:mask_graphics_26,x:195,y:121}).wait(1).to({graphics:mask_graphics_27,x:198.5,y:121}).wait(1).to({graphics:mask_graphics_28,x:202,y:121}).wait(1).to({graphics:mask_graphics_29,x:205.5,y:121}).wait(1).to({graphics:mask_graphics_30,x:209,y:121}).wait(1).to({graphics:mask_graphics_31,x:212.5,y:121}).wait(1).to({graphics:mask_graphics_32,x:216,y:121}).wait(1).to({graphics:mask_graphics_33,x:219.5,y:121}).wait(1).to({graphics:mask_graphics_34,x:223,y:121}).wait(1).to({graphics:mask_graphics_35,x:219.6,y:121}).wait(1).to({graphics:mask_graphics_36,x:216.2,y:121}).wait(1).to({graphics:mask_graphics_37,x:212.8,y:121}).wait(1).to({graphics:mask_graphics_38,x:209.4,y:121}).wait(1).to({graphics:mask_graphics_39,x:206,y:121}).wait(1).to({graphics:mask_graphics_40,x:202.6,y:121}).wait(1).to({graphics:mask_graphics_41,x:199.2,y:121}).wait(1).to({graphics:mask_graphics_42,x:195.8,y:121}).wait(1).to({graphics:mask_graphics_43,x:192.4,y:121}).wait(1).to({graphics:mask_graphics_44,x:189,y:121}).wait(1).to({graphics:mask_graphics_45,x:185.6,y:121}).wait(1).to({graphics:mask_graphics_46,x:182.2,y:121}).wait(1).to({graphics:mask_graphics_47,x:178.8,y:121}).wait(1).to({graphics:mask_graphics_48,x:175.4,y:121}).wait(1).to({graphics:mask_graphics_49,x:172,y:121}).wait(1).to({graphics:mask_graphics_50,x:168.6,y:121}).wait(1).to({graphics:mask_graphics_51,x:165.2,y:121}).wait(1).to({graphics:mask_graphics_52,x:161.8,y:121}).wait(1).to({graphics:mask_graphics_53,x:158.4,y:121}).wait(1).to({graphics:mask_graphics_54,x:155,y:121}).wait(1).to({graphics:mask_graphics_55,x:151.6,y:121}).wait(1).to({graphics:mask_graphics_56,x:148.2,y:121}).wait(1).to({graphics:mask_graphics_57,x:144.8,y:121}).wait(1).to({graphics:mask_graphics_58,x:141.4,y:121}).wait(1).to({graphics:mask_graphics_59,x:138,y:121}).wait(1).to({graphics:mask_graphics_60,x:134.6,y:121}).wait(1).to({graphics:mask_graphics_61,x:131.2,y:121}).wait(1).to({graphics:mask_graphics_62,x:127.8,y:121}).wait(1).to({graphics:mask_graphics_63,x:124.4,y:121}).wait(1).to({graphics:mask_graphics_64,x:121,y:121}).wait(1).to({graphics:mask_graphics_65,x:117.6,y:121}).wait(1).to({graphics:mask_graphics_66,x:114.2,y:121}).wait(1).to({graphics:mask_graphics_67,x:110.8,y:121}).wait(1).to({graphics:mask_graphics_68,x:107.4,y:121}).wait(1).to({graphics:mask_graphics_69,x:104,y:121}).wait(1));

	// 显示
	this.text = new cjs.Text("传智播客", "51px 'Microsoft YaHei'", "#00FF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.setTransform(268.1,153.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgigAJ2IAAzqMBFBAAAIAATqg");
	this.shape.setTransform(279,195);

	this.text.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(70));

	// 图层 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("As8B9IAWgdQA5AfA0AfIBhhgIjUAAIAAgjIATg8IhOAAIAAgjIBYAAQAKghAIghIhRAAIAAgjIBaAAIARhEIAqAAIgQBEICvAAIAAAjIi4AAIgTBCIDfAAIAAAjIjpAAIgSA9IDcAAIAAAkIhyByQAfASAeATIgaAiQhphIhfg0gAh7D4IAAgXIkEAAIAAAXIglAAIAAjiIFOAAIAADigAl/DBIEEAAIAAg2IkEAAgAl/BsIEEAAIAAg3IkEAAgAGuD3IAAgYIjWAAIAAAYIgjAAIAAjOIgXANIgbgdQBQghA1g5IhrAAIAAgfICTAAIAAhSQg/AEhCADIgHghQC2gGB0gNIAHAiQhAAFhFAEIAABUICcAAIAAAfIh2AAQAvAuBRATIgZAmQhegmgthBIgCAAIAABSIgkAAIAAhSIgBAAQgnA3hGAqIEOAAIAADXgAFTDAIBbAAIAAgxIhbAAgADYDAIBaAAIAAgxIhaAAgAFTBxIBbAAIAAgyIhbAAgADYBxIBaAAIAAgyIhaAAgAN6D1IAAgVIj7AAIAAAVIglAAIAAifIFFAAIAACfgAJ/DAID7AAIAAhKIj7AAgAuuD0IAAkaQgZAsgcAnQgIgVgKgXQBGhkAoiNIApAMQgTA5gVAzIAAFsgAANDyQgCgVgEgVQAeADANAAQAVAAAAgYIAAiLIg7AbIgIgqIBDgZIAAhsIg/AAIAAgkIA/AAIAAhbIAlAAIAABbIA0AAIAAAkIg0AAIAABdIAsgUQACAWADAOIgxAWIAAClQAAA2gwAAIgNAAIgiAAgAH+AwQB+gNBYgdQgwgagegmQglAkgoAbQgLgLgPgOQBYg8AwhEIAkAPIgXAcIDmAAIAAAfQgqAwhEAhQBTAaB3AAQgOATgLAVQiFgKhYgkQhhAniMARQgIgSgNgRgAL/gJQA/gbAnglIi/AAQAiAnA3AZgAn5AKQBZgfAYg5IhmAAIAAggIBvAAQAEgXABgeIgyAAQgTAbgaAYQgKgOgOgQQA1gsATg7IAlAIQgIAWgLAUICVAAIAAAgIhTAAQgBAdgDAYIBmAAIAAAgIhtAAIgDAJQAyAYA6AkIgXAbQgyghgxgZQgiAzhPAhQgJgQgOgSgAhKABIAAgcIh1AAIAAAcIgkAAIAAjKIC+AAIAADKgAi/g7IB1AAIAAhuIh1AAgAO3haIAAg8Il0AAIAAA8IglAAIAAhdIDXAAQgNgVgUgXIAigVQAUAXAWAbIgXAPIDSAAIAABdgAFzh5QAhgaAegeIAbAYQgaAYgoAggAC7iTIAXgWQAcAXAcAZIgbAYQgegegWgUg");
	this.shape_1.setTransform(270.2,191);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(387,346,259.7,96);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;