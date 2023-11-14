import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { campaignCreated } from "../generated/schema"
import { campaignCreated as campaignCreatedEvent } from "../generated/Contract/Contract"
import { handlecampaignCreated } from "../src/contract"
import { createcampaignCreatedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let title = "Example string value"
    let requiredAmount = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let campaignAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let imgURI = "Example string value"
    let timestamp = BigInt.fromI32(234)
    let category = "Example string value"
    let newcampaignCreatedEvent = createcampaignCreatedEvent(
      title,
      requiredAmount,
      owner,
      campaignAddress,
      imgURI,
      timestamp,
      category
    )
    handlecampaignCreated(newcampaignCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("campaignCreated created and stored", () => {
    assert.entityCount("campaignCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "campaignCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "campaignCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requiredAmount",
      "234"
    )
    assert.fieldEquals(
      "campaignCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "campaignCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "campaignAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "campaignCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "imgURI",
      "Example string value"
    )
    assert.fieldEquals(
      "campaignCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )
    assert.fieldEquals(
      "campaignCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "category",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
