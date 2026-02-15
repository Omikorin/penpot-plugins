/**
 * Shuffles the elements of an array in place using the Durstenfeld's version of Fisher-Yates algorithm.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to shuffle.
 */
export const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
