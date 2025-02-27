import { StorageEngine } from "./types";
import {
  getStorageItem,
  setStorageItem,
  updateStorageItem,
  removeStorageItem
} from '@aivron/sync-storage';

/**
 * In-memory fallback storage if neither @aivron/sync-storage nor window.localStorage is available.
 */
const fallbackData: { [key: string]: string } = {};

/**
 * Fallback storage engine implementation using an in-memory object.
 */
const fallbackStorage: StorageEngine = {
  getItem(key: string): string | null {
    return fallbackData[key] || null;
  },
  setItem(key: string, value: string): void {
    fallbackData[key] = value;
  },
  removeItem(key: string): void {
    delete fallbackData[key];
  }
};

/**
 * Default storage engine that attempts to use @aivron/sync-storage first,
 * then falls back to window.localStorage, and finally uses an in-memory fallback.
 */
const defaultStorageEngine: StorageEngine = {
  getItem(key: string): string | null {
    try {
      // Use getStorageItem from @aivron/sync-storage if available.
      if (typeof getStorageItem === "function") {
        return getStorageItem(key);
      }
    } catch (e) {
      // If error, try next option.
    }
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return fallbackStorage.getItem(key);
    }
  },

  setItem(key: string, value: string): void {
    try {
      if (typeof setStorageItem === "function") {
        setStorageItem(key, value);
        return;
      }
    } catch (e) {
      // Fall through to next option.
    }
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      fallbackStorage.setItem(key, value);
    }
  },

  removeItem(key: string): void {
    try {
      if (typeof removeStorageItem === "function") {
        removeStorageItem(key);
        return;
      }
    } catch (e) {
      // Fall through to next option.
    }
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      fallbackStorage.removeItem(key);
    }
  }
};

export default defaultStorageEngine;
