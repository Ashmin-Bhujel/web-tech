const comparisionDate = new Date("2015 Feb 12");
const currentDate = new Date();

if (comparisionDate.getTime() > currentDate.getTime()) {
  console.log(`The given ${currentDate} is before 2015 Feb 12`);
} else if (comparisionDate.getTime() === currentDate.getTime()) {
  console.log(`The given ${currentDate} is equal to 2015 Feb 12`);
} else {
  console.log(`The given ${currentDate} is after 2015 Feb 12`);
}
