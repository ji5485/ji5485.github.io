import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modeState } from 'store/mode';
import storage from 'utilities/localStorage';

type mode = 'light' | 'dark';
const MODE_STORAGE_KEY = 'blog-current-mode';

function useCurrentMode() {
  const currentMode = useRecoilValue<mode>(modeState);
  const setCurrentMode = useSetRecoilState<mode>(modeState);

  const toggleCurrentMode = () => {
    const toggledMode: mode = currentMode === 'light' ? 'dark' : 'light';

    setCurrentMode(toggledMode);
    storage.set(MODE_STORAGE_KEY, 'dark');
  };

  return { currentMode, toggleCurrentMode };
}

export default useCurrentMode;
