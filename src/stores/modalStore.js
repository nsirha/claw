import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
	state: () => ({
		modalMidGame: false,
		modalEndGame: false,
	}),

	actions: {
		showMidGameModal() {
			this.modalMidGame = true;
		},

		hideMidGameModal() {
			this.modalMidGame = false;
		},

		showEndGameModal() {
			this.modalEndGame = true;
		},
	},
});
