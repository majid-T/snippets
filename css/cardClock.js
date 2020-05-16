const clockTick = () => {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  let hh = new Date().getHours();
  let mm = new Date().getMinutes();
  let ss = new Date().getSeconds();

  hh.toString().length === 1
    ? (hours.innerHTML = "0" + hh)
    : (hours.innerHTML = hh);

  mm.toString().length === 1
    ? (minutes.innerHTML = "0" + mm)
    : (minutes.innerHTML = mm);

  ss.toString().length === 1
    ? (seconds.innerHTML = "0" + ss)
    : (seconds.innerHTML = ss);
};

const intervalClockTick = setInterval(clockTick, 1000);
