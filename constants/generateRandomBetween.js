function generateRandomBetween(min, max, exclude) {
  const ranNum = Math.floor(Math.random() * (max - min) + min);
  if (ranNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return ranNum;
  }
}
export default generateRandomBetween;
