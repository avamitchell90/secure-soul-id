import { ethers } from "hardhat";

async function main() {
  console.log("Deploying SecureSoulID contract...");

  // Get the contract factory
  const SecureSoulID = await ethers.getContractFactory("SecureSoulID");

  // Deploy the contract with a verifier address (you can change this)
  const verifierAddress = "0x742d35Cc6635C0532925a3b8D2435f0a5B4d4D21"; // Replace with actual verifier address
  const secureSoulID = await SecureSoulID.deploy(verifierAddress);

  await secureSoulID.waitForDeployment();

  const contractAddress = await secureSoulID.getAddress();
  console.log("SecureSoulID deployed to:", contractAddress);

  // Verify deployment
  console.log("Verifying deployment...");
  const badgeCount = await secureSoulID.getBadgeCount();
  const requestCount = await secureSoulID.getRequestCount();
  
  console.log("Initial badge count:", badgeCount.toString());
  console.log("Initial request count:", requestCount.toString());
  
  console.log("Deployment completed successfully!");
  console.log("Contract Address:", contractAddress);
  console.log("Verifier Address:", verifierAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
