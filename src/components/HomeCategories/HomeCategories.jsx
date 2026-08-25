import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchCategories } from "../../services/categories.service";
import Loading from "../Loading/Loading";

export default function HomeCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllCategories() {
      try {
        const response = await fetchCategories();
        if (response.success) {
          setIsLoading(false);
          setCategories(response.data.data);
        }
      } catch (error) {
        setIsLoading(true);
        console.log(error);
      }
    }

    getAllCategories();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link
              to={"/categories"}
              className="text-primary-600 hover:text-primary-700 flex items-center gap-3 transition-colors duration-200"
            >
              <span>View All Categories</span>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />{" "}
            </Link>
          </div>

          <div className="grid gap-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {categories.map((category) => {
              return (
                <Link
                  to={`/category/${categories._id}`}
                  key={category._id}
                  className="card flex cursor-pointer flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="size-14 rounded-full object-contain"
                  />
                  <h3>{category.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
