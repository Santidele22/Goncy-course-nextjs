import api from "@/api";
import RestaurantCard from "@/components/card";
import { Restaurant } from "@/interfaces/restaurant";
export default async function Home() {
  const restaurants:Restaurant[] = await api.list();
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
         {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} children={restaurant} />
      ))}
    </section>
  )
}