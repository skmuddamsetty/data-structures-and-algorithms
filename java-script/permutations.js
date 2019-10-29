{
  function permutations(s) {
    let results = [];
    helper('', s, results);
    return results;
  }

  function helper(prefix, suffix, results) {
    if (suffix.length === 0) {
      results.push(prefix);
    } else {
      for (let i = 0; i < suffix.length; i++) {
        helper(
          prefix + suffix[i],
          suffix.substring(0, i) + suffix.substring(i + 1, suffix.length),
          results
        );
      }
    }
  }

  permutations('abc');
}
