import "./App.css";
import Providers from "./providers/Providers";
import RoutesTree from "./routes/Routes";

const App = () => {
  return (
    <Providers>
      <RoutesTree />
    </Providers>
  );
};

export default App;
