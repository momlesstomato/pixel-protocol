---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Subscription & Offers
- **Total packets**: 24

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 35 | `RENTABLE_FURNI_RENT_OR_BUYOUT_OFFER` | [`furniture.rentable_furni_offer`](./0035-furniture-rentable-furni-offer.md) | Deliver a rentable furniture rent or buyout offer | `session` | `nitro-1.6.6` |
| 44 | `LIMITED_OFFER_APPEARING_NEXT` | [`catalog.limited_offer_appearing_next`](./0044-catalog-limited-offer-appearing-next.md) | Announce the next limited offer appearance | `session` | `nitro-1.6.6` |
| 119 | `TARGET_OFFER` | [`offer.targeted`](./0119-offer-targeted.md) | Deliver a targeted offer to the player | `session` | `nitro-1.6.6` |
| 195 | `DIRECT_SMS_CLUB_BUY` | [`catalog.direct_sms_club_buy`](./0195-catalog-direct-sms-club-buy.md) | Deliver direct SMS Club purchase availability | `session` | `nitro-1.6.6` |
| 619 | `CLUB_GIFT_INFO` | [`catalog.club_gift_info`](./0619-catalog-club-gift-info.md) | Deliver Habbo Club member gift information | `session` | `nitro-1.6.6` |
| 659 | `CLUB_GIFT_SELECTED` | [`catalog.club_gift_selected`](./0659-catalog-club-gift-selected.md) | Confirm a Club gift was claimed | `session` | `nitro-1.6.6` |
| 761 | `IS_OFFER_GIFTABLE` | [`catalog.is_offer_giftable`](./0761-catalog-is-offer-giftable.md) | Indicate whether a catalog offer can be sent as a gift | `session` | `nitro-1.6.6` |
| 954 | `USER_SUBSCRIPTION` | [`user.subscription`](./0954-user-subscription.md) | Deliver Pixels Club subscription state | `session` | `nitro-1.6.6` |
| 1237 | `TARGET_OFFER_NOT_FOUND` | [`offer.targeted_not_found`](./1237-offer-targeted-not-found.md) | Indicate no targeted offer is available | `session` | `nitro-1.6.6` |
| 1452 | `BUILDERS_CLUB_EXPIRED` | [`catalog.builders_club_subscription`](./1452-catalog-builders-club-subscription.md) | Deliver Builders Club subscription status | `session` | `nitro-1.6.6` |
| 1533 | `BONUS_RARE_INFO` | [`subscription.bonus_rare_info`](./1533-subscription-bonus-rare-info.md) | Bonus rare info | `session` | `nitro-1.6.6` |
| 1889 | `SEASONAL_CALENDAR_OFFER` | [`calendar.seasonal_daily_offer`](./1889-calendar-seasonal-daily-offer.md) | Deliver the seasonal calendar daily offer | `session` | `nitro-1.6.6` |
| 2405 | `CLUB_OFFERS` | [`catalog.club_offers`](./2405-catalog-club-offers.md) | Deliver available Habbo Club membership offers | `session` | `nitro-1.6.6` |
| 2515 | `CATALOG_EARLIEST_EXPIRY` | [`catalog.earliest_expiry`](./2515-catalog-earliest-expiry.md) | Deliver the earliest catalog page expiration | `session` | `nitro-1.6.6` |
| 2531 | `CAMPAIGN_CALENDAR_DATA` | [`calendar.data`](./2531-calendar-data.md) | Deliver campaign calendar data | `session` | `nitro-1.6.6` |
| 2551 | `CAMPAIGN_CALENDAR_DOOR_OPENED` | [`calendar.door_opened`](./2551-calendar-door-opened.md) | Confirm a calendar door was opened and deliver the reward | `session` | `nitro-1.6.6` |
| 2668 | `CATALOG_PAGE_EXPIRATION` | [`catalog.page_expiration`](./2668-catalog-page-expiration.md) | Deliver a catalog page expiration timestamp | `session` | `nitro-1.6.6` |
| 3277 | `SCR_SEND_KICKBACK_INFO` | [`user.kickback_info`](./3277-user-kickback-info.md) | Deliver Habbo Club credit kickback and streak information | `session` | `nitro-1.6.6` |
| 3388 | `PRODUCT_OFFER` | [`catalog.product_offer`](./3388-catalog-product-offer.md) | Deliver details for a single product offer | `session` | `nitro-1.6.6` |
| 3575 | `NEW_USER_EXPERIENCE_GIFT_OFFER` | [`subscription.new_user_experience_gift_offer`](./3575-subscription-new-user-experience-gift-offer.md) | New user experience gift offer | `session` | `nitro-1.6.6` |
| 3639 | `NEW_USER_EXPERIENCE_NOT_COMPLETE` | [`subscription.new_user_experience_not_complete`](./3639-subscription-new-user-experience-not-complete.md) | New user experience not complete | `session` | `nitro-1.6.6` |
| 3828 | `BUILDERS_CLUB_FURNI_COUNT` | [`catalog.builders_club_furni_count`](./3828-catalog-builders-club-furni-count.md) | Return the current Builders Club furniture count | `session` | `nitro-1.6.6` |
| 3914 | `NOT_ENOUGH_BALANCE` | [`catalog.not_enough_balance`](./3914-catalog-not-enough-balance.md) | Indicate insufficient balance for a purchase | `session` | `nitro-1.6.6` |
| 3964 | `CLUB_EXTENDED_OFFER` | [`catalog.club_extend_offer`](./3964-catalog-club-extend-offer.md) | Deliver a Club membership extension offer | `session` | `nitro-1.6.6` |
