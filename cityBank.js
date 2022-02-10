const cardDistribution = (arr) => {
  //   console.log(arr);
  let newData = [];
  arr.map((data) => {
    const district = data.district.slice(0, 2).toUpperCase();
    const currentYear = data.currentYear.toString().slice(2, 4);
    const postNo = data.postNo.toString().slice(0, 2);
    const birthYear = data.birthYear.toString();
    const randomNumber = Math.floor(Math.random() * 10);
    const padStart = (num, size) => {
      return (Math.pow(10, size) + Math.floor(num)).toString().substring(1);
    };
    const padding = padStart(00000, 5) + randomNumber;
    cardNumber = district + currentYear + postNo + birthYear + padding;

    const priority = data.priority;

    if (parseInt(cardNumber.slice(14, 16)) % 2 === 0) {
      const gift = "R";
      const card = { cardNumber, gift, priority };
      // console.log([card, card]);
      newData.push(card);
    } else {
      const gift = "W";
      const card = { cardNumber, gift, priority };
      newData.push(card);
    }
  });

  // console.log(newData);

  const compareFunction = (firstData, secondData) => {
    return firstData.priority - secondData.priority;
  };

  newData.sort(compareFunction);

  console.log(newData);
};

cardDistribution([
  {
    name: "Mr. Rashed",
    birthYear: 1999,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 1200,
    priority: 2,
  },
  {
    name: "Mr. Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
]);
