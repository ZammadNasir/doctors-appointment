interface Data {
  [key: string]: any;
}

export const saveStringToLocalStorage = (key: string, data: string): void => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.error(`Error saving string to localStorage: ${error}`);
  }
};

export const saveDataToLocalStorage = (key: string, data: Data): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving data to localStorage: ${error}`);
  }
};

export const getStringFromLocalStorage = (key: string): string | null => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? storedData : null;
  } catch (error) {
    console.error(`Error getting string from localStorage: ${error}`);
    return null;
  }
};

export const getDataFromLocalStorage = (key: string): Data | null => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error(`Error getting data from localStorage: ${error}`);
    return null;
  }
};

export const clearDataFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error clearing data from localStorage: ${error}`);
  }
};

export const clearAllDataFromLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(`Error clearing all data from localStorage: ${error}`);
  }
};

