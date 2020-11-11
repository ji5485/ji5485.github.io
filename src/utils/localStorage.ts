const storage: object = {
  set: (key: string, object: any) => {
    if (!localStorage) return;
    localStorage[key] = typeof object === 'string' ? object : JSON.stringify(object);
  },
  get: (key: string) => {
    if (!localStorage || !localStorage[key]) return null;

    try {
      const parsed = JSON.parse(localStorage[key]);
      return parsed;
    } catch (e) {
      return localStorage[key];
    }
  },
};

export default storage;
