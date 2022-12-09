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
        <li><a class="active" href="#home"><Link to="/" >Home</Link></a></li>
      {categories.map((category) => {
        return (
          <li key={category.slug} className="Categorylinks">
            <a href={category.slug}>
              <Link to={`/category/${category.slug}`}>{category.slug}</Link>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
