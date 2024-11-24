import { useCallback } from "react";

const useLocalStorage = () => {
	const getItem = useCallback(<T>(key: string): T | null => {
		const item = localStorage.getItem(key);
		try {
			return item ? (JSON.parse(item) as T) : null;
		} catch (error) {
			console.error(`Error parsing localStorage key "${key}":`, error);
			return null;
		}
	}, []);

	const setItem = useCallback(<T>(key: string, value: T): void => {
		try {
			const serializedValue = JSON.stringify(value);
			localStorage.setItem(key, serializedValue);
		} catch (error) {
			console.error(`Error setting localStorage key "${key}":`, error);
		}
	}, []);

	return { getItem, setItem };
};

export default useLocalStorage;
