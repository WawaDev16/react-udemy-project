import { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

import Addmenu from "../AddMenu";

const AvailableMeals = () => {
  const [addMenu, setAddMenu] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const fetchMeals = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-usehttp-394fc-default-rtdb.firebaseio.com/meal.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong !");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  });

  const confirmAddMenuHandler = async (meal) => {
    if (selectedMeal) {
      await fetch(
        "https://react-usehttp-394fc-default-rtdb.firebaseio.com/meal.json",
        {
          method: "PATCH",
          body: JSON.stringify({ [selectedMeal.id]: meal }),
        }
      );
    } else {
      await fetch(
        "https://react-usehttp-394fc-default-rtdb.firebaseio.com/meal.json",
        {
          method: "POST",
          body: JSON.stringify(meal),
        }
      );
    }
  };

  if (isLoading) {
    return (
      <section className={classes.MealsLading}>
        <p>Loading ...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const addMenuHandler = () => {
    setAddMenu(true);
  };

  const editMenuHandler = (menuId) => {
    console.log("menuId", menuId);
    const selectedMeals = meals.find((meal) => meal.id === menuId);
    console.log("selectedMeals", selectedMeals);
    setSelectedMeal(selectedMeals);
    setAddMenu(true);
  };

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      onEdit={() => editMenuHandler(meal.id)}
    />
  ));

  const closeAddMenuHandler = () => {
    setAddMenu(false);
    setSelectedMeal(null);
    fetchMeals();
  };

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>

        <button onClick={addMenuHandler}>Add menu</button>
        {addMenu && (
          <Addmenu
            onConfirm={confirmAddMenuHandler}
            onClose={closeAddMenuHandler}
            meal={selectedMeal}
          />
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
