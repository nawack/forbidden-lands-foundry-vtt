import { ForbiddenLandsItemSheet } from "@item/item-sheet";
export class ForbiddenLandsTalentSheet extends ForbiddenLandsItemSheet {
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			...super.defaultOptions,
			template:
				"systems/forbidden-lands/templates/item/talent/talent-sheet.hbs",
		});
	}
}
