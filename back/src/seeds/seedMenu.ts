import "reflect-metadata";
import { AppDataSource } from "../config/data-source";
import { MenuItem } from "../entities/MenuItems";

const seedMenu = async () => {
  await AppDataSource.initialize();

  const menuRepository = AppDataSource.getRepository(MenuItem);

  const menuData = [
    {
      category: "Ramen & Udon",
      items: [
        {
          name: "Tonkotsu Ramen",
          description: "Rich pork broth with noodles.",
          price: "$13.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981937/chickenRamen_odrcm6.png",
        },
        {
          name: "Shoyu Ramen",
          description: "Soy sauce broth with pork slices.",
          price: "$12.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Miso Ramen",
          description: "Savory miso broth and corn toppings.",
          price: "$12.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Spicy Udon",
          description: "Udon noodles in spicy broth.",
          price: "$11.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Tempura Udon",
          description: "Udon soup with crispy tempura.",
          price: "$13.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Chicken Udon",
          description: "Udon noodles with grilled chicken.",
          price: "$12.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Vegetable Ramen",
          description: "Light broth with seasonal veggies.",
          price: "$11.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Curry Udon",
          description: "Thick curry soup with udon noodles.",
          price: "$13.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Cold Udon",
          description: "Chilled noodles with dipping sauce.",
          price: "$10.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Seafood Ramen",
          description: "Mixed seafood in creamy broth.",
          price: "$14.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
      ],
    },
    {
      category: "Sushi & Sashimi",
      items: [
        {
          name: "Salmon Nigiri",
          description: "Fresh salmon over rice.",
          price: "$7.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981938/salmonNiguiri_bm9f7h.png",
        },
        {
          name: "Tuna Sashimi",
          description: "Thinly sliced fresh tuna.",
          price: "$8.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Eel Roll",
          description: "Eel, cucumber, and sweet sauce.",
          price: "$9.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981937/eellenRoll_yrjpc9.png",
        },
        {
          name: "Dragon Roll",
          description: "Tempura roll topped with avocado.",
          price: "$11.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761226158/DragonRoll_v7at1n.png",
        },
        {
          name: "Rainbow Roll",
          description: "Colorful mix of fish on roll.",
          price: "$12.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "California Roll",
          description: "Crab, avocado, and cucumber.",
          price: "$8.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Shrimp Nigiri",
          description: "Cooked shrimp over rice.",
          price: "$7.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Spicy Tuna Roll",
          description: "Tuna mixed with spicy mayo.",
          price: "$9.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Salmon Sashimi",
          description: "Delicate slices of raw salmon.",
          price: "$8.50",
          imgUrl: "",
        },
        {
          name: "Veggie Roll",
          description: "Avocado, cucumber, and carrot roll.",
          price: "$7.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Mochi",
          description: "Sweet rice cake filled with jelly.",
          price: "$5.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981937/mochi_x7pzhb.png",
        },
        {
          name: "Matcha Cheesecake",
          description: "Green tea flavored cheesecake.",
          price: "$6.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761227951/matcha_qjjsmu.png",
        },
        {
          name: "Dorayaki",
          description: "Red bean pancake sandwich.",
          price: "$4.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761004035/dorayaki_mlzh8y.png",
        },
        {
          name: "Pudding",
          description: "Japanese style pudding.",
          price: "$6.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981937/puddin_hgxptc.png",
        },
        {
          name: "Dango",
          description: "Japanese dumpling made from glutinous rice",
          price: "$5.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761004355/dango_ia90hw.png",
        },
        {
          name: "Matcha Parfait",
          description: "Layered dessert with green tea.",
          price: "$6.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Kakigori",
          description: "Ice saves with sweet syrup on top.",
          price: "$4.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761004480/Screenshot_2025-10-20_205403_qkfgu5.png",
        },
        {
          name: "Miso Brownie",
          description: "Chocolate brownie with miso twist.",
          price: "$5.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Coconut Jelly",
          description: "Light and refreshing jelly dessert.",
          price: "$4.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761226158/coconutJelly_ytvdv9.png",
        },
        {
          name: "Honey Castella",
          description: "Soft Japanese sponge cake.",
          price: "$5.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Teriyaki Chicken",
          description: "Grilled chicken with teriyaki glaze.",
          price: "$14.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981937/chickenTeriyaki_qcdskj.png",
        },
        {
          name: "Beef Donburi",
          description: "Rice bowl with sweet beef slices.",
          price: "$13.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Katsu Curry",
          description: "Crispy pork with curry sauce.",
          price: "$14.50",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Grilled Salmon",
          description: "Fresh salmon with soy glaze.",
          price: "$16.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Tofu Steak",
          description: "Seared tofu with ginger sauce.",
          price: "$12.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Unagi Don",
          description: "Grilled eel on steamed rice.",
          price: "$16.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981939/unagiDon_y7lspo.png",
        },
        {
          name: "Chicken Katsu",
          description: "Breaded fried chicken cutlet.",
          price: "$13.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Vegetable Tempura",
          description: "Crispy fried vegetables with sauce.",
          price: "$11.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Beef Teppanyaki",
          description: "Seared beef with garlic sauce.",
          price: "$17.00",
          imgUrl: "https://cloudinary.com/your_image_here",
        },
        {
          name: "Shrimp Fried Rice",
          description: "Wok-fried rice with shrimp.",
          price: "$12.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761227808/shrimpRice_uq4c0b.png",
        },
      ],
    },
    {
      category: "Appetizers",
      items: [
        {
          name: "Edamame",
          description: "Steamed soybeans with salt.",
          price: "$5.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761227629/edaname_wlb0db.png",
        },
        {
          name: "Gyoza",
          description: "Pan-fried pork dumplings.",
          price: "$6.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981938/gyozas_fxbvvg.png",
        },
        {
          name: "Agedashi Tofu",
          description: "Fried tofu in soy broth.",
          price: "$6.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981936/agedashoTofu_odsmfn.png",
        },
        {
          name: "Chicken Yakitori",
          description: "Grilled chicken skewers.",
          price: "$7.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761227424/chickenYakitori_t2wfui.png",
        },
        {
          name: "Spring Rolls",
          description: "Crispy rolls with veggies.",
          price: "$6.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761227241/springRolls_biuqk0.png",
        },
        {
          name: "Seaweed Salad",
          description: "Marinated seaweed with sesame.",
          price: "$5.50",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761226657/seaweedSalad_xxppzf.png",
        },
        {
          name: "Takoyaki",
          description: "Octopus balls with mayo sauce.",
          price: "$7.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761226261/takoyaki_rbc1cs.png",
        },
        {
          name: "Shrimp Tempura",
          description: "Crispy fried shrimp pieces.",
          price: "$8.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981939/tunaSashimi_mv4pmk.png",
        },
        {
          name: "Tuna Tataki",
          description: "Seared tuna with ponzu.",
          price: "$9.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1761226403/tunaTataki_bypy5h.png",
        },
        {
          name: "Vegetable Gyoza",
          description: "Pan-fried veggie dumplings.",
          price: "$6.00",
          imgUrl:
            "https://res.cloudinary.com/dcbqh9s8x/image/upload/v1760981938/gyozas_fxbvvg.png",
        },
      ],
    },
  ];

  const flattenedMenu = menuData.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
    }))
  );

  await menuRepository.save(flattenedMenu);

  console.log("✅ Menu seeded successfully!");
  process.exit(0);
};

seedMenu().catch((err) => {
  console.error("Error seeding menu:", err);
  process.exit(1);
});
