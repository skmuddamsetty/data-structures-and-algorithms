/**
 * @param {string} address
 * @return {string}
 */
defangIPaddr = address => {
  return address.replace(/[.]/g, '[.]');
  return address.split('.').join('[.]');
};

console.log(defangIPaddr('1.1.1.1'));
