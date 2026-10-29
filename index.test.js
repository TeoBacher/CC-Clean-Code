import { describe, expect, it } from "vitest";
import { highCard, card } from ".";

let cards =[card("2", 2),card("3", 3),card("4", 4),card("5", 5),card("6", 6)];


describe("highCard", () => {
    it("should return the sum of the values of the cards", () => {
        const result = highCard(cards);
        expect(result).toBe(20);
    });
})

