import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/categories.service";
import { CategoriesContext } from "./CategoriesContext";

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllCategories() {
      try {
        const response = await fetchCategories();
        if (response.success) {
          setCategories(response.data.data);
        }
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAllCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ categories, isLoading, isError, error }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
