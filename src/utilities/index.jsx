export const setItemLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };
  
export const getItemLocalStorage = (name) => {
    return localStorage.getItem(name);
};  