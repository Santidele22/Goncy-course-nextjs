import fetchDatabase from "./app/fetchs/fetch-database";
import { Restaurant } from "./interfaces/restaurant";

const api = {
  list: async (): Promise<Restaurant[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
   const data = await fetchDatabase()
    // Convertimos cada línea en un objeto Restaurant, asegúrate de que los campos no posean `,`
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] =
        row.split(",");
      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });
    // Lo retornamos
    return restaurants;
  },
  fetch: async (restaurant_id: Restaurant["id"]): Promise<Restaurant> => {
    const data = await fetchDatabase()
    const restaurantData = data.find((row) => {
      const [id] = row.split(",");
      return restaurant_id === id;
    });

    if (!restaurantData) {
      throw new Error(`Restaurant with id ${restaurant_id} not found`);
    }
    const [id, name, description, address, score, ratings, image] =
      restaurantData.split(",");
      
      const restaurant = {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    return restaurant
  },
};
export default api;
