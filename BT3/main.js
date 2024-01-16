function checkday(){
    var day = document.getElementById("today").value;
    var demo
    
    
    if (day>=1 && day <=7)
    {
        if (day ==1)
        {
            demo = "Sunday";
            document.getElementById("kq").style.color = "blue"
        }
        else if(day==2){
           demo= "Monday";
           document.getElementById("kq").style.color = "red"
        }
        else if(day==3){
            demo = "Tueday";
            document.getElementById("kq").style.color = "green"
        }
        else if(day==4){
            demo = "Wednesday";
            document.getElementById("kq").style.color = "orange"
        }
        else if(day==5){
           demo = "Thursday";
           document.getElementById("kq").style.color = "white"
        }
        else if(day==6){
            demo = "Friday";
            document.getElementById("kq").style.color = "brown"
        }
        else if(day==7){
            demo = "Satuday";
            document.getElementById("kq").style.color = "pink"
        }
    }else {
        demo = "Bạn vui lòng nhập lại";
    }
    
    document.getElementById("kq").innerHTML = demo;
    }