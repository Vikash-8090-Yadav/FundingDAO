import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { campaignCreated } from "../generated/Contract/Contract"

export function createcampaignCreatedEvent(
  title: string,
  requiredAmount: BigInt,
  owner: Address,
  campaignAddress: Address,
  imgURI: string,
  timestamp: BigInt,
  category: string
): campaignCreated {
  let campaignCreatedEvent = changetype<campaignCreated>(newMockEvent())

  campaignCreatedEvent.parameters = new Array()

  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "requiredAmount",
      ethereum.Value.fromUnsignedBigInt(requiredAmount)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignAddress",
      ethereum.Value.fromAddress(campaignAddress)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("imgURI", ethereum.Value.fromString(imgURI))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )

  return campaignCreatedEvent
}
