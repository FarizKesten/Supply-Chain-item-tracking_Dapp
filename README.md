
# Library Used:
`Roles`:  Used by access-control contracts to easily add and remove roles 

`@truffle/hdwallet-provider`: to deploy the contracts into the test network
# UML
## Activity - Diagram

![Activity-Diagram](/docs/activity-diagram.png)

## Sequence-Diagram

![Sequence-Diagram](/docs/sequence-diagram.png)

## State-Diagram

![State-Diagram](/docs/state-diagram.png)

## Classes (Data Model)

![Classes-Diagram](/docs/class-diagramm.png)

# General informations
## Contract Details:
   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x3fd9226928f1477aa41b983bca48e540a63c62dd87a71bdb56d0f151822b3cca
   > Blocks: 1            Seconds: 4
   > contract address:    0x196D7cC1cDbA7eAe5eE866c6ee85983403f1B06C
   > account:             0x4055215E2696b68E4696f11449dD8A1c6cc7ad38
   > balance:             0.99520212
   > gas used:            239894
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00479788 ETH

Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0xb2251c9dc83bad84eff371b0b9e34d3f7fc90c2369b22236542bf8a491ef97e7
   > Blocks: 0            Seconds: 12
   > contract address:    0x0316F2518C4eEC8ca0d8540D8201FB91cbB104AA
   > account:             0x4055215E2696b68E4696f11449dD8A1c6cc7ad38
   > balance:             0.98799874
   > gas used:            314421
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00628842 ETH

Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x69ea021d0d164aff9ece6b6a9d86bac4fa8fc8e9a32bef81af9e922cc42189ee
   > Blocks: 1            Seconds: 20
   > contract address:    0x4b4D339F23c7408619a8dD758445D95660e86DA4
   > account:             0x4055215E2696b68E4696f11449dD8A1c6cc7ad38
   > balance:             0.98142464
   > gas used:            328705
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0065741 ETH

Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x4f1c6d22dedc2ab4007c4f26924f34a1b402fe4a3c413d623848c5a6a3666ed6
   > Blocks: 1            Seconds: 4
   > contract address:    0x596db345E70E3c85bd534c9dfA42bf324355473e
   > account:             0x4055215E2696b68E4696f11449dD8A1c6cc7ad38
   > balance:             0.97513574
   > gas used:            314445
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0062889 ETH

Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x529bc0b1f2d2eebc2c81d86f2e8f32a4d4f32b9bd5a788b2e80935a4da4d0cd8
   > Blocks: 2            Seconds: 8
   > contract address:    0x3FC44f633451203bc33B7C6b28b4B4aC5d589803
   > account:             0x4055215E2696b68E4696f11449dD8A1c6cc7ad38
   > balance:             0.96856164
   > gas used:            328705
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0065741 ETH

Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x3388d47e8db9dbf51b35f6d762467a81e0544893295ef57cf6af95b0c2ee30da
   > Blocks: 0            Seconds: 4
   > contract address:    0xbef6629E1B14d5594858a0B65B5BB461F3c1136e
   > account:             0x4055215E2696b68E4696f11449dD8A1c6cc7ad38
   > balance:             0.91686182
   > gas used:            2584991
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05169982 ETH
# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24. 

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
