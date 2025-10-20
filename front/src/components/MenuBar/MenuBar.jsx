import "./MenuBar.css";

const MenuBar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="menu-bar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={category === selectedCategory ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuBar;
