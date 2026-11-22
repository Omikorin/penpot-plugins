import { createStore } from 'solid-js';
import type { CurveType, DirectionType } from '@/common/types';
import { downloadSvg } from '@/ui/services/download';
import { emitCreateWave } from '@/ui/services/messenger';
import { createSvgMarkup } from '@/ui/utils/svg';
import { generateRandomData, generateWavePath } from '@/ui/utils/wave';

const DEFAULT_COMPLEXITY = 10;

export const [wave, setWave] = createStore({
  curve: 'wave' as CurveType,
  direction: 'up' as DirectionType,
  complexity: DEFAULT_COMPLEXITY,
  data: generateRandomData(DEFAULT_COMPLEXITY),
});

export const wavePath = () =>
  generateWavePath(wave.data, wave.curve, wave.direction);

export const setCurve = (curve: CurveType) => {
  setWave((s) => {
    s.curve = curve;
  });
};

export const setDirection = (direction: DirectionType) => {
  setWave((s) => {
    s.direction = direction;
  });
};

export const randomize = () => {
  setWave((s) => {
    s.data = generateRandomData(s.complexity);
  });
};

export const setComplexity = (complexity: number) => {
  setWave((s) => {
    s.complexity = complexity;
    s.data = generateRandomData(complexity);
  });
};

export const handleDownload = () => downloadSvg(createSvgMarkup(wavePath()));

export const handleSubmit = () => emitCreateWave(createSvgMarkup(wavePath()));
