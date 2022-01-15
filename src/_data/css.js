let sass = require("sass");

module.exports = function () {
  return new Promise((resolve, reject) => {
    try {
      let result = sass.compile("src/sass/style.scss");
      resolve(result.css);
    } catch (e) {
      reject(e);
    }
  });
};
