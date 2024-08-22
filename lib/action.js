"use server";

import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    email: formData.get("email"),
  };

  console.log("meal", meal);
  await saveMeal(meal);
  redirect("/meals");
};
