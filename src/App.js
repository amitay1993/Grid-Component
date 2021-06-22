import "./App.css";
import GridComponent from "./Components/GridComponent";

function App() {
  const moneyComponent = (props) => {
    return <span> {props.text + "💰"} </span>;
  };

  const columnDefinitions = {
    age: null,
    club: {
      label: "team",
    },
    name: null,
    national: null,

    price: {
      component: moneyComponent,
    },
    rowsPerPage: 3,
    style: {
      thead: {
        color: null,
        show: true,
      },
      striped: true,
    },
  };

  const rows = [
    {
      age: 27,
      club: "Barcelona",
      createdAt: "2014-07-06T08:13:06.949Z",
      name: "Lionel Messi",
      national: "Argentina",
      objectId: "njnpkIM7TZ",
      price: 80.0,
    },
    {
      age: 29,
      club: "Real Madrid",
      createdAt: "2014-07-06T08:13:39.962Z",
      name: "Cristiano Ronaldo",
      national: "Portugal",
      objectId: "bEgzxzo2yC",
      price: 130.0,
    },
    {
      age: 34,
      club: "Liverpool",
      createdAt: "2014-07-06T08:13:59.600Z",
      name: "Steven Gerrard",
      national: "England",
      objectId: "R6W7SBl0xn",
      price: 73.0,
    },
    {
      age: 22,
      club: "Barcelona",
      createdAt: "2014-07-06T08:14:38.109Z",
      name: "Neymar",
      national: "Brazil",
      objectId: "uoomjQBD7e",
      price: 97.0,
    },
    {
      age: 25,
      club: "Borussia Dortmund",
      createdAt: "2014-07-06T08:14:52.565Z",
      name: "Marco Reus",
      national: "Germany",
      objectId: "0r5n8j63cj",
      price: 22.0,
    },
    {
      age: 26,
      club: "Real Madrid",
      createdAt: "2014-07-06T08:15:55.082Z",
      name: "Karim Benzema",
      national: "France",
      objectId: "HJDacRcdu8",
      price: 30.0,
    },
    {
      age: 30,
      club: "Manchester United",
      createdAt: "2014-07-06T08:17:21.231Z",
      name: "Robin Van Persie",
      national: "Holland",
      objectId: "XjxLjTFkd7",
      price: 80.0,
    },
    {
      age: 28,
      club: "Manchester City",
      createdAt: "2014-07-06T08:17:47.905Z",
      name: "David Silva",
      national: "Spain",
      objectId: "RCmIbI1laP",
      price: 61.0,
    },

    {
      age: 35,
      club: "Juventus",
      createdAt: "2014-07-06T08:18:55.589Z",
      name: "Andrea Pirlo",
      national: "Italy",
      objectId: "PinRWZ2qmw",
      price: 51.0,
    },
  ];

  return <GridComponent value={rows} columnDefinitions={columnDefinitions} />;
}

export default App;
