/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
  const siteTitle = "My new site";
  // add the site title to global data
  eleventyConfig.addGlobalData("siteTitle", siteTitle);
  // set a default for the page title to be the site title.
  // can be overridden using 11ty's data cascade
  eleventyConfig.addGlobalData("pageTitle", siteTitle);

  eleventyConfig.addWatchTarget("./src/sass/");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
