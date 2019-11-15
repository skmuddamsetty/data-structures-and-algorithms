/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
numJewelsInStones = (J, S) => {
  let jewelMap = {};
  let jewelCount = 0;
  J.split('').forEach(char => {
    jewelMap[char] = 1;
  });
  S.split('').forEach(char => {
    if (jewelMap[char] === 1) {
      jewelCount++;
    }
  });
  return jewelCount;
};
numJewelsInStones('aA', 'aAAAbbbbb');
