var canvasWidth = 1400;
var canvasHeight = 1963;
var renderCanvas1 = function() {
	var canvas = document.getElementById('invitation-card');
	var ctx = canvas.getContext('2d');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	var background = new Image();
	background.src = biicore.webroot + '/invitation/templates/'+invitationInfo.templateID+'/bg1.png';
	background.onload = function(){
		canvas.width = this.width;
		canvas.height = this.height;
		ctx.drawImage(this, 0,0,this.width, this.height);

		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#f4ebd0';
		
		canvas.style.letterSpacing = '10px';
		ctx.fillStyle = '#f4ebd0';
		ctx.font = "bold 48px 'comfortaaregular', cursive";
		ctx.fillText(invitationInfo.event_date_dot, canvas.width/2, 1490);
		ctx.save();
		
		ctx.fillStyle = '#fff';
		canvas.style.letterSpacing = '0';
		ctx.font = "45px 'Jura', cursive";
		ctx.fillText('THE BIRTHDAY PARTY OF', canvas.width/2, 1700);
		ctx.save();

		canvas.style.letterSpacing = '0';
		ctx = canvas.getContext('2d');
		ctx.font = "95px 'dancing_scriptregular', cursive";
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillText(invitationInfo.groom_name_short, canvas.width/2, 1820);
		ctx.save();
	};
}
var renderCanvas2 = function() {
	var canvas = document.getElementById('invitation-card-2');
	var ctx = canvas.getContext('2d');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	var background = new Image();
	background.src = biicore.webroot + '/invitation/templates/'+invitationInfo.templateID+'/bg2.png';
	background.onload = function(){
		canvas.width = this.width;
		canvas.height = this.height;
		ctx.drawImage(this, 0,0,this.width, this.height);

		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#647775';

		canvas.style.letterSpacing = '10px';
		ctx.font = "100 60px 'patrick_handregular', cursive";
		ctx.fillText('Birthday Invitation', canvas.width/2, 270);
		ctx.save();

		canvas.style.letterSpacing = '6px';
		ctx = canvas.getContext('2d');
		ctx.font = "35px 'Jura', cursive";
		ctx.fillText('Date of Birth', canvas.width/2, 340);
		ctx.save();

		canvas.style.letterSpacing = '0';
		ctx.fillStyle = '#BB9B83';
		ctx = canvas.getContext('2d');
		ctx.font = "95px 'dancing_scriptregular', cursive";
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillText(invitationInfo.groom_name_short, canvas.width/2, 640);
		ctx.save();

		ctx.fillStyle = '#647775';
		canvas.style.letterSpacing = '2px';
		ctx.font = "45px 'Jura', cursive";
		ctx.fillText('THÂN MỜI BẠN', canvas.width/2, 800);
		ctx.save();

		ctx.font = "bold 60px 'comfortaaregular', cursive";
		ctx.fillText(invitationInfo.guest_name, canvas.width/2, 910);
		ctx.save();

		const canvasTxt0 = window.canvasTxt.default;
		canvasTxt0.font = "'Jura', cursive";
		canvasTxt0.fontSize = 45;
		canvasTxt0.fontWeight = '200';
		canvasTxt0.vAlign = 'top';
		canvasTxt0.align = 'center';
		canvasTxt0.lineHeight = 55;
		let canvasTxt0Width = canvas.width-600;
		canvasTxt0.drawText(ctx, 'Đến dự buổi tiệc sinh nhật của mình tại:', canvas.width/2 - canvasTxt0Width/2, 980, canvasTxt0Width, 200);
		ctx.save();

		const canvasTxt = window.canvasTxt.default;
		canvasTxt.font = "'comfortaaregular', cursive";
		canvasTxt.fontSize = 40;
		canvasTxt.fontWeight = 'bold';
		canvasTxt.vAlign = 'top';
		canvasTxt.align = 'center';
		canvasTxt.lineHeight = 60;
		canvasTxt.drawText(ctx, invitationInfo.event_address, canvas.width/2 - canvasTxt0Width/2, 1190, canvasTxt0Width, 200);
		ctx.save();

		ctx.fillStyle = '#BB9B83';
		ctx.font = "45px 'comfortaaregular', cursive";
		ctx.fillText(('Vào lúc ' + invitationInfo.event_time).toUpperCase(), canvas.width/2, 1410);
		ctx.save();

		ctx.font = "45px 'comfortaaregular', cursive";
		ctx.fillText(invitationInfo.event_date.toUpperCase(), canvas.width/2, 1490);
		ctx.save();
	};
}

var renderCanvas = function() {
	renderCanvas1();
	renderCanvas2();
}
window.addEventListener('load', function(){
	WebFont.load({
		custom: {
			families: ['dancing_scriptregular', 'comfortaaregular', 'patrick_handregular', 'UVN Buc Thu']
		},
		google: {families: ['Jura', 'Great Vibes', 'Tourney:100']},
		active: function(){
			renderCanvas();
			let renderCount = 0;
			const intID = setInterval(function(){
				renderCanvas();
				if(renderCount >= 3) clearInterval(intID);
				renderCount++;
			},100);
		}
	});
});