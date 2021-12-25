var date = new Date();
var y =date.getFullYear();
var m = date.getMonth();
var d = date.getDate();

var theDate = new Date(y,m,1);
var theDay = theDate.getDay();
var last = [31,28,31,30,31,30,31,31,30,31,30,31];
if (y%4 && y%100!=0 || y%400===0) {
    lastDate = last[1] = 29;
    console.log(calendar);
}
var lastDate = last[m];
var row = Math.ceil((theDay+lastDate)/7);
var calendar = "";

var dNum=1;
for (var i=1; i<=row; i++) {
    calendar += "<tr>";
    for(var k=1; k<=7; k++){
        if(i==1 && k<=theDay || dNum>lastDate){
            calendar += "<td> &nbsp; </td>";
        } else {
            var tdClass = "";
            if(dNum ==d)
            tdClass = "today";
            else
            tdClass = "";

            if(k==1)
            tdClass += " sun";

                calendar += "<td class="+tdClass+ "'>"
                + "<strong class='date'>" + dNum + "</strong>"
                + "<ul class='schedule RW'>"
                + "<li class='closed'> <a href='#none' class='eModal' > 10:00~11:00</a> </li>"
                + "<li class='open'> <a href='#none' class='eModal' > 10:00~11:00</a> </li>"
                + "<li class='closed'> <a href='#none' class='eModal' > 10:00~11:00</a> </li>"
                + "</ul>"
                + "</td>";
                dNum++;
        }
    }
    calendar += "</tr>";
}

