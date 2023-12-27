import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Claimed,
  EpochAdded,
  EpochRemoved,
  OwnershipTransferCanceled,
  OwnershipTransferRequested,
  OwnershipTransferred
} from "../generated/LiquidityRewardDistrubtion/LiquidityRewardDistrubtion"

export function createClaimedEvent(
  claimant: Address,
  week: BigInt,
  balance: BigInt
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("claimant", ethereum.Value.fromAddress(claimant))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("week", ethereum.Value.fromUnsignedBigInt(week))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "balance",
      ethereum.Value.fromUnsignedBigInt(balance)
    )
  )

  return claimedEvent
}

export function createEpochAddedEvent(
  Epoch: BigInt,
  merkleRoot: Bytes,
  _ipfs: string
): EpochAdded {
  let epochAddedEvent = changetype<EpochAdded>(newMockEvent())

  epochAddedEvent.parameters = new Array()

  epochAddedEvent.parameters.push(
    new ethereum.EventParam("Epoch", ethereum.Value.fromUnsignedBigInt(Epoch))
  )
  epochAddedEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )
  epochAddedEvent.parameters.push(
    new ethereum.EventParam("_ipfs", ethereum.Value.fromString(_ipfs))
  )

  return epochAddedEvent
}

export function createEpochRemovedEvent(epoch: BigInt): EpochRemoved {
  let epochRemovedEvent = changetype<EpochRemoved>(newMockEvent())

  epochRemovedEvent.parameters = new Array()

  epochRemovedEvent.parameters.push(
    new ethereum.EventParam("epoch", ethereum.Value.fromUnsignedBigInt(epoch))
  )

  return epochRemovedEvent
}

export function createOwnershipTransferCanceledEvent(
  from: Address,
  to: Address
): OwnershipTransferCanceled {
  let ownershipTransferCanceledEvent = changetype<OwnershipTransferCanceled>(
    newMockEvent()
  )

  ownershipTransferCanceledEvent.parameters = new Array()

  ownershipTransferCanceledEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferCanceledEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferCanceledEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}
