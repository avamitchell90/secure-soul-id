import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("SecureSoulID", function () {
  async function deploySecureSoulIDFixture() {
    const [owner, verifier, user1, user2] = await ethers.getSigners();

    const SecureSoulID = await ethers.getContractFactory("SecureSoulID");
    const secureSoulID = await SecureSoulID.deploy(verifier.address);

    return { secureSoulID, owner, verifier, user1, user2 };
  }

  describe("Deployment", function () {
    it("Should set the right owner and verifier", async function () {
      const { secureSoulID, owner, verifier } = await loadFixture(deploySecureSoulIDFixture);

      expect(await secureSoulID.owner()).to.equal(owner.address);
      // Note: We need to add a getter for verifier in the contract
    });

    it("Should initialize with zero badge count", async function () {
      const { secureSoulID } = await loadFixture(deploySecureSoulIDFixture);

      expect(await secureSoulID.getBadgeCount()).to.equal(0);
    });
  });

  describe("Badge Management", function () {
    it("Should allow adding new badge types", async function () {
      const { secureSoulID, owner } = await loadFixture(deploySecureSoulIDFixture);

      await secureSoulID.addBadgeType("Custom");
      // Note: We need to add a getter to check if badge type exists
    });

    it("Should allow setting verifier", async function () {
      const { secureSoulID, owner, user1 } = await loadFixture(deploySecureSoulIDFixture);

      await secureSoulID.setVerifier(user1.address);
      // Note: We need to add a getter for verifier in the contract
    });
  });

  describe("Access Control", function () {
    it("Should only allow owner to add badge types", async function () {
      const { secureSoulID, user1 } = await loadFixture(deploySecureSoulIDFixture);

      await expect(
        secureSoulID.connect(user1).addBadgeType("Custom")
      ).to.be.revertedWith("Only owner can add badge types");
    });

    it("Should only allow owner to set verifier", async function () {
      const { secureSoulID, user1, user2 } = await loadFixture(deploySecureSoulIDFixture);

      await expect(
        secureSoulID.connect(user1).setVerifier(user2.address)
      ).to.be.revertedWith("Only owner can set verifier");
    });
  });
});
