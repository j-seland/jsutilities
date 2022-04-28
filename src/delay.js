export const Delay = (timeout=1000) => {
  return new Promise((resolve) => {
    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      resolve();
    }, timeout)
  });
}
