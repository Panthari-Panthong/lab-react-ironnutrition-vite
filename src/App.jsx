import { useState } from "react";
import "./App.css";

import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodsState, setfoodsState] = useState(foods);

  return (
    <div className="App">
      <div>
        {/* Iteration 4 | Add new food */}
        <AddFoodForm setfoodsState={setfoodsState} />
      </div>
      <div>
        <Search setfoodsState={setfoodsState} foodsState={foodsState} />
      </div>
      <div className="foodList-container">
        <h1>Food List</h1>
        {foodsState.map((food, index) => {
          return (
            <div className="foodList" key={index}>
              {/* Iteration 1 | Render a Simple List */}
              {/* <p>{food.name}</p>
            <img src={food.image} alt={food.name} style={{ width: "200px" }} /> */}
              <FoodBox
                food={food}
                setfoodsState={setfoodsState}
                foodsState={foodsState}
              />
            </div>
          );
        })}
        {/* Iteration 2 | Create the FoodBox component */}
        {/* <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      /> */}
      </div>
    </div>
  );
}
export default App;
