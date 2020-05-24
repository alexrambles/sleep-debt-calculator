function getSleepHours(day) {
  switch(day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 7;
      break;
    case 'Wednesday':
      return 5;
      break;
    case 'Thursday':
      return 6;
      break;
    case 'Friday':
      return 7;
      break;
    case 'Saturday':
      return 8;
      break;
    case 'Sunday':
      return 9;
      break;
    default:
      return 'Please enter a valid day of the week.';
      break;
  }
}

function getActualSleepHours() {
  let result = getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');
  return result;
}

function getIdealSleepHours() {
  const idealHours=8;
  return idealHours*7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Congrats! You got the perfect amount of sleep!');
  }
  if (actualSleepHours > idealSleepHours) {
    let result = actualSleepHours - idealSleepHours;
    console.log(`You got more sleep than you needed. You got ${result} too many hours of sleep.`);
  }
  if (actualSleepHours < idealSleepHours) {
    let result = idealSleepHours-actualSleepHours;
    console.log(`You need to get more rest. ${result} hours more.`)
  }
}

calculateSleepDebt()
