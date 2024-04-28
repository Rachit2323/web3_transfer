const { ethers } = require("hardhat");
const hre = require("hardhat");
// contract -0x80743Ae8d5E31c4c38EC513bF03D88221A07daF2
//0x80743Ae8d5E31c4c38EC513bF03D88221A07daF2

async function main() {
  const [deployer] = await ethers.getSigners();
//   const balance = await deployer.getBalance();
  const PayPal = await hre.ethers.getContractFactory("paypal");
  const paypal = await PayPal.deploy();

  await paypal.deployed();
  console.log('address',paypal.address);

//   const data = {
//     address: marketplace.address,
//     abi: JSON.parse(marketplace.interface.format('json'))
//   }

  // This writes the ABI and address to the mktplace.json
//   fs.writeFileSync('./src/Marketplace.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
