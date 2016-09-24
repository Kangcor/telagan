



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
    size = 20,
    Xcenter = 80+(ppanel.x*options.snap)+step_transf;
    Ycenter = 170+(ppanel.y*options.snap);
 
	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
	 
	for (var i = 1; i <= numberOfSides;i += 1) {
	    ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
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
	var power = Math.random()*4;
	panel(offx+6+(i*7),offy+3+(j*7),5,6,5,3);
	panel(offx+6.5+(i*7),offy+3.5+(j*7),4,5,5,2);
	panel(offx+6.5+(i*7),offy+3.5+power+(j*7),4,5-power,5,3);
}

function background()
{
	ctx.setLineDash([0]);
	ctx.lineWidth=2;
	ctx.strokeStyle = colors[0];
	panel(0,0,120,80,5,1);
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

setInterval(function() {
	draw();
	step  +=1;
	step = step%20;
	step_transf  +=5;
	step_transf = step_transf%200;
},100);