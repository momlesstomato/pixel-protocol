---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Subscription & Offers
- **Total packets**: 26

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 271 | `GET_SECONDS_UNTIL` | [`subscription.seconds_until`](./0271-subscription-seconds-until.md) | Get seconds until | `session` | `nitro-1.6.6` |
| 410 | `GET_LIMITED_OFFER_APPEARING_NEXT` | [`catalog.get_limited_offer_next`](./0410-catalog-get-limited-offer-next.md) | Request the next limited offer appearance time | `session` | `nitro-1.6.6` |
| 487 | `GET_CLUB_GIFT_INFO` | [`catalog.get_club_gift_info`](./0487-catalog-get-club-gift-info.md) | Request Habbo Club member gift information | `session` | `nitro-1.6.6` |
| 596 | `GET_NEXT_TARGETED_OFFER` | [`offer.get_next_targeted`](./0596-offer-get-next-targeted.md) | Request the next available targeted offer | `session` | `nitro-1.6.6` |
| 603 | `GET_HABBO_BASIC_MEMBERSHIP_EXTEND_OFFER` | [`catalog.get_basic_extend_offer`](./0603-catalog-get-basic-extend-offer.md) | Request the basic membership extension offer | `session` | `nitro-1.6.6` |
| 742 | `GET_CATALOG_PAGE_EXPIRATION` | [`catalog.get_page_expiration`](./0742-catalog-get-page-expiration.md) | Request expiration time for a specific catalog page | `session` | `nitro-1.6.6` |
| 801 | `GET_DIRECT_CLUB_BUY_AVAILABLE` | [`catalog.get_direct_club_buy`](./0801-catalog-get-direct-club-buy.md) | Check whether direct SMS Club purchase is available | `session` | `nitro-1.6.6` |
| 869 | `SCR_GET_KICKBACK_INFO` | [`user.get_kickback_info`](./0869-user-get-kickback-info.md) | Request Habbo Club kickback (reward) information | `session` | `nitro-1.6.6` |
| 957 | `GET_BONUS_RARE_INFO` | [`subscription.bonus_rare_info`](./0957-subscription-bonus-rare-info.md) | Get bonus rare info | `session` | `nitro-1.6.6` |
| 1697 | `START_CAMPAIGN` | [`subscription.start_campaign`](./1697-subscription-start-campaign.md) | Start campaign | `session` | `nitro-1.6.6` |
| 1826 | `PURCHASE_TARGETED_OFFER` | [`offer.purchase_targeted`](./1826-offer-purchase-targeted.md) | Purchase the currently displayed targeted offer | `session` | `nitro-1.6.6` |
| 2041 | `SET_TARGETTED_OFFER_STATE` | [`offer.set_targeted_state`](./2041-offer-set-targeted-state.md) | Update the state of a targeted offer for the current user | `session` | `nitro-1.6.6` |
| 2257 | `OPEN_CAMPAIGN_CALENDAR_DOOR` | [`calendar.open_door`](./2257-calendar-open-door.md) | Open a campaign calendar door for the current day | `session` | `nitro-1.6.6` |
| 2276 | `CATALOG_SELECT_VIP_GIFT` | [`catalog.select_club_gift`](./2276-catalog-select-club-gift.md) | Select a Club gift from the available rewards | `session` | `nitro-1.6.6` |
| 2462 | `GET_HABBO_CLUB_EXTEND_OFFER` | [`catalog.get_hc_extend_offer`](./2462-catalog-get-hc-extend-offer.md) | Request the Habbo Club extension offer | `session` | `nitro-1.6.6` |
| 2487 | `GET_TARGETED_OFFER` | [`offer.get_targeted`](./2487-offer-get-targeted.md) | Request the current targeted offer | `session` | `nitro-1.6.6` |
| 2529 | `BUILDERS_CLUB_QUERY_FURNI_COUNT` | [`catalog.builders_club_query_furni_count`](./2529-catalog-builders-club-query-furni-count.md) | Request the current Builders Club furniture placement count | `session` | `nitro-1.6.6` |
| 2594 | `GET_PRODUCT_OFFER` | [`catalog.get_product_offer`](./2594-catalog-get-product-offer.md) | Request details for a specific product offer | `session` | `nitro-1.6.6` |
| 2735 | `PURCHASE_BASIC_MEMBERSHIP_EXTENSION` | [`catalog.purchase_basic_extension`](./2735-catalog-purchase-basic-extension.md) | Purchase a basic Club membership extension | `session` | `nitro-1.6.6` |
| 3135 | `GET_CATALOG_PAGE_WITH_EARLIEST_EXP` | [`catalog.get_earliest_expiry`](./3135-catalog-get-earliest-expiry.md) | Request the earliest expiring catalog page timestamp | `session` | `nitro-1.6.6` |
| 3166 | `USER_SUBSCRIPTION` | [`user.get_subscription`](./3166-user-get-subscription.md) | Request subscription status for a named product | `session` | `nitro-1.6.6` |
| 3257 | `GET_SEASONAL_CALENDAR_DAILY_OFFER` | [`calendar.get_seasonal_daily_offer`](./3257-calendar-get-seasonal-daily-offer.md) | Request the current seasonal calendar daily offer | `session` | `nitro-1.6.6` |
| 3285 | `GET_CLUB_OFFERS` | [`catalog.get_club_offers`](./3285-catalog-get-club-offers.md) | Request available Habbo Club membership offers | `session` | `nitro-1.6.6` |
| 3407 | `PURCHASE_VIP_MEMBERSHIP_EXTENSION` | [`catalog.purchase_vip_extension`](./3407-catalog-purchase-vip-extension.md) | Purchase a VIP Club membership extension | `session` | `nitro-1.6.6` |
| 3483 | `SHOP_TARGETED_OFFER_VIEWED` | [`offer.targeted_viewed`](./3483-offer-targeted-viewed.md) | Notify that a targeted offer was viewed in the shop | `session` | `nitro-1.6.6` |
| 3889 | `OPEN_CAMPAIGN_CALENDAR_DOOR_STAFF` | [`calendar.open_door_staff`](./3889-calendar-open-door-staff.md) | Force-open a campaign calendar door as a staff member | `session` | `nitro-1.6.6` |
