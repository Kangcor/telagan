



var ctx;
var colors = ['#7F3D09','#7F522F','#CC620E','#FF7A11','#FFA55E','#222222'];
var options = {
				width:1200,
				height:750,
				snap:10
	}

function draw()
{
		var canvas = document.getElementById('arch');
		ctx = canvas.getContext('2d');
		
		background();
		power_panel();
		nanobot_panel();
		consola_panel();
		radar_panel();
		energy_wires();

}

function energy_wires()
{
	// to radar
	ctx.beginPath();
	ctx.lineWidth=4;
	ctx.strokeStyle = colors[3];
	ctx.setLineDash([2,6]);
	ctx.lineDashOffset = radar_angle%8;
	ctx.moveTo(260,500);
	ctx.lineTo(290,450);
	ctx.lineTo(400,450);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(265,500);
	ctx.lineTo(295,455);
	ctx.lineTo(400,455);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(270,500);
	ctx.lineTo(300,460);
	ctx.lineTo(400,460);
	ctx.stroke();

	// to console
	ctx.beginPath();
	ctx.moveTo(750,550);
	ctx.lineTo(750,510);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(755,550);
	ctx.lineTo(755,510);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(760,550);
	ctx.lineTo(760,510);
	ctx.stroke();

	// to nanobots
	ctx.beginPath();
	ctx.moveTo(820,350);
	ctx.lineTo(780,310);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(755,550);
	ctx.lineTo(755,510);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(760,550);
	ctx.lineTo(760,510);
	ctx.stroke();


	ctx.setLineDash([]);
}

function radar_panel()
{
	var ppanel = {};
	ppanel.x = 3;
	ppanel.y = 50;
	panel(ppanel.x,ppanel.y,34,25,5,2);
	//panel(ppanel.x+0.5,ppanel.y+0.5,29,19,5,1);
	ctx.beginPath();
	ctx.lineWidth=8;
	ctx.strokeStyle = colors[3];
	ctx.arc(options.snap*ppanel.x+170,options.snap*ppanel.y+125,115,0,2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle =colors[0];
	ctx.fill();
	// agulla
	ctx.beginPath();
	ctx.lineWidth=4;
	ctx.strokeStyle = colors[3];
	ctx.setLineDash([]);
	ctx.moveTo(options.snap*ppanel.x+170,options.snap*ppanel.y+125);
	var size = 110;
	ctx.lineTo((options.snap*ppanel.x+170)+ size * Math.cos(radar_angle/2/Math.PI),(options.snap*ppanel.y+125)+ size * Math.sin(radar_angle/2/Math.PI));
	ctx.stroke();
}

function consola_panel()
{
	var ppanel = {};
	ppanel.x = 40;
	ppanel.y = 55;
	panel(ppanel.x,ppanel.y,38,20,5,2);
	panel(ppanel.x+0.5,ppanel.y+0.5,29,19,5,1);
}

function nanobot_panel()
{
	var ppanel = {};
	ppanel.x = 82;
	ppanel.y = 26;
	panel(ppanel.x,ppanel.y,36,25,5,2)
	panel(ppanel.x+0.5,ppanel.y+0.5,35,24,5,1);
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle = colors[3];
	ctx.setLineDash([8, 2]);
	ctx.moveTo((ppanel.x*options.snap)+20,210+ppanel.y*options.snap);
	ctx.lineTo((ppanel.x*options.snap)+20+18,210+ppanel.y*options.snap-18);
	ctx.stroke();
	for(var i=0;i<15;i++)
	{
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.strokeStyle = colors[4];
		ctx.setLineDash([8, 2]);
		ctx.moveTo(i*20+(ppanel.x*options.snap)+20+step,210+ppanel.y*options.snap);
		ctx.lineTo(i*20+(ppanel.x*options.snap)+20+18+step,210+ppanel.y*options.snap-18);
		ctx.stroke();
	}
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle = colors[3];
	ctx.setLineDash([8, 2]);
	ctx.moveTo(300+(ppanel.x*options.snap)+20,210+ppanel.y*options.snap);
	ctx.lineTo(300+(ppanel.x*options.snap)+20+18,210+ppanel.y*options.snap-18);
	ctx.stroke();


	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle = colors[3];
	ctx.moveTo(18+(ppanel.x*options.snap)+20,210-18+ppanel.y*options.snap);
	ctx.lineTo(16*20+(ppanel.x*options.snap)+20,210-18+ppanel.y*options.snap);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle = colors[3];
	ctx.moveTo((ppanel.x*options.snap)+20,210+ppanel.y*options.snap);
	ctx.lineTo(16*20+(ppanel.x*options.snap)+20-18,210+ppanel.y*options.snap);
	ctx.stroke();


	// transformation_
	var numberOfSides = 14 - (Math.floor(4+(step_transf/30)));
    size = 10,
    Xcenter = 80+(ppanel.x*options.snap)+step_transf;
    Ycenter = 190+(ppanel.y*options.snap);
 
	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.moveTo (Xcenter +  size * Math.cos(0.8), Ycenter +  size *  Math.sin(0.8));          
	 
	for (var i = 1; i <= numberOfSides;i += 1) {
	    ctx.lineTo (Xcenter + size * Math.cos(0.8+(i * 2 * Math.PI / numberOfSides)), Ycenter + size * Math.sin(0.8+(i * 2 * Math.PI / numberOfSides)));
	}
	 
	ctx.strokeStyle =colors[3];
	ctx.fillStyle =colors[2];
	ctx.lineWidth = 3;
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	// sitges
	ctx.beginPath();
	ctx.lineWidth=5;
	ctx.strokeStyle = colors[3];
	ctx.moveTo((ppanel.x*options.snap)+40,40+ppanel.y*options.snap);
	ctx.lineTo((ppanel.x*options.snap)+40,80+ppanel.y*options.snap);
	ctx.lineTo((ppanel.x*options.snap)+70,110+ppanel.y*options.snap);
	ctx.lineTo((ppanel.x*options.snap)+70,130+ppanel.y*options.snap);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth=5;
	ctx.strokeStyle = colors[3];
	ctx.moveTo(100+(ppanel.x*options.snap)+40,40+ppanel.y*options.snap);
	ctx.lineTo(100+(ppanel.x*options.snap)+40,80+ppanel.y*options.snap);
	ctx.lineTo(100+(ppanel.x*options.snap)+10,110+ppanel.y*options.snap);
	ctx.lineTo(100+(ppanel.x*options.snap)+10,130+ppanel.y*options.snap);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth=5;
	ctx.strokeStyle = colors[3];
	ctx.moveTo(180+(ppanel.x*options.snap)+40,40+ppanel.y*options.snap);
	ctx.lineTo(180+(ppanel.x*options.snap)+40,80+ppanel.y*options.snap);
	ctx.lineTo(180+(ppanel.x*options.snap)+70,110+ppanel.y*options.snap);
	ctx.lineTo(180+(ppanel.x*options.snap)+70,130+ppanel.y*options.snap);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth=5;
	ctx.strokeStyle = colors[3];
	ctx.moveTo(180+100+(ppanel.x*options.snap)+40,40+ppanel.y*options.snap);
	ctx.lineTo(180+100+(ppanel.x*options.snap)+40,80+ppanel.y*options.snap);
	ctx.lineTo(180+100+(ppanel.x*options.snap)+10,110+ppanel.y*options.snap);
	ctx.lineTo(180+100+(ppanel.x*options.snap)+10,130+ppanel.y*options.snap);
	ctx.stroke();

}

function power_panel()
{
	var ppanel = {};
	ppanel.x = 40;
	ppanel.y = 26;
	panel(ppanel.x,ppanel.y,38,25,5,2)
	panel(ppanel.x+0.5,ppanel.y+0.5,37,24,5,1)
	for(var i=0;i<4;i++)
	{
		for(var j=0;j<3;j++)
		{
			power_cell(i,j,ppanel.x,ppanel.y);
		}
	}
}

function power_cell(i,j, offx, offy)
{
	var power = 3+Math.random()*1;
	panel(offx+6+(i*7),offy+3+(j*7),5,6,5,3);
	panel(offx+6.5+(i*7),offy+3.5+(j*7),4,5,5,2);
	panel(offx+6.5+(i*7),offy+3.5+power+(j*7),4,5-power,5,3);
}

function background()
{
	ctx.setLineDash([0]);
	ctx.lineWidth=2;
	ctx.strokeStyle = colors[0];
	panel(0,0,120,80,5,0);
}



function panel(x,y,width,height,radius, fill, stroke)
{
	/*ctx.fillStyle = colors[c1];
	ctx.fillRect (x, y, w, h);
	ctx.fillStyle = colors[c2];
	ctx.fillRect (x+margin, y+margin, w-(margin*2), h-(margin*2));
*/
	x = x*options.snap;
	y = y*options.snap;
	width = width*options.snap;
	height = height*options.snap;
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.fillStyle = colors[fill];
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  ctx.fill();
  
 
    ctx.stroke();
 

}

var step = 0;
var step_transf = 0;
var radar_angle = 0;

setInterval(function() {
	draw();
	step  +=1;
	step = step%20;
	step_transf  +=5;
	step_transf = step_transf%200;
	radar_angle++;
	radar_angle = radar_angle%360;
},100);