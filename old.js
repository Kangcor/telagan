
var gruixor_quadre = [3,3,3,3,3,3,3,3,3];
var textos = [	"Paso 1: Ingesta de datos. Mediante scripts se cargan los datos que provienen de hojas excel i de webs",
				"Paso 2: Limpieza de datos. Se limpian los datos, uniformandolos para poder cargarlos en una base de datos",
				"Paso 3: Base de datos. Contiene los datos limpiados y tambien los resultados de los modelos"]

var console_text = [
"[    2.410240] [TTM] Initializing DMA pool allocator",
"[    2.410247] nouveau  [     DRM] VRAM: 1024 MiB",
"[    2.410248] nouveau  [     DRM] GART: 1048576 MiB",
"[    2.410251] nouveau  [     DRM] TMDS table version 2.0",
"[    2.410252] nouveau  [     DRM] DCB version 4.0",
"[    2.410253] nouveau  [     DRM] DCB outp 00: 02000300 00000000",
"[    2.410255] nouveau  [     DRM] DCB outp 01: 01000302 00020030",
"[    2.410256] nouveau  [     DRM] DCB outp 02: 02011362 00020010",
"[    2.410257] nouveau  [     DRM] DCB outp 03: 01022310 00000000",
"[    2.410258] nouveau  [     DRM] DCB conn 00: 00001030",
"[    2.410259] nouveau  [     DRM] DCB conn 01: 00002161",
"[    2.410260] nouveau  [     DRM] DCB conn 02: 00000200",
"[    2.421433] [drm] Supports vblank timestamp caching Rev 2 (21.10.2013).",
"[    2.421434] [drm] Driver supports precise vblank timestamp query",
"[    2.433892] nouveau  [     DRM] MM: using COPY for buffer copies",
"[    2.515468] nouveau  [     DRM] allocated 1920x1080 fb: 0x70000, bo ffff88020e0eac00",
"[    2.515536] fbcon: nouveaufb (fb0) is primary device",
"[    2.515558] Console: switching to colour frame buffer device 200x56",
"[    2.515573] nouveau 0000:01:00.0: fb0: nouveaufb frame buffer device",
"[    2.515574] nouveau 0000:01:00.0: registered panic notifier",
"[    2.518128] [drm] Initialized nouveau 1.1.2 20120801 for 0000:01:00.0 on minor 0",
"[    2.538158] Switched to clocksource tsc",
"[    2.775310] EXT4-fs (sda1): INFO: recovery required on readonly filesystem",
"[    2.775313] EXT4-fs (sda1): write access will be enabled during recovery",
"[    3.348000] random: nonblocking pool is initialized",
"[    4.018211] EXT4-fs (sda1): orphan cleanup on readonly fs",
"[    4.351452] EXT4-fs (sda1): 23 orphan inodes deleted",
"[    4.351455] EXT4-fs (sda1): recovery complete",
"[    4.675391] EXT4-fs (sda1): mounted filesystem with ordered data mode. Opts: (null)",
"[   21.562146] Adding 8329212k swap on /dev/sda5.  Priority:-1 extents:1 across:8329212k FS",
"[   22.064619] systemd-udevd[387]: starting version 204",
"[   22.146191] lp: driver loaded but no devices found",
"[   22.149487] ppdev: user-space parallel port driver",
"[   22.196704] shpchp: Standard Hot Plug PCI Controller Driver version: 0.4",
"[   22.197362] mei_me 0000:00:16.0: irq 45 for MSI/MSI-X",
"[   22.204801] ACPI Warning: SystemIO range 0x0000",
"[   22.204807] ACPI: If an ACPI driver is available for this device",
"[   22.204817] lpc_ich: Resource conflict(s) found affecting gpio_ich",
"[   22.239436] snd_hda_intel 0000:00:1b.0: irq 46 for MSI/MSI-X",
"[   22.239507] snd_hda_intel 0000:01:00.1: Disabling MSI",
"[   22.239511] snd_hda_intel 0000:01:00.1: Handle VGA-switcheroo audio client",
"[   22.248013] AVX version of gcm_enc/dec engaged.",
"[   22.249784] sound hdaudioC0D0: ALC221: SKU not ready 0x411111f0",
"[   22.250032] sound hdaudioC0D0: autoconfig: line_outs=1 (0x14/0x0/0x0/0x0/0x0) type:line",
"[   22.250033] sound hdaudioC0D0:    speaker_outs=1 (0x17/0x0/0x0/0x0/0x0)",
"[   22.250034] sound hdaudioC0D0:    hp_outs=1 (0x21/0x0/0x0/0x0/0x0)",
"[   22.250035] sound hdaudioC0D0:    mono: mono_out=0x0",
"[   22.250036] sound hdaudioC0D0:    inputs:",
"[   22.250038] sound hdaudioC0D0:      Mic=0x1a",
"[   22.250039] sound hdaudioC0D0:      Line=0x1b",
"[   22.257124] input: HDA Intel PCH Mic as /devices/pci0000:00/0000:00:1b.0/sound/card0/input6",
"[   22.257179] input: HDA Intel PCH Line as /devices/pci0000:00/0000:00:1b.0/sound/card0/input7",
"[   22.257238] input: HDA Intel PCH Line Out as /devices/pci0000:00/0000:00:1b.0/sound/card0/input8",
"[   22.257286] input: HDA Intel PCH Front Headphone as /devices/pci0000:00/0000:00:1b.0/sound/card0/input9",
"[   22.268424] intel_rapl: Found RAPL domain package",
"[   22.268427] intel_rapl: Found RAPL domain core",
"[   22.272547] device-mapper: multipath: version 1.7.0 loaded",
"[   22.392813] EXT4-fs (sda1): re-mounted. Opts: errors=remount-ro",
"[   22.459149] WARNING! power/level is deprecated; use power/control instead",
"[   22.787403] input: HP WMI hotkeys as /devices/virtual/input/input10",
"[   23.021484] input: HDA NVidia HDMI/DP,pcm=3 as /devices/pci0000:00/0000:00:1c.0/0000:01:00.1/sound/card1/input11",
"[   23.021559] input: HDA NVidia HDMI/DP,pcm=7 as /devices/pci0000:00/0000:00:1c.0/0000:01:00.1/sound/card1/input12",
"[   23.021628] input: HDA NVidia HDMI/DP,pcm=8 as /devices/pci0000:00/0000:00:1c.0/0000:01:00.1/sound/card1/input13",
"[   23.021702] input: HDA NVidia HDMI/DP,pcm=9 as /devices/pci0000:00/0000:00:1c.0/0000:01:00.1/sound/card1/input14",
"[   25.665839] init: failsafe main process (804) killed by TERM signal",
"[   26.547149] Bluetooth: Core ver 2.19",
"[   26.547159] NET: Registered protocol family 31",
"[   26.547160] Bluetooth: HCI device and connection manager initialized",
"[   26.547165] Bluetooth: HCI socket layer initialized",
"[   26.547166] Bluetooth: L2CAP socket layer initialized",
"[   26.547172] Bluetooth: SCO socket layer initialized",
"[   26.557723] Bluetooth: BNEP (Ethernet Emulation) ver 1.3",
"[   26.557725] Bluetooth: BNEP filters: protocol multicast",
"[   26.557728] Bluetooth: BNEP socket layer initialized",
"[   26.659024] Bluetooth: RFCOMM TTY layer initialized",
"[   26.659031] Bluetooth: RFCOMM socket layer initialized",
"[   26.659043] Bluetooth: RFCOMM ver 1.11",
"[   26.757079] init: cups main process (901) killed by HUP signal",
"[   26.757086] init: cups main process ended, respawning",
"[   28.195185] init: samba-ad-dc main process (954) terminated with status 1",
];

var ctx;
function draw()
{
		var canvas = document.getElementById('arch');
		ctx = canvas.getContext('2d');
		
		background();
		// Paso1: Datos
		draw_image("bsm",1120,200,260,150)

}

function draw_image(id, x,y, am=50, al=50)
{
	var img=document.getElementById(CC620Eid);
	ctx.drawImage(img,x,y,am,al);
}
var colors = ['#7F3D09','#7F522F','#CC620E','#FF7A11','#FFA55E','#222222'];
var power=[50,10,20,3,15];


function background()
{
	// fons
	ctx.setLineDash([0]);
	ctx.lineWidth=2;
	panel(0,0,1500,800,5,1);
	panel(10,10,500,300,5,2);
	panel(15,15,490,290,5,1);

	for(var i=30;i<320;i+=36)
		{
			panel(i,40,30,40,5,0);
			if(i<100) panel(i,40,30,40,5,3);
		}
	ctx.font = "8px ";
	ctx.fillStyle = colors[4];
	ctx.fillText("MAIN POWER",35,30);
	
	forquilla(30,85,96,1)
	forquilla(102,85,132,2)
	forquilla(140,85,240,3)
	forquilla(250,85,280,4)


	panel(520,10,100,200,5,2);
	panel(525,15,90,190,5,1);
	knob(570,60,20,25,1,3,4);
	knob(550,130,10,15,0.5,2,3);
	knob(590,130,10,15,0.2,2,3);
	ctx.font = "8px ";
	ctx.fillStyle = colors[4];
	ctx.fillText("ATMOSPHERE",535,190);

	panel(630,10,380,200,5,2);
	panel(635,15,290,180,5,5);
	ctx.font = "8px ";
	ctx.fillStyle = colors[0];
	ctx.fillText("CONSOLE",935,190);

	ctx.font = "8px ";
	ctx.fillStyle = colors[4];
	ctx.fillText("ATMOSPHERE",535,190);
	for(var i=0;i<14;i++)
	{
		ctx.fillText(console_text[i+offset_console].substr(0,60),640,30+i*12);
	}
}


function knob(x,y,r1,r2,speed,c1,c2)
{
	ctx.beginPath();
	ctx.lineWidth=4;
		
	ctx.strokeStyle = colors[c1];
	ctx.arc(x,y,r1,(knob_degree*speed*(Math.PI/180)),2 * Math.PI+(((knob_degree*speed-40)*(Math.PI/180))));
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth=4;
		
	ctx.strokeStyle = colors[c2];
	ctx.arc(x,y,r2,(linedash*speed*40*(Math.PI/180)),2 * Math.PI+(((40*linedash*speed-20)*(Math.PI/180))));
	ctx.stroke();
}

function forquilla(x,y,x2, order)
{
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle = colors[3];
	ctx.moveTo(x+5,y);
	ctx.lineTo(x+8,y+8);
	ctx.lineTo(x2-8,y+8);
	ctx.lineTo(x2-5,y);
	ctx.moveTo(x+10, y+8);
	ctx.lineTo(x+10,y+8+(5*order));
	ctx.lineTo(30+(5*order),y+8+(5*order));
	ctx.lineTo(30+(5*order),y+8+(5*order)+(30*(5-order)));
	ctx.lineTo(50,y+5+8+(5*order)+(30*(5-order)));

	ctx.stroke();
	panel(50,y+(5*order)+(30*(5-order)), 100, 20, 5,0)

	
}


function panel(x,y,width,height,radius, fill, stroke)
{
	/*ctx.fillStyle = colors[c1];
	ctx.fillRect (x, y, w, h);
	ctx.fillStyle = colors[c2];
	ctx.fillRect (x+margin, y+margin, w-(margin*2), h-(margin*2));
*/
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


function legend()
{
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.lineWidth=4;
	ctx.setLineDash([0]);
	ctx.strokeRect (40, 680, 1400, 100);
	ctx.fillStyle = "rgb(60,60,200)";
	ctx.fillRect (40, 680, 1400, 100);


	ctx.font = "18px sans";
	ctx.fillStyle = "rgb(255,255,255)";
		ctx.fillText(textos[step],50,720)
}

function arrow(x1,y1,x2,y2)
{
	ctx.beginPath();
	ctx.lineWidth=6;
		
	ctx.strokeStyle = "rgb(255,255,255)";
	if(step==0) 
		{
			ctx.strokeStyle = "rgb(255,255,255)";
			ctx.setLineDash([8, 2]);
			ctx.lineDashOffset = -linedash;
		}
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}

function draw_step(x,y,w,h,text,border,thisstep)
{
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.lineWidth=border;
	ctx.setLineDash([0]);
	ctx.strokeRect (x,y,w,h);
	ctx.fillStyle = "rgb(60,60,200)";
	ctx.fillRect (x,y,w,h);
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.font = "18px sans";
	ctx.fillText(text, x+20, y+40);

	if(step==thisstep) 
	{
		ctx.save();
		
         // set canvas context to center
        ctx.translate(x+w-15, y+h-15);
        ctx.rotate(Math.PI / 180 * linedash*10); // 1/2 a degree
        draw_image("gear",-15,-15,30,30)

        
        ctx.restore();
	}
}

var dir=1;
var linedash = 0;
var step =0;
var knob_degree = 0;

setInterval(function() {
	if(dir==1)
	{
		//gruixor_quadre[step] +=1;
		knob_degree+=10;
	}
	else
	{
		//gruixor_quadre[step] -=1;
		knob_degree-=10;
	}
	console.log(knob_degree);
	if(knob_degree>90) dir=0;
	if(knob_degree<-90) dir=1;
	linedash+=0.55;
	draw();
}, 100)

setInterval(function() {
	gruixor_quadre = [3,3,3,3,3,3,3,3,3]
	step  +=1;
	step = step%5;
}, 5000);

var offset_console=0;

setInterval(function() {
	offset_console++;
	offset_console = offset_console%console_text.length;
}, 300);