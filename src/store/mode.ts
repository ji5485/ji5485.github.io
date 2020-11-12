import { atom } from 'recoil';

type mode = 'light' | 'dark';

export const modeState = atom<mode>({
  key: 'modeState',
  default: 'light',
});
