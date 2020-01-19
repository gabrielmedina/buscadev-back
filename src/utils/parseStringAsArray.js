module.exports = function parseStringAsArray(text) {
  return text.split(',').map(item => item.trim());
};