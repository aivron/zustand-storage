/**
 * Deeply merges two objects.
 * @param target - The target object.
 * @param source - The source object.
 * @returns The merged object.
 */
export function deepMerge<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const targetVal = (target as any)[key];
        const sourceVal = (source as any)[key];
        if (typeof targetVal === "object" && typeof sourceVal === "object" && targetVal && sourceVal) {
          (target as any)[key] = deepMerge({ ...targetVal }, sourceVal);
        } else {
          (target as any)[key] = sourceVal;
        }
      }
    }
    return target;
  }

  /**
   * Shallowly merges two objects.
   * @param target - The target object.
   * @param source - The source object.
   * @returns The merged object.
   */
  export function shallowMerge<T>(target: T, source: Partial<T>): T {
    return { ...target, ...source };
  }

  /**
   * Creates a debounced version of a function.
   * @param func - The function to debounce.
   * @param wait - The delay in milliseconds.
   * @returns The debounced function.
   */
  export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    const debouncedFunction = (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
    return debouncedFunction as T;
  }
