import { describe, expect, it } from "vitest";
import { highCard, card, isBrelan, isSuite, isColor, isPair, isFull, pokerCard, SCORE_CATEGORY} from ".";

let cards =[card("2", 2),card("3", 3),card("4", 4),card("5", 5),card("6", 6)];
let cardsBrelan =[card("2", 2),card("2", 2),card("2", 2),card("5", 5),card("6", 6)];
let cardsSuite =[card("2", 2),card("3", 3),card("4", 4),card("5", 5),card("6", 6)];
let cardsColor =[card("2", 2),card("3", 3),card("4", 4),card("5", 5),card("6", 6)];
let cardsPair =[card("2", 2),card("2", 2),card("4", 4),card("5", 5),card("6", 6)];
let cardsFull =[card("2", 2),card("2", 2),card("2", 2),card("5", 5),card("5", 5)];

describe("Poker Card", () => {
    it("should return the sum of the values of the cards", () => {
        const result = highCard(cards);
        expect(result).toBe(20);
    });

    it("Sould return true if the set of cards is a Brelan", () => {
        const result = isBrelan(cardsBrelan);
        expect(result).toBe(true);
    });

    it("should return true if the set of cards is a Suite", () => {
        const result = isSuite(cardsSuite);
        expect(result).toBe(true);
    });

    it("should return true if the set of cards is a Color", () => {
        const result = isColor(cardsColor);
        expect(result).toBe(true);
    });

    it("should return true if the set of cards is a Pair", () => {
        const result = isPair(cardsPair);
        expect(result).toBe(true);
    });

    it("should return true if the set of cards is a Full", () => {
        const result = isFull(cardsFull);
        expect(result).toBe(true);
    });

    it("should return the score category of the set of cards", () => {
        const result = pokerCard([cardsBrelan, cardsSuite, cardsColor, cardsPair, cardsFull]);
        expect(pokerCard([cardsBrelan, cardsSuite, cardsColor, cardsPair, cardsFull])).toEqual([SCORE_CATEGORY.BRELAN, SCORE_CATEGORY.SUITE, SCORE_CATEGORY.COLOR, 4, SCORE_CATEGORY.FULL]);
    });

});

