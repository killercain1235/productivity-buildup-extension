window.onload=function(){
var bgpage=chrome.extension.getBackgroundPage();
document.getElementById('btn1').addEventListener('click',setMyAlarm);
var almOptions=document.getElementById('alarmOptions');
document.getElementById('btn2').addEventListener('click',cancelMyAlarm);
document.getElementById('btn3').addEventListener('click',snoozeMyAlarm);
document.getElementById('btn4').addEventListener('click',stopMyAlarm);
function setMyAlarm(){
	console.log("alarm set");
	var userInput=document.getElementById('alarmTime').valueAsNumber;
	bgpage.setAlarm(userInput,almOptions);
	console.log("hurray");
	//button.innerText = 'Cancel Alarm';
	//button.setAttribute('onclick', 'cancelAlarm(this);');
}
function cancelMyAlarm(){
	bgpage.cancelAlarm();
}
function snoozeMyAlarm(){
	bgpage.snooze(almOptions);
}
function stopMyAlarm(){
	bgpage.stopAlarm(almOptions);
}


}
