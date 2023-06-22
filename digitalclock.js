function digclc()
{
    var date=new Date();
    var hh=date.getHours();
    var dt=date.getDate()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    var am_pm="AM"
    if (hh>=12)
    {
        am_pm="PM";
        if (hh>12)
        {
            hh-=12;
        }
    }
    if (hh==0)
    {
        hh=12;
    }
    if (mo==0)
    {
        mo="Jan"
    }
    else if (mo==1)
    {
        mo="Feb"
    }
    else if (mo==2)
    {
        mo="Mar"
    }
    else if (mo==3)
    {
        mo="Apr"
    }
    else if (mo==4)
    {
        mo="May"
    }
    else if (mo==5)
    {
        mo="Jun"
    }
    else if (mo==6)
    {
        mo="Jul"
    }
    else if (mo==7)
    {
        mo="Aug"
    }
    else if (mo==8)
    {
        mo="Sept"
    }
    else if (mo==9)
    {
        mo="Oct"
    }
    else if (mo==10)
    {
        mo="Nov"
    }
    else if (mo==11)
    {
        mo="Dec"
    }
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="url(./sun.jpg)"
        break;

        case 1: day="Monday"
        document.body.style.backgroundImage="url(./mon.jpg)"
        break;

        case 2: day="Tuesday"
        document.body.style.backgroundImage="url(./tue.jpg)"
        break;

        case 3: day="Wednesday"
        document.body.style.backgroundImage="url(./wed.jpg)"
        break;

        case 4: day="Thurday"
        document.body.style.backgroundImage="url(./thu.jpg)"
        break;

        case 5: day="Friday"
        document.body.style.backgroundImage="url(./fri.jpg)"
        break;

        case 6: day="Saturday"
        document.body.style.backgroundImage="url(./sat.jpg)"
        break;
    }
    document.getElementById("date").innerHTML=`${dt}/${mo}/${yy}`;
    document.getElementById("time").innerHTML=`${hh}:${mm}:${am_pm}`;
    document.getElementById("day").innerHTML=day;
    document.getElementById("sec").innerHTML=ss;
    setTimeout(digclc,1000);
}
digclc();