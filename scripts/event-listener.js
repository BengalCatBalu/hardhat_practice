const hre = require("hardhat");

async function main() {
  // Получаем подписчиков из настроенной сети
  const [deployer] = await hre.ethers.getSigners();
  const contractAddress = "0x328fE0F717471A965d29F43C0a7fb002668Bde33";
  const Homework = await hre.ethers.getContractFactory("Homework");
  const homework = await Homework.attach(contractAddress);

  // Создаем фильтры для событий
  const filterAdded = homework.filters.StructAdded();
  const filterRemoved = homework.filters.StructRemoved();

  // Слушатель события StructAdded
  homework.on(filterAdded, (key) => {
    console.log(`Struct was added`);
  });

  // Слушатель события StructRemoved
  homework.on(filterRemoved, (key) => {
    console.log(`Struct was removed`);
  });

  console.log("Listening for StructAdded and StructRemoved events...");

  // Здесь можно держать процесс открытым, чтобы прослушивать события
  // Например, с помощью бесконечного цикла:
  // while (true) {
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  // }

  // Или просто ждем некоторое время (например, 1 час)
  // Прежде чем скрипт автоматически завершится
  await new Promise(resolve => setTimeout(resolve, 3600000));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
