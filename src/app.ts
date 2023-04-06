window.addEventListener('load', () => {
  app();
});

const app = () => {
  let clock__display: HTMLHeadingElement =
    document.querySelector('.clock__display')!;
  let day: HTMLHeadingElement = document.querySelector('.day')!;
  let month: HTMLHeadingElement = document.querySelector('.month')!;
  let year: HTMLHeadingElement = document.querySelector('.year')!;

  const color = () => {
    let a: number = Math.floor(Math.random() * 255);
    let b: number = Math.floor(Math.random() * 255);
    let c: number = Math.floor(Math.random() * 255);

    let colorPlate = {
      color_a: `rgba(${a}, ${b}, ${c})`,
      color_b: `rgba(${a}, ${b}, ${c})`,
      color_c: `rgba(${a}, ${b}, ${c})`,
    };

    return colorPlate;
  };

  const clock = () => {
    let hour: number | string = new Date().getHours();
    let minute: number | string = new Date().getMinutes();
    let second: number | string = new Date().getSeconds();

    // Check is the time is AM/PM
    let isAM = hour > 12 ? 'PM' : 'AM';

    // Check the actual time is
    if (hour == 0) {
      hour = 1;
    } else {
      hour > 12 ? (hour -= 12) : hour;
    }

    // Check all single digit and add before a ZERO
    hour < 10 ? (hour = '0' + hour) : hour;
    minute < 10 ? (minute = '0' + minute) : minute;
    second < 10 ? (second = '0' + second) : second;

    const clock: string = `
    <span style="color: ${color().color_a}">${hour}</span> : 
    <span style="color: ${color().color_a}">${minute}</span> : 
    <span style="color: ${
      color().color_a
    }">${second}</span> <span style="color:${
      !isAM ? '#ff0b65' : '#0bff38'
    }">${isAM}</span>`;

    if (clock__display) clock__display.innerHTML = clock;
  };

  setInterval(() => {
    clock();
  }, 1000);
  clock();

  // some additional features...
  let dayCount: number | string = new Date().getUTCDay();
  var dayName: string = '';

  let monthCount: number | string = parseInt(
    new Date().getUTCMonth().toString()
  );

  let clockDate = new Date().getDate();

  var monthName: string = '';

  let yearCount: any = new Date().getFullYear();

  if (dayCount == 5) {
    dayName = 'Friday';
  } else if (dayCount == 6) {
    dayName = 'Saturday';
  } else if (dayCount == 0) {
    dayName = 'Sunday';
  } else if (dayCount == 1) {
    dayName = 'Monday';
  } else if (dayCount == 2) {
    dayName = 'Tuesday';
  } else if (dayCount == 3) {
    dayName = 'Wednesday';
  } else if (dayCount == 4) {
    dayName = 'Thursday';
  } else {
    dayName = 'Something Wrong!';
  }

  if (monthCount == 0) {
    monthName = 'January';
  } else if (monthCount == 1) {
    monthName = 'February';
  } else if (monthCount == 2) {
    monthName = 'March';
  } else if (monthCount == 3) {
    monthName = 'April';
  } else if (monthCount == 4) {
    monthName = 'May';
  } else if (monthCount == 5) {
    monthName = 'June';
  } else if (monthCount == 6) {
    monthName = 'July';
  } else if (monthCount == 7) {
    monthName = 'August';
  } else if (monthCount == 8) {
    monthName = 'September';
  } else if (monthCount == 9) {
    monthName = 'October';
  } else if (monthCount == 10) {
    monthName = 'November';
  } else if (monthCount == 11) {
    monthName = 'December';
  } else {
    monthName = 'Empty!!';
  }
  if (month) month.textContent = `${clockDate + ' ' + monthName}`;
  if (day) day.textContent = dayName;
  if (year) year.textContent = yearCount;
};
