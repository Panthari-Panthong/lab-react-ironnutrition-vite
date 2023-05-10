import { Divider, Input } from "antd";
import { useState } from "react";

const AddFoodForm = ({ setfoodsState }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setfoodsState((prevFoods) => [
      { name, image, calories, servings },
      ...prevFoods,
    ]);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <label>Image</label>
      <Input
        name="image"
        value={image}
        type="text"
        onChange={(event) => {
          setImage(event.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={calories}
        type="text"
        onChange={(event) => {
          setCalories(event.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={servings}
        type="text"
        onChange={(event) => {
          setServings(event.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
