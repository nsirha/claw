import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
	state: () => ({
		gameStarted: false,
		gameInPlay: false,
		gameEnded: false,
	}),

	actions: {
		startGame() {
			this.gameStarted = true;
		},

		gameNotInPlay() {
			this.gameInPlay = false;
		},

		gameIsInPlay() {
			this.gameInPlay = true;
		},

		endGame() {
			this.gameEnded = true;
		},
	},
});
