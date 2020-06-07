const calender = () => {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  const setText = (id, val) => {
    console.log(id);
    if (val < 10) {
      val = "0" + val;
    }
    document.getElementById(id).innerHTML = val;
  };

  //setting calender values
  setText("calenderDay", day[d.getDay()]);
  setText("calenderDate", d.getDate());
  setText("calenderMonthYear", month[d.getMonth()] + "\n" + d.getFullYear());
};

window.onload = calender;
