import "./App.css";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div>
      <Status status="loading" />
      <Heading>Children Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Ibrahim El Gibran</Heading>
      </Oscar>
      <Greet name="Ibrahim" isLoggendIn={false} />
    </div>
  );
}

export default App;
