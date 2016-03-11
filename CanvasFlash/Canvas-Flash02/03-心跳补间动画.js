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
(lib._03心跳补间动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AidCfQhChCgBhdQABhcBChCQBBhCBcAAQBcAABDBCQBCBCgBBcQABBdhCBCQhDBChcAAQhcAAhBhCg");
	this.shape.setTransform(272.5,193.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0100","#FF0000","#FF0000","#FF0000"],[0,0.576,0.91,1],-66.9,-82.2,0,-66.9,-82.2,264.9).s().p("AihCgQhDhDAAheQAAhfBEhCQAMgLAMgJQAsgiA2gHQATgEATAAQAlgBAhAKQA0AQAoApQAmAlAQAvQANAlAAAoQAABehEBDQgkAkgsARQgTAIgXAEQgUADgTAAQhfgDhChCg");
	this.shape_1.setTransform(272.5,193.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FF0302","#FF0101","#FF0000","#FF0000"],[0,0.576,0.91,1],-66.8,-82.4,0,-66.8,-82.4,264.9).s().p("AgBDwQhmgFhEhHQhGhIAAhjQAAhoBLhBQAMgLANgJQAwghA4gEQAUgEATgBQAngDAjAKQA4APArAqQAnAoAQAzQANAngBAsQgBBihIBHQgmAmgvASQgVAJgYAFIgcABIgMAAg");
	this.shape_2.setTransform(272.4,193.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF0604","#FE0201","#FE0000","#FF0000"],[0,0.576,0.91,1],-66.9,-82.6,0,-66.9,-82.6,264.9).s().p("AgGEDQhvgLhJhNQhLhQABhuQABh0BUhBQAOgLAQgIQA2gfA6ACQAVgHAVgCQApgGAnAJQA/AOAuAuQArAqAQA7QANArgCAwQgEBrhQBOQgpAog0AVQgXAKgaAGIgPAAIgdgBg");
	this.shape_3.setTransform(272.5,193.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FF0A07","#FE0302","#FD0000","#FF0000"],[0,0.576,0.91,1],-66.9,-83,0,-66.9,-83,264.9).s().p("AgMEdQh7gShPhXQhShaABh8QABiHBjhAQARgLASgIQA/gcA9ALQAWgKAXgFQAsgJAuAHQBJAMAyAzQAvAvAQBEQANAygDA1QgHB4hbBWQguAtg6AZQgbALgcAIQgagBgYgEg");
	this.shape_4.setTransform(272.5,194.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF100B","#FD0504","#FC0000","#FF0000"],[0,0.576,0.91,1],-66.9,-83.4,0,-66.9,-83.4,264.9).s().p("AgTFAQiMgchXhjQhbhpACiOQACidB1hAQAUgKAVgIQBKgaBDAWQAXgNAZgIQAxgOA1AGQBWAKA4A5QA0A0ARBSQANA5gFA8QgMCIhoBiQg1AyhDAeQgeANgfAJQgegDgbgFg");
	this.shape_5.setTransform(272.5,194.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FF170F","#FC0805","#FB0000","#FF0000"],[0,0.576,0.91,1],-66.9,-83.8,0,-66.9,-83.8,264.9).s().p("AgcFrQiggohhhyQhmh5ACilIAAgBQAEi5CMg+QAXgLAagGQBXgXBJAkQAZgSAcgLQA2gUA+AEQBlAGBABBQA7A7AQBiQANBDgHBEQgQCch5BwQg9A5hNAjQgjAQgkALQghgFgggIg");
	this.shape_6.setTransform(272.5,195.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FF1F15","#FB0A07","#F90000","#FF0000"],[0,0.576,0.91,1],-66.9,-84.3,0,-66.9,-84.3,264.9).s().p("AgnGdQi4g2hsiDQh0iOAEjAQAFjbCmg9QAcgKAegFQBogTBPA0QAcgXAggPQA8gcBIACQB4ADBJBKQBCBDARB0QANBOgKBPQgWCyiMCCQhHBAhaAqQgoATgpAPQgkgJgngLg");
	this.shape_7.setTransform(272.5,195.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FF281B","#FA0D09","#F70000","#FF0000"],[0,0.576,0.91,1],-67,-84.8,0,-67,-84.8,264.9).s().p("AgzHYQjUhGh6iXQiDilAFjfQAHkCDFg7QAggKAlgEQB6gPBXBHQAdgdAlgUQBEgkBUAAQCOgBBSBUQBMBMARCKQANBbgNBaQgdDOijCUQhRBKhpAyQguAWgvASQgqgMgsgPg");
	this.shape_8.setTransform(272.6,196.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FF3322","#F8110B","#F50000","#FF0000"],[0,0.576,0.91,1],-67.1,-85.4,0,-67.1,-85.4,264.9).s().p("AhDIbQjzhZiIiuQiUi/AGkCIAAAAQAIktDpg6QAlgJArgDQCQgKBgBcQAggkApgZQBNguBhgDQCmgFBeBfQBWBYARChQANBrgQBnQglDsi9CqQhdBUh6A7Qg1AZg2AWQgwgQgzgSg");
	this.shape_9.setTransform(272.7,196.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FF3F2A","#F7150E","#F30000","#FF0000"],[0,0.576,0.91,1],-67.2,-86.1,0,-67.2,-86.1,264.9).s().p("AhSJmQkXhuiZjIQinjcAIkpIAAgBQAKleEPg3QAsgJAygBQCogEBqBzQAjgsAugeQBWg5BxgGQDBgKBqBsQBiBjARC9QANB7gUB1QgtEOjaDDQhrBgiMBFQg8Adg+AaQg4gUg5gWg");
	this.shape_10.setTransform(272.8,197.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FF4C33","#F51911","#F00000","#FF0000"],[0,0.576,0.91,1],-67.3,-86.8,0,-67.3,-86.8,264.9).s().p("AhlK5Qk9iFirjkQi9j9AJlUIAAgBQANmTE6g2QAzgJA6ABQDCACB1COQAmg1A0glQBhhECCgJQDegQB5B6QBuBwARDcQANCNgXCFQg3E0j6DeQh6BsihBQQhFAihFAfQhBgZhBgbg");
	this.shape_11.setTransform(272.9,198.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FF5A3D","#F31E14","#ED0000","#FF0000"],[0,0.576,0.91,1],-67.5,-87.6,0,-67.5,-87.6,264.9).s().p("Ah5MUQlniejAkDQjUkgALmEIAAgBQAPnPFpgyQA7gJBCADQDfAJCBCrQArg/A6gsQBshSCUgMQD/gXCICLQB8B+ASD8QANCigcCXQhBFdkeD7QiKB6i4BcQhNAnhPAkIiTg+g");
	this.shape_12.setTransform(273.1,198.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FF6A47","#F12418","#EA0000","#FF0000"],[0,0.576,0.91,1],-67.6,-88.4,0,-67.6,-88.4,264.9).s().p("AiPN3QmVi5jWkkQjtlIANm3IAAgBQARoPGdgwQBDgIBMAFQD+AQCODKQAvhJBBgzQB4hgCogRQEjgdCZCcQCLCOASEgQANC4ghCpQhMGKlEEcQicCJjQBpQhYAshZAqQhSgkhUgmg");
	this.shape_13.setTransform(273.2,199.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FF7B53","#EF291C","#E70000","#FF0000"],[0,0.576,0.91,1],-67.8,-89.3,0,-67.8,-89.3,264.9).s().p("AinPhQnHjWjtlIQkJlxAQnvIAAgBQATpVHVgtQBLgHBWAHQEgAYCcDsQA1hVBHg7QCGhvC+gWQFJgjCrCuQCbCeATFHQAMDQglC9QhZG7ltE+QivCajrB3QhjAyhjAwQhdgrhegsg");
	this.shape_14.setTransform(273.4,200.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FF8D5F","#EC2F20","#E30000","#FF0000"],[0,0.576,0.91,1],-68,-90.2,0,-68,-90.2,264.9).s().p("Ai/RUQn9j1kHlwQknmeATorIAAgBQAWqfIQgqQBVgHBhAKQFEAhCrEPQA6hhBPhDQCUiADVgaQFzgrC/DCQCsCwATFxQANDpgsDUQhmHumYFkQjFCqkHCHQhuA4hvA3Qhogxhogzg");
	this.shape_15.setTransform(273.6,201.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFA06C","#EA3624","#DF0000","#FF0000"],[0,0.576,0.91,1],-68.2,-91.2,0,-68.2,-91.2,264.9).s().p("AjbTPQo2kXkimaQlGnNAVprIAAgBQAarvJPgnQBfgGBtAMQFrAqC7E2QBAhtBXhOQCjiRDugeQGfg0DTDXQDADEATGdQAMEEgxDrQh0ImnIGMQjbC9klCXQh7A/h7A+Qh0g5h0g5g");
	this.shape_16.setTransform(273.8,202.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFB57A","#E73D29","#DB0000","#FF0000"],[0,0.576,0.91,1],-68.4,-92.3,0,-68.4,-92.3,264.9).s().p("Aj4VRQpyk7k/nGQlooAAXqvIAAgBQAetEKTgjQBqgGB5APQGUA0DNFfQBFh7BghXQCzikEJgkQHOg9DpDuQDUDYATHNQAMEhg3EEQiDJhn6G2QjzDSlGCoQiHBGiIBFQiBhAiBhBg");
	this.shape_17.setTransform(274,203.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFCB88","#E4442E","#D70000","#FF0000"],[0,0.576,0.91,1],-68.7,-93.5,0,-68.7,-93.5,264.9).s().p("AkWXcQq0lildn0QmMo3Aar3IAAgBQAhueLbggQB2gFCHASQG/A+DfGMQBMiKBphiQDEi4ElgpQIAhGEBEGQDoDuAUH+QANFAg/EfQiTKgovHjQkMDnloC6IksCbIkbiRg");
	this.shape_18.setTransform(274.3,204.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-68.9,-94.7,0,-68.9,-94.7,264.9).s().p("AAAcRIAAgBIlJisQ4vs0A44nQAqygQ4CYQHtBJDxG6QDym6HuhJQQ3iYAqSgQA4Yn4vM0IlJCsIAAABg");
	this.shape_19.setTransform(274.5,206);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-66.5,-91.3,0,-66.5,-91.3,255.5).s().p("Ak9YqQ32sWA13vQApx2QRCTQHcBGDoGqQDqmqHchGQQQiTApR2QA1Xv32MWIk9Cmg");
	this.shape_20.setTransform(274.5,206);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-64,-87.9,0,-64,-87.9,246).s().p("AkxXwQ2+r6Az22QAoxLPqCNQHLBDDfGbQDhmbHLhDQPpiNAoRLQAzW229L6IkyCfg");
	this.shape_21.setTransform(274.5,206);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-61.5,-84.5,0,-61.5,-84.5,236.5).s().p("AklW1Q2GrcAy1+QAmwhPECIQG4BBDXGKQDYmKG5hBQPDiIAmQhQAyV+2FLcIkmCag");
	this.shape_22.setTransform(274.5,206);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-59.1,-81.1,0,-59.1,-81.1,227.1).s().p("AkaV7Q1Mq/Av1GQAkv3OeCDQGnA+DOF7QDPl7Gog+QOciDAlP3QAvVG1MK/IkaCTg");
	this.shape_23.setTransform(274.5,206);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-56.6,-77.7,0,-56.6,-77.7,217.6).s().p("AkOVAQ0UqhAu0OQAivMN3B9QGVA8DGFqQDHlqGVg8QN2h9AjPMQAuUO0UKhIkOCNg");
	this.shape_24.setTransform(274.5,206);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-54.1,-74.4,0,-54.1,-74.4,208.1).s().p("AkCUGQzcqEAszVQAhujNQB4QGEA5C9FbQC+lbGEg5QNQh4AhOjQAsTVzbKEIkDCHg");
	this.shape_25.setTransform(274.5,206);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-51.7,-71,0,-51.7,-71,198.7).s().p("AAAVMIAAAAIj2iBQyjpnApydQAgt4MqByQFyA3C0FLQC1lLFzg3QMphyAgN4QApSdyiJnIj3CBIAAAAg");
	this.shape_26.setTransform(274.5,206);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-54.1,-74.3,0,-54.1,-74.3,207.9).s().p("AkCUEQzaqDAszUQAhuhNPB3QGDA6C9FaQC+laGDg6QNPh3AhOhQAsTUzaKDIkCCHg");
	this.shape_27.setTransform(274.5,206);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-56.5,-77.6,0,-56.5,-77.6,217).s().p("AkNU9Q0RqgAt0KQAjvKN1B8QGUA8DFFqQDGlqGVg8QN0h8AjPKQAtUK0QKgIkOCNg");
	this.shape_28.setTransform(274.5,206);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-58.9,-80.8,0,-58.9,-80.8,226.3).s().p("AkZV2Q1Hq8Au1BQAlv0OaCCQGlA+DOF6QDOl6Gmg+QOaiCAlP0QAvVB1IK8IkZCTg");
	this.shape_29.setTransform(274.6,206);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-61.3,-84.1,0,-61.3,-84.1,235.4).s().p("AkkWvQ1/rZAx14QAmwcPACHQG2BBDWGIQDXmIG3hBQO/iHAmQcQAxV41/LZIkkCYg");
	this.shape_30.setTransform(274.6,206);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-63.7,-87.4,0,-63.7,-87.4,244.7).s().p("AkvXnQ23r1A02uQAnxFPlCMQHIBDDeGYQDgmYHIhDQPkiMAnRFQAzWu21L1IkwCfg");
	this.shape_31.setTransform(274.6,206);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-66.1,-90.7,0,-66.1,-90.7,253.8).s().p("AAAbGIAAgBIk7ilQ3tsRA13mQApxuQKCRQHZBGDnGoQDomoHZhGQQKiRApRuQA1Xm3sMRIk8ClIAAABg");
	this.shape_32.setTransform(274.6,206);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-63.8,-87.5,0,-63.8,-87.5,245).s().p("AkwXqQ24r2Az2xQAnxHPnCMQHIBEDfGZQDgmZHJhEQPmiMAnRHQAzWx23L2IkxCfg");
	this.shape_33.setTransform(274.6,205.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-61.5,-84.4,0,-61.5,-84.4,236.2).s().p("AklWzQ2ErbAy18QAmwgPDCIQG3BBDXGKQDYmKG5hBQPBiIAmQgQAyV82ELbIklCZg");
	this.shape_34.setTransform(274.6,206);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-59.2,-81.2,0,-59.2,-81.2,227.4).s().p("AkaV9Q1Oq/Au1IQAlv4OfCCQGoA/DOF7QDPl7Gpg/QOdiCAmP4QAuVI1OK/IkaCTg");
	this.shape_35.setTransform(274.6,205.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-56.9,-78.1,0,-56.9,-78.1,218.6).s().p("AkPVGQ0aqkAt0UQAkvQN6B9QGYA8DGFtQDHltGYg8QN6h9AkPQQAtUU0ZKkIkQCOg");
	this.shape_36.setTransform(274.6,206);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-54.6,-74.9,0,-54.6,-74.9,209.7).s().p("AAAWYIAAgBIkEiHQzlqJArzfQAjupNWB4QGHA6C+FdQC/ldGHg6QNWh4AiOpQAsTfzkKJIkFCHIAAABg");
	this.shape_37.setTransform(274.6,206);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-56.3,-77.2,0,-56.3,-77.2,216.3).s().p("AkMU5Q0NqdAt0HQAjvGNyB7QGTA8DEFpQDFlpGUg8QNxh7AjPGQAtUH0MKdIkNCMg");
	this.shape_38.setTransform(274.6,205.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-58,-79.7,0,-58,-79.7,222.9).s().p("AkUViQ01qyAv0uQAkvkOMB/QGgA+DKFzQDMlzGgg+QOMh/AkPkQAuUu00KyIkVCQg");
	this.shape_39.setTransform(274.5,206);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-59.7,-82,0,-59.7,-82,229.6).s().p("AkdWLQ1brHAv1VQAlwCOoCEQGsA/DQF/QDSl/Gsg/QOniEAlQCQAwVV1cLHIkdCUg");
	this.shape_40.setTransform(274.5,205.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-61.4,-84.4,0,-61.4,-84.4,236.2).s().p("AklWzQ2DrbAx18QAmwgPCCIQG5BBDWGKQDYmKG4hBQPCiIAmQgQAxV82CLbIkmCZg");
	this.shape_41.setTransform(274.5,206);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-63.2,-86.8,0,-63.2,-86.8,242.9).s().p("AAAZ6IAAgBIktidQ2rrwAy2kQAnw9PeCLQHFBDDcGVQDemVHFhDQPdiLAnQ9QAyWk2qLwIkuCdIAAABg");
	this.shape_42.setTransform(274.5,206);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-58,-79.6,0,-58,-79.6,222.9).s().p("AkUViQ01qyAv0uQAkvkOMCAQGgA9DKF0QDMl0Ggg9QOMiAAjPkQAvUu00KyIkVCQg");
	this.shape_43.setTransform(274.5,205.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-56.3,-77.3,0,-56.3,-77.3,216.3).s().p("AAAXFIAAgBIkMiMQ0NqdAt0GQAjvHNyB8QGTA8DEFoQDGloGTg8QNxh8AjPHQAtUG0MKdIkNCMIAAABg");
	this.shape_44.setTransform(274.5,206);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-57.3,-78.6,0,-57.3,-78.6,220.2).s().p("AkRVRQ0kqqAu0dQAkvYOBB+QGaA9DIFvQDJlvGbg9QOBh+AjPYQAuUd0jKqIkSCOg");
	this.shape_45.setTransform(274.5,205.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-58.3,-80,0,-58.3,-80,224.1).s().p("AkWVpQ06q2Au00QAkvpORCAQGhA+DMF2QDNl2Gig+QOQiAAkPpQAuU005K2IkXCRg");
	this.shape_46.setTransform(274.6,205.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-59.3,-81.4,0,-59.3,-81.4,227.9).s().p("AkbWAQ1RrBAv1LQAkv7OhCDQGpA/DPF8QDRl8Gog/QOhiDAkP7QAwVL1SLBIkbCUg");
	this.shape_47.setTransform(274.6,206);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-60.3,-82.9,0,-60.3,-82.9,231.8).s().p("AAAYvIAAgBIkgiXQ1orNAw1iQAlwMOwCFQGwBADTGDQDUmDGwhAQOwiFAlQMQAwVi1oLNIkgCXIAAABg");
	this.shape_48.setTransform(274.6,206);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-59.2,-81.2,0,-59.2,-81.2,227.4).s().p("AkaV8Q1Pq/Aw1IQAkv4OeCDQGpA+DOF7QDQl7Gog+QOeiDAkP4QAwVI1PK/IkaCUg");
	this.shape_49.setTransform(274.6,206);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-56.8,-78.1,0,-56.8,-78.1,218.6).s().p("AAAXUIAAgBIkPiOQ0aqkAu0TQAjvRN6B+QGYA8DGFsQDIlsGXg8QN6h+AjPRQAuUT0ZKkIkQCOIAAABg");
	this.shape_50.setTransform(274.5,206);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-57,-78.3,0,-57,-78.3,219.3).s().p("AkQVKQ0eqmAu0YQAjvUN9B+QGZA9DHFtQDIltGZg9QN9h+AjPUQAuUY0dKmIkRCPg");
	this.shape_51.setTransform(274.5,206);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-57.2,-78.6,0,-57.2,-78.6,220).s().p("AkRVPQ0iqpAt0cQAkvXOAB+QGaA9DIFvQDJlvGag9QOAh+AkPXQAtUc0iKpIkRCPg");
	this.shape_52.setTransform(274.5,206);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFE298","#E14C33","#D20000","#FF0000"],[0,0.576,0.91,1],-57.4,-78.9,0,-57.4,-78.9,220.8).s().p("AAAXjIAAgBIkSiPQ0nqrAu0gQAkvbODB/QGcA9DIFwQDKlwGbg9QODh/AkPbQAuUg0nKrIkSCPIAAABg");
	this.shape_53.setTransform(274.5,206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525,371,45,45);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;