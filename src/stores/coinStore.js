import { defineStore } from 'pinia';

export const useCoinStore = defineStore('coin', {
	state: () => ({
		currentCoin: 0,
		totalCoins: 3,
	}),

	actions: {
		increaseCurrentCoinValue() {
			this.currentCoin += 1;
		},
	},
});
