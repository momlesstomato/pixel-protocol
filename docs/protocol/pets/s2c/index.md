---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Pets
- **Total packets**: 20

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 546 | `PET_OPEN_PACKAGE_RESULT` | [`pet.open_package_result`](./0546-pet-open-package-result.md) | Deliver the result of naming a pet from a package | `session` | `nitro-1.6.6` |
| 634 | `PET_CONFIRM_BREEDING_REQUEST` | [`pet.confirm_breeding_request`](./0634-pet-confirm-breeding-request.md) | Show the breeding confirmation dialog | `session` | `nitro-1.6.6` |
| 1111 | `PET_RECEIVED` | [`pet.received`](./1111-pet-received.md) | Notify that the player received a pet | `session` | `nitro-1.6.6` |
| 1130 | `PET_SCRATCH_FAILED` | [`pet.scratch_failed`](./1130-pet-scratch-failed.md) | Indicate that a pet scratch (respect) failed due to age | `session` | `nitro-1.6.6` |
| 1164 | `PET_TRAINING_PANEL` | [`pet.training_panel`](./1164-pet-training-panel.md) | Deliver the pet training command panel | `session` | `nitro-1.6.6` |
| 1553 | `PET_BREEDING_RESULT` | [`pet.breeding_result`](./1553-pet-breeding-result.md) | Deliver the result of a completed pet breeding | `session` | `nitro-1.6.6` |
| 1625 | `PET_CONFIRM_BREEDING_RESULT` | [`pet.confirm_breeding_result`](./1625-pet-confirm-breeding-result.md) | Deliver the breeding nest confirmation result | `session` | `nitro-1.6.6` |
| 1746 | `PET_BREEDING` | [`pet.breeding`](./1746-pet-breeding.md) | Notify about a pet breeding state change | `session` | `nitro-1.6.6` |
| 1907 | `PET_STATUS` | [`pet.status`](./1907-pet-status.md) | Update a pet's breeding and harvest status | `session` | `nitro-1.6.6` |
| 1924 | `PET_FIGURE_UPDATE` | [`pet.figure_update`](./1924-pet-figure-update.md) | Update a pet's visual figure in the room | `session` | `nitro-1.6.6` |
| 2156 | `PET_EXPERIENCE` | [`pet.experience`](./2156-pet-experience.md) | Show experience gained by a pet | `session` | `nitro-1.6.6` |
| 2380 | `PET_OPEN_PACKAGE_REQUESTED` | [`pet.open_package_requested`](./2380-pet-open-package-requested.md) | Show the pet package opening dialog | `session` | `nitro-1.6.6` |
| 2527 | `PET_NEST_BREEDING_SUCCESS` | [`pet.nest_breeding_success`](./2527-pet-nest-breeding-success.md) | Confirm that breeding nest assignment succeeded | `session` | `nitro-1.6.6` |
| 2621 | `PET_GO_TO_BREEDING_NEST_FAILURE` | [`pet.go_to_breeding_nest_failure`](./2621-pet-go-to-breeding-nest-failure.md) | Indicate that a pet could not reach the breeding nest | `session` | `nitro-1.6.6` |
| 2788 | `PET_RESPECTED` | [`user.pet_respected`](./2788-user-pet-respected.md) | Notify that a pet has received a respect point | `session` | `nitro-1.6.6` |
| 2824 | `PET_LEVEL_UPDATE` | [`pet.level_update`](./2824-pet-level-update.md) | Notify that a pet leveled up in the room | `session` | `nitro-1.6.6` |
| 2901 | `PET_INFO` | [`pet.info`](./2901-pet-info.md) | Deliver detailed information about a pet | `session` | `nitro-1.6.6` |
| 2913 | `PET_PLACING_ERROR` | [`pet.placing_error`](./2913-pet-placing-error.md) | Indicate a pet placement error | `session` | `nitro-1.6.6` |
| 3331 | `CATALOG_RECEIVE_PET_BREEDS` | [`catalog.pet_breeds`](./3331-catalog-pet-breeds.md) | Deliver available pet breed palette data | `session` | `nitro-1.6.6` |
| 3441 | `PET_SUPPLEMENT` | [`user.pet_supplemented`](./3441-user-pet-supplemented.md) | Notify that a pet has received a supplement | `session` | `nitro-1.6.6` |
