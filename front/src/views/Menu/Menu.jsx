import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import MenuCard from "../../components/MenuCard/MenuCard";
import { mockMenu } from "../../helpers/mockMenu";
import axios from "axios";
import API_URL from "../../config/api";

const Menu = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/menu`);
        setMenuItems(data);
      } catch (err) {
        console.error(err);
        setError("Error loading menu");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const categoryOrder = [
    "Appetizers",
    "Ramen & Udon",
    "Sushi & Sashimi",
    "Main Courses",
    "Dessert",
  ];

  const categories = [...new Set(menuItems.map((item) => item.category))];

  const sortedCategories = categoryOrder.filter((cat) =>
    categories.includes(cat)
  );

  const filteredMenu = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="menu-page">
      <div>
        <h2>Our Menu</h2>
        <h3>Authentic Japanese cuisine</h3>
      </div>

      <MenuBar
        categories={sortedCategories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <div className="menu-container">
        <h2>{selectedCategory}</h2>
        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
