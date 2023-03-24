export function logTotalRunningTime() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const methodReturn = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`[${propertyKey}] Total running time: ${(t2 - t1) / 1000}`);
      methodReturn;
    };

    return descriptor;
  };
}
