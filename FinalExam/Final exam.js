function buttonA()
		{
			x = document.getElementById("box1").value;
			y = document.getElementById("box2").value;
			var z = x / ( y * y / 10000 );
            document.getElementById("box3").value = parseFloat(z);
            if(z<18.5){alert("你體重過輕 多吃點");}
            else if(z<18.5){alert("你的BMI屬於正常範圍");}
            else if(z>=18.5&&z<24){alert("你過重了");}
            else if(z>=24&&z<27){alert("你有點輕度肥胖 注意飲食");}
            else if(z>=27&&z<30){alert("你中度肥胖了 油炸物不能再吃了");}
            else{alert("你重度肥胖 可能導致許多身體疾病");}
        }
function buttonB()
		{
			document.getElementById("box1").value = "";
			document.getElementById("box2").value = "";
			document.getElementById("box3").value = "";
        }
function buttonC()
		{
			x = document.getElementById("box4").value;
			y = document.getElementById("box5").value;
            var z = parseFloat(x) + parseFloat(y);
            document.getElementById("box6").value = parseFloat(z);
		}
function buttonD()
		{
			document.getElementById("box4").value = "";
			document.getElementById("box5").value = "";
			document.getElementById("box6").value = "";
        }


function buttonE()
		{
			x = document.getElementById("box7").value;
			y = document.getElementById("box8").value;
            var z = parseFloat(x) - parseFloat(y);
            document.getElementById("box9").value = parseFloat(z);
		}
function buttonF()
		{
			document.getElementById("box7").value = "";
			document.getElementById("box8").value = "";
			document.getElementById("box9").value = "";
        }


function buttonG()
		{
			x = document.getElementById("box10").value;
			y = document.getElementById("box11").value;
            var z = parseFloat(x) * parseFloat(y);
            document.getElementById("box12").value = parseFloat(z);
		}
function buttonH()
		{
			document.getElementById("box10").value = "";
			document.getElementById("box11").value = "";
			document.getElementById("box12").value = "";
        }


function buttonI()
		{
			x = document.getElementById("box13").value;
			y = document.getElementById("box14").value;
            var z = parseFloat(x) / parseFloat(y);
            document.getElementById("box15").value = parseFloat(z);
		}
function buttonJ()
		{
			document.getElementById("box13").value = "";
			document.getElementById("box14").value = "";
			document.getElementById("box15").value = "";
		}