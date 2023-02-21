const { EleventyI18nPlugin } = require("@11ty/eleventy");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');


module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
  });
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      'en': 'fr'
    }
  });

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "root": "/" });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    pathPrefix: "/wfrp-sheet/"
  };
};
