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

  eleventyConfig.addFilter("characFull", function(value) {
    return `charac.${value}.full`
  });
  eleventyConfig.addFilter("characAbbr", function(value) {
    return `charac.${value}.abbr`
  });

  eleventyConfig.addCollection("skillsAlpha-en", (collectionApi) => {
    const arr = Array.from(collectionApi.items[0].data.i18n.skills.basic);
    arr.sort((a, b) => {
      const aText = a.label.en.toLowerCase();
      const bText = b.label.en.toLowerCase();
      return aText.localeCompare(bText);
    })
    return arr
  });

  eleventyConfig.addCollection("skillsAlpha-fr", (collectionApi) => {
    const arr = Array.from(collectionApi.items[0].data.i18n.skills.basic);
    arr.sort((a, b) => {
      const aText = a.label.fr.toLowerCase();
      const bText = b.label.fr.toLowerCase();
      return aText.localeCompare(bText);
    })
    return arr
  });

  eleventyConfig.addCollection("skillsAlpha-ru", (collectionApi) => {
    const arr = Array.from(collectionApi.items[0].data.i18n.skills.basic);
    arr.sort((a, b) => {
      const aText = a.label.ru.toLowerCase();
      const bText = b.label.ru.toLowerCase();
      return aText.localeCompare(bText);
    });
    return arr;
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    pathPrefix: "/wfrp-sheet/"
  };
};
