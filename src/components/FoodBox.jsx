import { Card, Col, Button } from "antd";

const FoodBox = ({ food, setfoodsState, foodsState }) => {
  const totalCalories = food.calories * food.servings;
  const deleteFood = () => {
    const findFood = foodsState.filter((foodEle) => foodEle.name !== food.name);
    setfoodsState(findFood);
  };

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood()}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
