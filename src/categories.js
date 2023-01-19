import { Link } from "react-router-dom";
import { getCategories } from "./api";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.categories);
    });
  }, []);

  return (
    <ul className="ulcategories">
        <li><Link to="/" href="#home">Home</Link></li>
      {categories.map((category) => {
        return (
          <li key={category.slug} className="Categorylinks">
            
              <Link to={`/category/${category.slug}`} href={category.slug}>{category.slug}</Link>
          
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
