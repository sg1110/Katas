const game = require("../codeWarsSolutions/texasHoldEm");
const expect = require("chai").expect;

describe("Hand Scorer", function() {
  describe("Hand scenarios", function() {
    it("Highest card wins - first hand looses", function() {
      expect(game.handScorer("2C 3H 4S 8C AH", "2H 3D 5S 9C KD")).to.equal(
        "win"
      );
    });
    it("Pair of two wins - first hand looses", function() {
      expect(game.handScorer("2H 3D 5S 9C KD", "2C 2H 4S 8C AH")).to.equal(
        "loss"
      );
    });
    it("Three of a kind - first hand wins", function() {
      expect(game.handScorer("2H 2D 2S 9C KD", "2C 3H 4S 8C AH")).to.equal(
        "win"
      );
    });
    it("Straight - first hand wins", function() {
      expect(game.handScorer("1H 2D 3S 4C 5D", "2C 3H 4S 8C AH")).to.equal(
        "win"
      );
    });
    it("Flush - first hand looses", function() {
      expect(game.handScorer("1H 2H 3H 4H 5H", "1H 2D 3S 4C 5D")).to.equal(
        "win"
      );
    });
    it("Full House - first hand wins", function() {
      expect(game.handScorer("2H 2D 3S 3C 3D", "2C 3H 4S 8C AH")).to.equal(
        "win"
      );
    });
    it("Four of a kind - first hand wins", function() {
      expect(game.handScorer("2H 2D 2S 2C 3D", "2C 2H 3S 3C 3H")).to.equal(
        "win"
      );
    });
    it("Straight flush - first hand looses", function() {
      expect(game.handScorer("2H 2D 2S 2C 3D", "2H 3H 4H 5H 6H")).to.equal(
        "loss"
      );
    });
    it("Straight flush (both hands) - first hand wins with higher card", function() {
      expect(game.handScorer("3H 4H 5H 6H 7H", "2H 3H 4H 5H 6H")).to.equal(
        "win"
      );
    });
  });

  describe("Helper functions - scores", function() {
    it("Highest card (first hand) wins", function() {
      expect(game.highestRank([2, 3, 4, 8, 14], [2, 3, 5, 9, 13])).to.equal(
        "win"
      );
    });

    it("Pair of two - should confirm the hand has a pair", function() {
      expect(game.hasAPair([2, 2, 5, 9, 13])).to.be.true;
    });
    it("Pair of two - should confirm the hand does not have a pair", function() {
      expect(game.hasAPair([2, 4, 5, 9, 13])).to.be.false;
    });

    it("Two Pairs of two - should confirm the hand has two pairs", function() {
      expect(game.hasTwoPairs([2, 5, 5, 2, 13])).to.be.true;
    });
    it("Two Pairs of two - should confirm the hand does not have two pairs", function() {
      expect(game.hasTwoPairs([2, 2, 2, 5, 13])).to.be.false;
    });

    it("Three of a kind - should confirm the hand has a three of a kind", function() {
      expect(game.hasThreeOfAKind([1, 2, 2, 2, 4])).to.be.true;
    });
    it("Three of a kind - should confirm the hand has a three of a kind", function() {
      expect(game.hasThreeOfAKind([2, 2, 2, 4, 5])).to.be.true;
    });
    it("Three of a kind - should confirm the hand has a three of a kind", function() {
      expect(game.hasThreeOfAKind([1, 2, 3, 3, 3])).to.be.true;
    });
    it("Three of a kind - should confirm the hand does not have three of a kind", function() {
      expect(game.hasThreeOfAKind([2, 2, 5, 5, 13])).to.be.false;
    });

    it("Straight - should confirm hand contains 5 values in consecutive order", function() {
      expect(game.hasStraight([2, 1, 4, 3, 5])).to.be.true;
    });
    it("Straight - should confirm the hand does not contain 5 values in consecutive order", function() {
      expect(game.hasStraight([6, 3, 2, 4, 1])).to.be.false;
    });

    it("Flush - hand contains 5 cards of the same suit", function() {
      expect(game.hasFlush(["H", "H", "H", "H", "H"])).to.be.true;
    });
    it("Flush - hand does not contain 5 cards of the same suit", function() {
      expect(game.hasFlush(["H", "H", "S", "H", "H"])).to.be.false;
    });

    it("Full House - hand contains 3 cards of the same value and 2 cards of the same value", function() {
      expect(game.hasFullHouse([2, 2, 3, 3, 3])).to.be.true;
    });
    it("Full House - hand does not contain 3 cards of the same value and 2 cards of the same value", function() {
      expect(game.hasFullHouse([2, 2, 3, 3, 1])).to.be.false;
    });

    it("Four of a kind - hand contains 4 cards with the same value", function() {
      expect(game.hasFourOfAKind([2, 3, 3, 3, 3])).to.be.true;
    });
    it("Four of a kind - hand does not contain 4 cards with the same value", function() {
      expect(game.hasFourOfAKind([2, 3, 5, 9, 10])).to.be.false;
    });

    it("Straight flush - hand contains cards of the same suit with consecutive values", function() {
      expect(game.hasStraightFlush([2, 3, 4, 5, 6], ["H", "H", "H", "H", "H"]))
        .to.be.true;
    });
    it("Straight flush - does not contain cards of the same suit but contains consecutive values", function() {
      expect(game.hasStraightFlush([2, 3, 4, 5, 6], ["C", "H", "H", "H", "H"]))
        .to.be.false;
    });
    it("Straight flush - does contain cards of the same suit but does not contain consecutive values", function() {
      expect(game.hasStraightFlush([2, 7, 4, 5, 6], ["H", "H", "H", "H", "H"]))
        .to.be.false;
    });
  });
});

// Sample input:
// Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH
// Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S
// Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH
// Black: 2H 3D 5S 9C KD  White: 2D 3H 5C 9S KH
// Each row of input is a game with two players.
//The first five cards belong to the player named “Black” and the second five cards belong to the player named “White”.

// Sample output:
// White wins. - with high card: Ace
// Black wins. - with full house: 4 over 2
// Black wins. - with high card: 9
// Tie.

//////////////////////////////////////////////////////////////////////
//Beginning of description:
// Your job is to compare several pairs of poker hands and to indicate which, if either, has a higher rank.
// A poker deck contains 52 cards - each card has a suit which is one of clubs, diamonds, hearts, or spades
//(denoted C, D, H, and S in the input data).\
// Each card also has a value which is one of 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace
//(denoted 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A).
//For scoring purposes, the suits are unordered while the values are ordered as given above,
//with 2 being the lowest and ace the highest value.
// A poker hand consists of 5 cards dealt from the deck.
//Poker hands are ranked by the following partial order from lowest to highest.

// High Card: Hands which do not fit any higher category are ranked by the value of their highest card.
//If the highest cards have the same value, the hands are ranked by the next highest, and so on.

// Pair: 2 of the 5 cards in the hand have the same value.
//Hands which both contain a pair are ranked by the value of the cards forming the pair.
//If these values are the same, the hands are ranked by the values of the cards not forming the pair, in decreasing order.

// Two Pairs: The hand contains 2 different pairs.
//Hands which both contain 2 pairs are ranked by the value of their highest pair.
//Hands with the same highest pair are ranked by the value of their other pair.
//If these values are the same the hands are ranked by the value of the remaining card.

// Three of a Kind: Three of the cards in the hand have the same value.
//Hands which both contain three of a kind are ranked by the value of the 3 cards.

// Straight: Hand contains 5 cards with consecutive values.
// Hands which both contain a straight are ranked by their highest card.

// Flush: Hand contains 5 cards of the same suit. Hands which are both flushes are ranked using the rules for High Card.

// Full House: 3 cards of the same value, with the remaining 2 cards forming a pair. Ranked by the value of the 3 cards.

// Four of a kind: 4 cards with the same value. Ranked by the value of the 4 cards.

// Straight flush: 5 cards of the same suit with consecutive values. Ranked by the highest card in the hand.
