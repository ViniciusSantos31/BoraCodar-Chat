import Chat from "./components/Chat";
import { GlobalStyles, App as StApp } from "./styles";

function App() {
  return (
    <StApp className="App">
      <Chat />
      <GlobalStyles />
    </StApp>
  );
}

export default App;
