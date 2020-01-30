const clock = document.querySelector('.clock');

const dates = document.querySelector('.dates');

const tick = () => {

    const now = new Date();

    // const h = now.getHours();
    const h = dateFns.format(now, 'h');

    // const m = now.getMinutes();
    const m = dateFns.format(now, 'mm');

    // const s = now.getSeconds();
    const s = dateFns.format(now, 'ss');

    const amPm = dateFns.format(now, 'A');

    const html =
    `
    <p>${h}</p> <span>:</span>
    <p>${m}</p> <span>:</span>
    <p>${s}</p> <span> </span>
    <p>${amPm}</p>
    `;
    
    clock.innerHTML = html;


    //display date
    const day = dateFns.format(now, 'dddd');
    const date = dateFns.format(now, 'Do');
    const month = dateFns.format(now, 'MMMM');
    const year = dateFns.format(now, 'YYYY');

    // const year = dateFns.format(now, 'dddd | do MMMM YYYY');


    const htmlDate = 
    `
    <p><span>${day}</span> | ${date} ${month} ${year}</p>
    `;
    
    dates.innerHTML = htmlDate;
};

setInterval(tick, 1000);
