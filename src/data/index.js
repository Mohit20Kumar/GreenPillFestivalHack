
export const cardsData = [
  {
    title: "Meals Served",
    change: 24,
    amount: 42056,
  },
  {
    title: "Partnered Restaurants",
    change: 14,
    amount: 199,
  },
  {
    title: "Volunteers",
    change: 18,
    amount: 1000,
  },
  {
    title: "States",
    change: 3,
    amount: 69,
  },
];

export const ordersData = [
  {
    name: "Bengaluru",
    type: "Karnataka",
    change: 20,
  },
  {
    name: "Pune",
    type: "Maharashtra",
    change: 15,
  },
  {
    name: "Kumta",
    type: "Karnataka",
    change: 10
  },
  {
    name: "Mysore",
    type: "Karnataka",
    change: 10,
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};



