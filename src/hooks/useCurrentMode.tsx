import storage from 'utilities/localStorage';

type mode = 'light' | 'dark';
const MODE_STORAGE_KEY = 'blog-current-mode';

function useCurrentMode() {
  const targetElement: Element = window.document.body;
  const currentMode = storage.get(MODE_STORAGE_KEY);

  const toggleCurrentMode = () => {
    const toggledMode: mode = currentMode === 'light' ? 'dark' : 'light';
    targetElement.classList.toggle('dark-mode');
    storage.set(MODE_STORAGE_KEY, toggledMode);
  };

  return { currentMode, toggleCurrentMode };
}

export default useCurrentMode;
