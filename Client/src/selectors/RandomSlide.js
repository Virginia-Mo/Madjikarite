// program to get a random item from an array

export default function getRandomSlideItem(array) {
  // get random index value
  const shuffledArray = array.sort(() => Math.random() - 0.5);

  return shuffledArray;
}
