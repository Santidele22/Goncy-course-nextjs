import Link from "next/link";
import { Restaurant } from "@/interfaces/restaurant";

export default  function RestaurantCard({ children }: { children: Restaurant }) {
  return (
          <article key={children.id}>
            <img
              alt={children.name}
              className="mb-3 h-[300px] w-full object-cover"
              src={children.image}
            />
            <h2 className="inline-flex gap-2 text-lg font-bold">
            <Link href={`/${children.id}`} key={children.id} prefetch={false}>
                {children.name}
              </Link>
              <small className="inline-flex gap-1">
                <span>⭐</span>
                <span>{children.score}</span>
                <span className="font-normal opacity-75">({children.ratings})</span>
              </small>
            </h2>
            <p className="opacity-90">{children.description}</p>
           
          </article>
  );
}