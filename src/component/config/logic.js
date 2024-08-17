import { array } from "yup";

export const isPresentInFavorites = (favorites, restaurant) => {
  if (!Array.isArray(favorites)) {
    console.error("Not an Array. Converting in array now...");
    favorites = Array.from(favorites);
    // or throw an error, depending on the desired behavior
  }
  for (let item of favorites) {
    if (restaurant.id === item.id) {
      return true;
    }
  }
  return false;
};

// export const isPresentInFavorites = (favorites, restaurant) => {
//   const favoritesArray = Array.isArray(favorites) ? favorites : [favorites];
//   for (let item of favoritesArray) {
//     if (restaurant.id === item.id) {
//       return true;
//     }
//   }
//   return false;
// };
