import { useState, useEffect } from 'react';
import storage from 'utilities/localStorage';

type mode = 'light' | 'dark';
const MODE_STORAGE_KEY: string = 'blog-current-mode';

function useModeSelect() {
  const [currentMode, setCurrentMode] = useState<mode>("light");

  const changeCurrentMode = () => {
    const toggledMode: mode = currentMode === 'light' ? 'dark' : 'light';

    setCurrentMode(toggledMode);
    storage.set(MODE_STORAGE_KEY, toggledMode);
  };

  useEffect(() => {
    const storedMode: mode | null = storage.get(MODE_STORAGE_KEY);

    if (storedMode === null) {
      storage.set(MODE_STORAGE_KEY, 'light');  
      return
    };

    storedMode === 'dark' && changeCurrentMode();
  }, [])

  return { currentMode, changeCurrentMode };
}

export default useModeSelect;