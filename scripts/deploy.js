



const hre = require("hardhat");
//0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding  =  await CrowdFunding.deploy();

  await crowdFunding.deployed();
  console.log(
    `crowdFunding Deployed to ${crowdFunding.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*const hre = require("hardhat");
//0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const governmentFund = await hre.ethers.deployContract("GovernmentFund")
  await governmentFund.waitForDeployment();

  console.log(
    `Deployed to ${governmentFund.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

*/