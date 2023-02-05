export const createClock = () => {
    const date = new Date(); 
    document.getElementById('time').innerText = `${updateTime(date.getHours())} : ${updateTime(date.getMinutes())} : ${updateTime(date.getSeconds())}` 
    setTimeout(createClock, 1000); 
  }
  function updateTime(t) { 
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }
  