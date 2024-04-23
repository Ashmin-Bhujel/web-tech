const myInfo = {
  firstName: "Ashmin",
  lastName: "Bhujel",
  age: 20,
  address: "Tathali, Bhaktapur",
};

for (key in myInfo) {
  console.log(`${key}: ${myInfo[key]}`);
}
