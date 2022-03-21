/* eslint-disable prettier/prettier */
import {
	STATUS,
	SPEED_DIFF,
	DEFAULT_DIFFICULTY,
	MAX_DIFFICULTY,
	GAME_SPEED,
	PAUSE,
} from "@/constants";
import {
	ref,
	computed,
	watch
} from "vue";
import audio_0 from '@/assets/0.mp3';
import audio_1 from '@/assets/1.mp3';
import audio_2 from '@/assets/2.mp3';
import audio_3 from '@/assets/3.mp3';
import bruuh from '@/assets/bruuh.mp3';

export default function useGamePreview(fillTiles, gameStatus, difficulty, tiles) {
	const queue = ref([]);
	const timeouts = ref([]);

	const start = () => {
		difficulty.value = DEFAULT_DIFFICULTY;
		queue.value = [];
		fillTiles();
		prepareGame();
	};

	const inQueue = () => {
		queue.value.push(rand(0, 4));
	};

	const prepareGame = () => {
		gameStatus.value = STATUS.PREVIEW;
	};

	const rand = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};
	const delay = computed(() => {
		return GAME_SPEED - difficulty.value * (SPEED_DIFF / MAX_DIFFICULTY);
	});

	const playSound = (index) => {
		const audios = [audio_0, audio_1, audio_2, audio_3, bruuh];
		const audio = new Audio(audios[index]);
		audio.play();
	};

	const preview = () => {
		queue.value.forEach((el, i) => {
			timeouts.value.push(
				setTimeout(() => {
					tiles.value[el].active = true;
					playSound(el);
				}, delay.value * i),
				setTimeout(() => {
					tiles.value[el].active = false;
				}, delay.value * (i + 1) - PAUSE)
			);
		});
		timeouts.value.push(
			setTimeout(() => {
				gameStatus.value = STATUS.PLAYING;
			}, delay.value * queue.value.length)
		);
	};
	const startNewRound = () => {
		inQueue();
		preview();
	};

	const clearTimeouts = () => {
		if (timeouts.value.length) {
			timeouts.value.forEach((el) => clearTimeout(el));
		}
	};

	const canStartGame = computed(() => {
		return (
			gameStatus.value === STATUS.NONE ||
			gameStatus.value === STATUS.WINNER ||
			gameStatus.value === STATUS.LOST
		);
	});

	watch(gameStatus, (newStatus) => {
		if (newStatus === STATUS.PREVIEW) {
			startNewRound();
		}
	});

	const restartGame = () => {
		clearTimeouts();
		gameStatus.value = STATUS.NONE;
		fillTiles();
		queue.value = [];
	};

	const btnHandler = () => {
		if (
			gameStatus.value === STATUS.NONE ||
			gameStatus.value === STATUS.LOST ||
			gameStatus.value === STATUS.WINNER
		) {
			start();
		} else restartGame();
	};

	const gameMessage = computed(() => {
		if (gameStatus.value === STATUS.WON) return "Крут";
		if (gameStatus.value === STATUS.WINNER) return "Ваще красава";
		if (gameStatus.value === STATUS.LOST) return "Bruuh";
		else return "Запомни и повтори комбинацию кнопок";
	});


	return {
		gameMessage,
		btnHandler,
		canStartGame,
		start,
		queue,
		delay,
		playSound
	};
}