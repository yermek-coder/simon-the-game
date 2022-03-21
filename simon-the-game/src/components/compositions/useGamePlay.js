/* eslint-disable prettier/prettier */
import {
	STATUS,
	MAX_DIFFICULTY
} from "@/constants";
import {
	watch
} from 'vue';

export default function useGamePlay(queue, gameStatus, delay, tiles, difficulty, playSound) {

	let iterIndex = 0;

	const setNotPressedForAll = () => {
		if (gameStatus.value === STATUS.PREVIEW) return;
		tiles.value.forEach(el => el.active = false);
	};

	const setActive = (id) => {
		if (gameStatus.value !== STATUS.PLAYING) return;
		tiles.value[id].active = true;
		checkTile(id);
	};

	let promises = [];

	let controllers = [];

	const newWait = () => {
		return new Promise((resolve, reject) => {
			controllers.push({
				resolve,
				reject
			});
		});
	};

	const genPromiseArr = () => {
		promises = [];
		controllers = [];
		queue.value.forEach(() => {
			promises.push(newWait());
		});
	};

	const checkGame = async () => {
		try {
			for (const prom of promises) {
				await prom;
			}
		} catch (error) {
			setLost();
		} finally {
			if (gameStatus.value !== STATUS.LOST) setWon();
		}
	};

	const startChecking = () => {
		iterIndex = 0;
		genPromiseArr();
		checkGame();
	};

	const checkTile = (id) => {
		if (queue.value[iterIndex] === id) {
			setRight(id);
		} else {
			setWrong(id);
		}
	};

	const setRight = (id) => {
		controllers[iterIndex].resolve();
		playSound(id);
		iterIndex++;
	};

	const setWrong = (id) => {
		tiles.value[id].error = true;
		playSound(4);
		controllers[iterIndex].reject();
	};

	const setWon = () => {
		if (difficulty.value >= MAX_DIFFICULTY) {
			gameStatus.value = STATUS.WINNER;
			return;
		}
		difficulty.value++;
		gameStatus.value = STATUS.WON;
		setTimeout(() => {
			gameStatus.value = STATUS.PREVIEW;
		}, delay.value);
		return;
	};

	const setLost = () => {
		gameStatus.value = STATUS.LOST;
	};

	watch(gameStatus, (status) => {
		if (status === STATUS.PLAYING) {
			startChecking();
		}
	});

	return {
		setNotPressedForAll,
		setActive,
	};
}