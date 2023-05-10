import { useState } from "react";
import "./App.css";

import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodsState, setfoodsState] = useState(foods);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">
      <div>
        {/* Iteration 4 | Add new food */}
        <AddFoodForm setfoodsState={setfoodsState} />
      </div>
      <div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <div className="foodList-container">
        <h1>Food List</h1>
        <div className="foodList">
          {foodsState
            .filter((food) => {
              if (food.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return food;
              }
            })
            .map((food, index) => {
              return (
                <div key={index}>
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
        </div>
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
