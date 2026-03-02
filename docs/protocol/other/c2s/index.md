---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Other
- **Total packets**: 7

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 790 | `TRY_PHONE_NUMBER` | [`other.try_phone_number`](./0790-other-try-phone-number.md) | Try phone number | `session` | `nitro-1.6.6` |
| 1379 | `SET_PHONE_NUMBER_VERIFICATION_STATUS` | [`other.set_phone_number_verification_status`](./1379-other-set-phone-number-verification-status.md) | Set phone number verification status | `session` | `nitro-1.6.6` |
| 1849 | `GET_FAQ_TEXT` | [`other.get_faq_text`](./1849-other-get-faq-text.md) | Get faq text | `session` | `nitro-1.6.6` |
| 2031 | `SEARCH_FAQS` | [`other.search_faqs`](./2031-other-search-faqs.md) | Search faqs | `session` | `nitro-1.6.6` |
| 2721 | `VERIFY_CODE` | [`other.verify_code`](./2721-other-verify-code.md) | Verify code | `session` | `nitro-1.6.6` |
| 2741 | `RESET_PHONE_NUMBER_STATE` | [`other.reset_phone_number_state`](./2741-other-reset-phone-number-state.md) | Reset phone number state | `session` | `nitro-1.6.6` |
| 3445 | `GET_FAQ_CATEGORY` | [`other.get_faq_category`](./3445-other-get-faq-category.md) | Get faq category | `session` | `nitro-1.6.6` |
