import * as SecureStore from "expo-secure-store";

export interface LocalStorage {
  /**
   * Remove the item
   */
  removeItemAsync: () => Promise<void>;
  /**
   * Set a value
   * @param value Value to add
   */
  setItemAsync: (value: any) => Promise<void>;
  /**
   * Get an item
   */
  getItemAsync: <TValue>() => Promise<TValue>;
}

export default (key: string): LocalStorage => {
  /**
   * Remove the item
   */
  const removeItemAsync = async (): Promise<void> =>
    await SecureStore.deleteItemAsync(key);

  /**
   * Set a value
   * @param value Value to add
   */
  const setItemAsync = async (value: any): Promise<void> =>
    await SecureStore.setItemAsync(key, JSON.stringify(value));

  /**
   * Get an item
   */
  const getItemAsync = async <TValue>(): Promise<TValue> => {
    const itemString = await SecureStore.getItemAsync(key);
    let result = null;
    if (itemString !== null) {
      return JSON.parse(itemString) as TValue;
    }
  };

  return {
    getItemAsync,
    removeItemAsync,
    setItemAsync,
  };
};
