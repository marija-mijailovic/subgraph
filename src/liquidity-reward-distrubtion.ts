import {
  Claimed as ClaimedEvent,
  EpochAdded as EpochAddedEvent,
  EpochRemoved as EpochRemovedEvent,
  OwnershipTransferCanceled as OwnershipTransferCanceledEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/LiquidityRewardDistrubtion/LiquidityRewardDistrubtion"
import {
  Claimed,
  EpochAdded,
  EpochRemoved,
  OwnershipTransferCanceled,
  OwnershipTransferRequested,
  OwnershipTransferred
} from "../generated/schema"

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimant = event.params.claimant
  entity.week = event.params.week
  entity.balance = event.params.balance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEpochAdded(event: EpochAddedEvent): void {
  let entity = new EpochAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Epoch = event.params.Epoch
  entity.merkleRoot = event.params.merkleRoot
  entity._ipfs = event.params._ipfs

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEpochRemoved(event: EpochRemovedEvent): void {
  let entity = new EpochRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.epoch = event.params.epoch

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferCanceled(
  event: OwnershipTransferCanceledEvent
): void {
  let entity = new OwnershipTransferCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
