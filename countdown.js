// count down with react js let timerElemenmt = document.getElementById('timer') 
<div id="timer">

</div>

let time = 120

function countDown(){
	setInterval(()=>{
  time = time - 1 
  timerElemenmt.innerText = Math.floor(+time/60) + ":" +time%60   
  console.log(time)
  },1000)
}

countDown()