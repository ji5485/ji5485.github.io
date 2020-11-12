import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { modeState } from 'store/mode';
import storage from 'utilities/localStorage';

type mode = 'light' | 'dark';
const MODE_STORAGE_KEY = 'blog-current-mode';

function useModeSelect() {
  const setCurrentMode = useSetRecoilState<mode>(modeState);

  useEffect(() => {
    const storedMode: mode | null = storage.get(MODE_STORAGE_KEY);

    if (storedMode === null) {
      storage.set(MODE_STORAGE_KEY, 'light');
      return;
    }

    if (storedMode === 'dark') {
      setCurrentMode('dark');
      storage.set(MODE_STORAGE_KEY, 'dark');
    }
  }, []);
}

export default useModeSelect;
