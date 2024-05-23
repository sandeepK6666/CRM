export const setLocalStorageItem = (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, (JSON.stringify(value)));
    }
  };
  
  export const getLocalStorageItem = (key, defaultValue = null) => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value)) : null;
    }
    return null;
  };
  
  export const removeLocalStorageItem = key => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
  
  export const setLocalStorageJsonProperty = (key, property, value) => {
    if (typeof window !== 'undefined') {
      const existingItem = localStorage.getItem(key);
      const item = existingItem ? JSON.parse(existingItem) : {};
  
      console.log(item, typeof item);
      item[property] = value;
      localStorage.setItem(key, JSON.stringify(item));
    }
  };
  
  export const getLocalStorageJsonProperty = (key, property) => {
    if (typeof window !== 'undefined') {
      const item = JSON.parse(localStorage.getItem(key) || '{}');
      return item[property];
    }
    return null;
  };
  