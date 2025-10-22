import { AppDataSource } from "../config/data-source";
import { RestaurantTable } from "../entities/Table";

const seedTables = async () => {
  await AppDataSource.initialize();

  const tableRepository = AppDataSource.getRepository(RestaurantTable);

  const existing = await tableRepository.count();
  if (existing > 0) {
    console.log("Tables already seeded.");
    process.exit(0);
  }

  const tables = [
    ...Array.from({ length: 5 }, (_, i) => ({
      name: `Big table ${i + 1}`,
      capacity: 10,
    })),

    ...Array.from({ length: 5 }, (_, i) => ({
      name: `Medium table ${i + 1}`,
      capacity: 5,
    })),

    ...Array.from({ length: 5 }, (_, i) => ({
      name: `Small table ${i + 1}`,
      capacity: 2,
    })),
  ];

  await tableRepository.save(tables);
  console.log(" Tables inserted.");
  process.exit(0);
};

seedTables().catch((err) => {
  console.error("Error inserting tables", err);
  process.exit(1);
});
