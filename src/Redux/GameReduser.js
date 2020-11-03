const ADD_COUNT = "ADD_COUNT";

let initialState = {
  moneyData: [
    { id: 12, money: "₴ 1 000 000" },
    { id: 11, money: "₴ 500 000" },
    { id: 10, money: "₴ 250 000" },
    { id: 9, money: "₴ 125 000" },
    { id: 8, money: "₴ 64 000" },
    { id: 7, money: "₴ 32 000" },
    { id: 6, money: "₴ 16 000" },
    { id: 5, money: "₴ 8 000" },
    { id: 4, money: "₴ 4 000" },
    { id: 3, money: "₴ 2 000" },
    { id: 2, money: "₴ 1 000" },
    { id: 1, money: "₴ 500" },
  ],
  questionAnswer: [
    {
      id: 1,
      quest:
        "What do government bodies do to obtain information about the inhabitants of the country?",
      answers: [
        { ans2: "Banding", ans1: "A", status: false },
        { ans2: "Roll call", ans1: "B", status: false },
        { ans2: "Census", ans1: "C", status: true },
        { ans2: "Stocktaking", ans1: "D", status: false },
      ],
    },
    {
      id: 2,
      quest:
        'According to a popular phrase, something that is easy to accomplish is said to be a "piece of" what?',
      answers: [
        { ans2: "Pizza", ans1: "A", status: false },
        { ans2: "Candy", ans1: "B", status: false },
        { ans2: "Fudge", ans1: "C", status: false },
        { ans2: "Cake", ans1: "D", status: true },
      ],
    },
    {
      id: 3,
      quest:
        'Mickey Mouse"s dog shares its name with what celestial body in Earth"s solar system?',
      answers: [
        { ans2: "Jupiter", ans1: "A", status: false },
        { ans2: "Saturn", ans1: "B", status: false },
        { ans2: "Pluto", ans1: "C", status: true },
        { ans2: "Betelgeuse", ans1: "D", status: false },
      ],
    },
    {
      id: 4,
      quest:
        "Someone who is speaking frankly is said to be 'laying it on the' what?",
      answers: [
        { ans2: "Operating table", ans1: "A", status: false },
        { ans2: "Ironing board", ans1: "B", status: false },
        { ans2: "Bed", ans1: "C", status: false },
        { ans2: "Line", ans1: "D", status: true },
      ],
    },
    {
      id: 5,
      quest:
        "Something that is stopped before it has a chance to develop is said to be 'nipped in the' what?",
      answers: [
        { ans2: "Bud", ans1: "A", status: true },
        { ans2: "Pal", ans1: "B", status: false },
        { ans2: "Homie", ans1: "C", status: false },
        { ans2: "Amigo", ans1: "D", status: false },
      ],
    },
    {
      id: 6,
      quest:
        "Which of these terms is a common nickname for a minor league baseball team?",
      answers: [
        { ans2: "Ranch", ans1: "A", status: false },
        { ans2: "Farm", ans1: "B", status: true },
        { ans2: "Village", ans1: "C", status: false },
        { ans2: "Cabin", ans1: "D", status: false },
      ],
    },
    {
      id: 7,
      quest:
        "According to a popular phrase, something that impresses you is said to 'knock your' what off?",
      answers: [
        { ans2: "Shirt", ans1: "A", status: false },
        { ans2: "Socks", ans1: "B", status: true },
        { ans2: "Toupee", ans1: "C", status: false },
        { ans2: "Eyeglasses", ans1: "D", status: false },
      ],
    },
    {
      id: 8,
      quest:
        'Someone making a lot of trouble is commonly said to be "raising" what?',
      answers: [
        { ans2: "Adam", ans1: "A", status: false },
        { ans2: "Abel", ans1: "B", status: false },
        { ans2: "Arizona", ans1: "C", status: false },
        { ans2: "Cain", ans1: "D", status: true },
      ],
    },
    {
      id: 9,
      quest: "Which of these valuable commodities is stored in Fort Knox?",
      answers: [
        { ans2: "Diamonds", ans1: "A", status: false },
        { ans2: "Grain", ans1: "B", status: false },
        { ans2: "Crude oil", ans1: "C", status: false },
        { ans2: "Gold", ans1: "D", status: true },
      ],
    },
    {
      id: 10,
      quest: "What design pattern is featured on a traditional Scottish kilt?",
      answers: [
        { ans2: "Polka dots", ans1: "A", status: false },
        { ans2: "Plaid", ans1: "B", status: true },
        { ans2: "Flowers", ans1: "C", status: false },
        { ans2: "Pinstripes", ans1: "D", status: false },
      ],
    },
    {
      id: 11,
      quest:
        'What culinary figure hosted the popular TV cooking show "The French Chef"?',
      answers: [
        { ans2: "Paul Prudhomme", ans1: "A", status: false },
        { ans2: "Emeril Lagasse", ans1: "B", status: false },
        { ans2: "Julia Child", ans1: "C", status: true },
        { ans2: "Justin Wilson", ans1: "D", status: false },
      ],
    },
    {
      id: 12,
      quest:
        "From 1973 until 1993, Tom Bradley was the mayor of what major U.S. city?",
      answers: [
        { ans2: "San Francisco", ans1: "A", status: false },
        { ans2: "Philadelphia", ans1: "B", status: false },
        { ans2: "Chicago", ans1: "C", status: false },
        { ans2: "Los Angeles", ans1: "D", status: true },
      ],
    },
    {
      id: 13,
      quest:
        'Two or more people facing identical situations are commonly said to be "in the same" what?',
      answers: [
        { ans2: "Can", ans1: "A", status: false },
        { ans2: "Bowl", ans1: "B", status: true },
        { ans2: "Boat", ans1: "C", status: false },
        { ans2: "Frying pan", ans1: "D", status: false },
      ],
    },
    {
      id: 14,
      quest:
        'Which of the following snack foods comes packaged with a "toy surprise"?',
      answers: [
        { ans2: "Fiddle Faddle", ans1: "A", status: false },
        { ans2: "Cracker Jack", ans1: "B", status: true },
        { ans2: "Munchos", ans1: "C", status: false },
        { ans2: "U-bet chocolate syrup", ans1: "D", status: false },
      ],
    },
    {
      id: 15,
      quest:
        'Someone who is flexible is often said to be able to "roll with the" what?',
      answers: [
        { ans2: "Wheels", ans1: "A", status: false },
        { ans2: "Punches", ans1: "B", status: true },
        { ans2: "Dice", ans1: "C", status: false },
        { ans2: "Truckers", ans1: "D", status: false },
      ],
    },
  ],
  count: 0,
};
const gameReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: action.count };
    default:
      return state;
  }
};

export const addCountCreator = (count) => ({ type: ADD_COUNT, count });

export default gameReduser;
