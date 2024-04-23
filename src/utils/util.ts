export const deepCopy = (obj: any) => {
  const result: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key]); // 递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
};

// 包装await
export function slAwait<T, U = Error>(promise: Promise<T>): Promise<[T, null] | [undefined, U]> {
  return promise
    .then<[T, null]>((res: T) => [res, null])
    .catch<[undefined, U]>((err: U) => [undefined, err]);
}
