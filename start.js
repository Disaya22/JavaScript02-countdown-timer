( ()=> {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function setElemetnInnerText(id, text){
        const element = document.getElementById(id);
        element.innerText = text;
    }
    function CoundtDown(){
        const now = new Date().getTime()
        const newYear = new Date('December 31, 2023 23:59:59').getTime();
        const unixTimeLeft = newYear - now;

        // const daysElem = document.getElementById('days');
        // daysElem.innerText = Math.floor(unixTimeLeft/DAY);
        setElemetnInnerText('days', Math.floor(unixTimeLeft/DAY));

        // const hoursElem = document.getElementById('hours');
        // hoursElem.innerText = Math.floor(unixTimeLeft % DAY / HOUR);
        setElemetnInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));

        setElemetnInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));
        setElemetnInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));
    } 
    
    function run(){
        CoundtDown();
        setInterval(CoundtDown,SECOND);
    }
    
    run();
})();;
