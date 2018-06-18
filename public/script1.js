
function checkemail(){
	var mail=document.getElementById('usr').value;
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var result= re.test(mail);

if(result==false)
	{
		document.getElementById('data1').style.display='block';
		document.getElementById('data2').style.display='none';
	}
else
	{
		document.getElementById('data2').style.display='block';
		document.getElementById('data1').style.display='none';
	}
}

function showdata(){
	document.getElementById('data').style.display='block';

}
function nextfield(){
		
	document.getElementById('usr').value='';
	document.getElementById('nme').value='';
	document.getElementById('cmnt').value='';
}



document.getElementById('usr').addEventListener('keypress',function(event){
	if(event.keyCode==13|| event.key=='ENTER'){
		event.preventDefault();
		}
});


