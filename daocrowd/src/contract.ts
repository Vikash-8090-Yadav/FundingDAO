import { campaignCreated as campaignCreatedEvent } from "../generated/Contract/Contract"
import { campaignCreated } from "../generated/schema"

export function handlecampaignCreated(event: campaignCreatedEvent): void {
  let entity = new campaignCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.title = event.params.title
  entity.requiredAmount = event.params.requiredAmount
  entity.owner = event.params.owner
  entity.campaignAddress = event.params.campaignAddress
  entity.imgURI = event.params.imgURI
  entity.timestamp = event.params.timestamp
  // entity.category = event.params.category
  entity.category = event.params.category.toString();


  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
