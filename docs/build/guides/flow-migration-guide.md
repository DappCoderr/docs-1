---
title: How to migrate your smart contracts to Cadence 1.0
sidebar_label: Migrate smart contracts to Cadence 1.0
description: Guide to migrating your cadence 1.0 compatible smart contracts
sidebar_position: 3
---

:::info
Encountering problems along the way? Visit the `migrate` section in the Flow CLI documentation for additional tools designed to help your migration to Cadence 1.0.
:::

This guide aims to simplify the migration process to Cadence 1.0, making it accessible and straightforward for developers at all skill levels.

## What is Cadence 1.0?

Cadence 1.0 is the latest version of the Cadence smart contract programming language. It introduces several new features and improvements over the previous versions. (INCLUDE MORE)

## Staging a contract

In order to migrate your updated smart contract to Cadence 1.0, it's crucial to stage it on the Testnet network. This preliminary step not only verifies the contract's compatibility and syntactical correctness but also ensures a seamless transition to the new environment.

```bash
flow migrate stage-contract HelloWorld --network=testnet
```

Ensure that HelloWorld accurately reflects the name of your contract as specified in your flow.json configuration file.

### Confirm the contract has been staged

To confirm that your contract is ready for migration and has been successfully staged, execute the following command:

```bash
flow migrate is-staged HelloWorld --network=testnet
```

A response of true indicates that your contract has been approved by the Flow Blockchain Testnet network and is ready for the migration process.
