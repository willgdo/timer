const setTimer = () => {
    const body = document.querySelector("body");
    const timer = document.querySelector(".timer");
    const counter = document.querySelector(".counter");
    const start = document.getElementById("start");
    const pause = document.getElementById("pause");
    const stop = document.getElementById("stop");
    let seconds = 0;
    let initTimer;
  
    const changeColor = () => {
      body.classList.add("bg-black");
      timer.classList.add("bg-white");
      counter.style.color = "black";
    };
  
    const count = (seconds) => {
      const data = new Date(seconds * 1000);
      return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
      });
    };
  
    const startTimer = () => {
      initTimer = setInterval(() => {
        seconds++;
        counter.innerHTML = count(seconds);
      }, 1000);
    };
  
    start.addEventListener("click", () => {
      clearInterval(initTimer);
      changeColor();
      startTimer();
      pause.classList.remove("hide-item");
      pause.classList.add("show-item");
      stop.classList.remove("hide-item");
      stop.classList.add("show-item");
      start.classList.remove("show-item");
      start.classList.add("hide-item");
    });
  
    pause.addEventListener("click", () => {
      clearInterval(initTimer);
      counter.style.color = "red";
      pause.classList.remove("show-item");
      pause.classList.add("hide-item");
      start.classList.remove("hide-item");
      start.classList.add("show-item");
    });
  
    stop.addEventListener("click", () => {
      clearInterval(initTimer);
      counter.innerHTML = "00:00:00";
      counter.style.color = "black";
      seconds = 0;
      pause.classList.remove("show-item");
      pause.classList.add("hide-item");
      stop.classList.remove("show-item");
      stop.classList.add("hide-item");
      start.classList.remove("hide-item");
      start.classList.add("show-item");
    });
  };
  
  setTimer();
  