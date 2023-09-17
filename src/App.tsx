import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const PersonName = {
    first: "Ibrahim",
    last: "Gibran",
  };

  const nameList = [
    {
      first: "Ibrahim",
      last: "Gibran",
    },
    {
      first: "Odsan",
      last: "Berti",
    },
    {
      first: "Odil",
      last: "LiaAska",
    },
  ];
  return (
    <div className="App">
      <Greet name="Gibran" messageCount={10} isLoggendIn={false} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
