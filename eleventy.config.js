import { EleventyI18nPlugin } from "@11ty/eleventy";
import i18n from 'eleventy-plugin-i18n';
import translations from './src/_data/i18n.js';


export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
  });
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      en: "fr",
      ru: "en"
    },
  });

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ root: "/" });

  eleventyConfig.addFilter("characFull", function (value) {
    return `charac.${value}.full`;
  });
  eleventyConfig.addFilter("characAbbr", function (value) {
    return `charac.${value}.abbr`;
  });

  eleventyConfig.addCollection("skillsAlpha-en", (collectionApi) => {
    const arr = Array.from(collectionApi.items[0].data.i18n.skills.basic);
    arr.sort((a, b) => {
      const aText = a.label.en.toLowerCase();
      const bText = b.label.en.toLowerCase();
      return aText.localeCompare(bText);
    });
    return arr;
  });

  eleventyConfig.addCollection("skillsAlpha-fr", (collectionApi) => {
    const arr = Array.from(collectionApi.items[0].data.i18n.skills.basic);
    arr.sort((a, b) => {
      const aText = a.label.fr.toLowerCase();
      const bText = b.label.fr.toLowerCase();
      return aText.localeCompare(bText);
    });
    return arr;
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
      output: "dist",
    },
    pathPrefix: "/wfrp-sheet/",
  };
};

export const config = {
  // Control which files Eleventy will process
  // e.g.: *.md, *.njk, *.html, *.liquid
  templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],

  // These are all optional:
  dir: {
    input: "src", // default: "."
    // includes: "../_includes", // default: "_includes"
    // data: "../_data", // default: "_data"
    output: "dist",
  },

  // -----------------------------------------------------------------
  // Optional items:
  // -----------------------------------------------------------------

  // If your site deploys to a subdirectory, change `pathPrefix`.
  // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

  // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
  // it will transform any absolute URLs in your HTML to include this
  // folder name and does **not** affect where things go in the output folder.

  pathPrefix: "/wfrp-sheet/",
};
