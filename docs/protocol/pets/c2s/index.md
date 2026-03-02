---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Pets
- **Total packets**: 21

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 186 | `REMOVE_PET_SADDLE` | [`room.remove_pet_saddle`](./0186-room-remove-pet-saddle.md) | Remove a saddle from a pet | `session` | `nitro-1.6.6` |
| 549 | `PET_SELECTED` | [`room.select_pet`](./0549-room-select-pet.md) | Select a pet in the room | `session` | `nitro-1.6.6` |
| 749 | `PET_SUPPLEMENT` | [`user.pet_supplement`](./0749-user-pet-supplement.md) | Give a supplement item to a pet | `session` | `nitro-1.6.6` |
| 1036 | `PET_RIDE` | [`room.mount_pet`](./1036-room-mount-pet.md) | Mount or unmount a rideable pet | `session` | `nitro-1.6.6` |
| 1328 | `USE_PET_PRODUCT` | [`room.use_pet_product`](./1328-room-use-pet-product.md) | Use a product item on a pet | `session` | `nitro-1.6.6` |
| 1472 | `TOGGLE_PET_RIDING` | [`room.toggle_pet_riding`](./1472-room-toggle-pet-riding.md) | Toggle pet riding permission | `session` | `nitro-1.6.6` |
| 1521 | `HARVEST_PET` | [`room.harvest_pet`](./1521-room-harvest-pet.md) | Harvest from a pet-grown plant | `session` | `nitro-1.6.6` |
| 1581 | `PET_PICKUP` | [`room.pickup_pet`](./1581-room-pickup-pet.md) | Remove a pet from the room into inventory | `session` | `nitro-1.6.6` |
| 1638 | `PETS_BREED` | [`room.breed_pets`](./1638-room-breed-pets.md) | Initiate breeding between two pets | `session` | `nitro-1.6.6` |
| 1756 | `CATALOG_REQUESET_PET_BREEDS` | [`catalog.get_pet_breeds`](./1756-catalog-get-pet-breeds.md) | Request available pet breed palettes for a pet type | `session` | `nitro-1.6.6` |
| 2161 | `GET_PET_TRAINING_PANEL` | [`room.get_pet_commands`](./2161-room-get-pet-commands.md) | Request the pet training command panel | `session` | `nitro-1.6.6` |
| 2647 | `PET_PLACE` | [`room.place_pet`](./2647-room-place-pet.md) | Place a pet from inventory into the room | `session` | `nitro-1.6.6` |
| 2713 | `PET_CANCEL_BREEDING` | [`pet.cancel_breeding`](./2713-pet-cancel-breeding.md) | Cancel an in-progress pet breeding session | `session` | `nitro-1.6.6` |
| 2768 | `UNIT_GIVE_HANDITEM_PET` | [`room_entities.give_hand_item_pet`](./2768-room-entities-give-hand-item-pet.md) | Give the hand item to a pet | `session` | `nitro-1.6.6` |
| 2934 | `PET_INFO` | [`room.request_pet_info`](./2934-room-request-pet-info.md) | Request detailed information about a pet | `session` | `nitro-1.6.6` |
| 3202 | `PET_RESPECT` | [`room_entities.respect_pet`](./3202-room-entities-respect-pet.md) | Show affection to a pet | `session` | `nitro-1.6.6` |
| 3379 | `TOGGLE_PET_BREEDING` | [`room.toggle_pet_breeding`](./3379-room-toggle-pet-breeding.md) | Toggle pet breeding mode | `session` | `nitro-1.6.6` |
| 3382 | `PET_CONFIRM_BREEDING` | [`pet.confirm_breeding`](./3382-pet-confirm-breeding.md) | Confirm a pet breeding request | `session` | `nitro-1.6.6` |
| 3449 | `PET_MOVE` | [`room.move_pet`](./3449-room-move-pet.md) | Move a pet to a new tile in the room | `session` | `nitro-1.6.6` |
| 3698 | `PET_OPEN_PACKAGE` | [`room.open_pet_package`](./3698-room-open-pet-package.md) | Open a pet package to reveal a pet | `session` | `nitro-1.6.6` |
| 3835 | `COMPOST_PLANT` | [`pet.compost`](./3835-pet-compost.md) | Compost a plant pet | `session` | `nitro-1.6.6` |
