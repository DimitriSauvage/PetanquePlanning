/**
 * Get an hexa color from an int
 * @param int value to change to hexa
 */
export default (int: number) => {
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (int >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
};
