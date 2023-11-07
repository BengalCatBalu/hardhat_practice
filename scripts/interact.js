const hre = require("hardhat");

async function main() {
    // Получаем контракт, предполагая, что он уже развернут
    const [deployer] = await hre.ethers.getSigners();
    const contractAddress = '0x328fE0F717471A965d29F43C0a7fb002668Bde33';
    const Homework = await hre.ethers.getContractFactory("Homework");
    const homework = Homework.attach(contractAddress);

    // Вызов функций контракта
    const addTx = await homework.addCustomStruct(1, "Alice", true, deployer.address);
    await addTx.wait();
    console.log("CustomStruct added");

    const removeTx = await homework.removeCustomStruct(1);
    await removeTx.wait();
    console.log("CustomStruct removed");
    
    // Для чтения слотов хранилища можно использовать следующий метод
    const storageValue = await hre.ethers.provider.getStorage(contractAddress, 0);
    console.log(`Value at storage slot 1: ${storageValue}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
