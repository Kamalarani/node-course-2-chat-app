var isRealString = ((str) => {
  return typeOf(str) === 'string' && str.trim().length>0;
});

module.exports = {isRealString};
