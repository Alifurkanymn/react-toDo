import "./App.scss";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import ToDo from "./Components/ToDo";
import NextSevenDays from "./Components/NextSevenDays/NextSevenDays";
import Cleaning from "./Components/Cleaning";
import MyGoals from "./Components/MyGoals/MyGoals";
import {
  BrowserRouter,
  BrowserRouter as Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__flex">
        <SideBar />
        
      <BrowserRouter>
        <Switch>
          <Route exact path="/" > <ToDo /> </Route>
          <Route path="/next7days"> <NextSevenDays /></Route>
          <Route path="/cleaning"> <Cleaning /> </Route>
          <Route path="/MyGoals" > <MyGoals /> </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
