$(function(){
canvas=document.getElementById('MyCanvas');
context=canvas.getContext('2d');

for(i = 0; i < 17; i++){
    
    context.fillStyle='hsla(' + 360 + i * 360 / 17 + ', 50%, 45%, 1)';
    context.fillRect(0+i*10,0+i*10,450-i*2*10,300-i*2*10);
}

});