/* eslint-disable prettier/prettier */
import {
	DEFAULT_DIFFICULTY,
	MAX_DIFFICULTY
} from "@/constants";
import {
	ref,
	onBeforeMount,
	watch
} from "vue";

export default function useGameInit() {
	let difficulty = ref(DEFAULT_DIFFICULTY);
	const tiles = ref([]);

	const fillTiles = () => {
		tiles.value = new Array(4).fill().map((_, i) => {
			return {
				id: i,
				active: false,
				error: false
			};
		});
	};

	onBeforeMount(fillTiles);

	watch(difficulty, (newDifficulty) => {
		if (newDifficulty > MAX_DIFFICULTY) {
			difficulty.value = MAX_DIFFICULTY;
		}
	});

	return {
		tiles,
		fillTiles,
		difficulty,
	};
}