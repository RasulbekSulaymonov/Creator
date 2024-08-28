export const getRootColor = (val: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(val).trim();

export const setPropertyFunction = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    document.documentElement.style.setProperty(key, obj[key]);
  });
};
