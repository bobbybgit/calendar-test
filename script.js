const currentDate = new Date();
let pageDate = currentDate;

const yearTitle = document.querySelector('#year');
const monthTitle = document.querySelector('#month');

const dayDivs = document.querySelectorAll('.day');  

function monthToString(month){
    switch (month){
        case 0: return "January"
        case 1: return "February"
        case 2: return "March"
        case 3: return "April"
        case 4: return "May"
        case 5: return "June"
        case 6: return "July"
        case 7: return "August"
        case 8: return "September"
        case 9: return "October"
        case 10: return "November"
        case 11: return "December"
    }
}

function setHeaders(showYear, showMonth){
    yearTitle.innerText = showYear;
    monthTitle.innerText = monthToString(showMonth);
}

function getDaysInMonth(date){
    date.setMonth(date.getMonth()+1);
    date.setDate(0);
    return date.getDate();
}

function setDayDivs(settingDate){
    let daysInMonth = getDaysInMonth(settingDate);
    settingDate.setDate(1);
    let incFirstDay = daysInMonth + settingDate.getDay();
    let proxFirstDay = 0-settingDate.getDay();
    for (let i=0;i < dayDivs.length;i++){
        if (proxFirstDay < 0 || proxFirstDay >= daysInMonth){
            dayDivs[i].innerText = "";
            dayDivs[i].style['background-color'] = "#FFFFFF";
        }else{
            dayDivs[i].innerText = i+1;
            dayDivs[i].style['background-color'] = "#FFD685";
        }
        proxFirstDay++
    }
}

setHeaders(pageDate.getFullYear(), pageDate.getMonth());
setDayDivs(pageDate);


