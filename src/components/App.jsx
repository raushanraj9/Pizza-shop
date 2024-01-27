import MainSection from "./MainSection";
import PizzaStageSection from "./PizzaStageSection";
import PlaceOrder from "./PlaceOrder";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="p-2">
        <h1 className="my-2 text-center font-bold">🍕 PizzaMint 🍕</h1>
        <PlaceOrder />
        <PizzaStageSection />
        <MainSection />
        <hr />
        <h1 className="my-2 text-center font-bold">
          Created with ❤️ by Raushan Raj
        </h1>
      </div>
    </Provider>
  );
}

export default App;
