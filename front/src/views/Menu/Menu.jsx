import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import MenuCard from "../../components/MenuCard/MenuCard";
import { mockMenu } from "../../helpers/mockMenu";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const categories = [...new Set(mockMenu.map((item) => item.category))];
  const filteredMenu = mockMenu.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <div className="menu-page">
      <div>
        <h2>Our Menu</h2>
        <h3>Authentic Japanese cuisine</h3>
      </div>

      <MenuBar
        categories={categories}
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
