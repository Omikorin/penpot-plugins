import { scaleLinear } from 'd3-scale';
import { area, type CurveFactory, curveBasis, curveLinear, curveStepBefore } from 'd3-shape';

import type { CurveType, DirectionType } from '@/common/types';

export const WAVE_WIDTH = 500;
export const WAVE_HEIGHT = 200;
export const WAVE_COLOR = '#07bef8';

const curves: Record<CurveType, CurveFactory> = {
  wave: curveBasis,
  step: curveStepBefore,
  peak: curveLinear,
};

export const generateRandomData = (complexity: number): number[] => {
  // complexity affects both number of points and their randomness
  const points = Math.max(2, Math.floor(complexity / 2));
  const randomnessFactor = complexity / 50;

  return Array.from({ length: points }, () => {
    const baseValue = Math.random() * 10;
    const noise = (Math.random() - 0.5) * randomnessFactor * 5;
    return Math.max(0, Math.min(10, baseValue + noise));
  });
};

export const generateWavePath = (
  data: number[],
  curve: CurveType,
  direction: DirectionType,
): string => {
  const scaleX = scaleLinear()
    .domain([0, data.length - 1])
    .range([0, WAVE_WIDTH]);
  const scaleY = scaleLinear().domain([0, 10]).range([0, WAVE_HEIGHT]);

  const d = area<number>()
    .x((_d, i) => scaleX(i))
    .y1((d) => scaleY(d))
    .y0(direction === 'up' ? WAVE_HEIGHT : 0)
    .curve(curves[curve])(data);

  // round values for smaller output
  return (d ?? '').replace(/-?[0-9]+\.[0-9]+/g, (n) =>
    String(Math.round(Number.parseFloat(n) * 10) / 10),
  );
};
