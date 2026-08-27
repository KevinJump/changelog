const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/search.js");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/jumoo-icon.png");
  eleventyConfig.addPassthroughCopy("src/jumoo-logo.png");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addFilter("readableMonth", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-MM");
  });

  eleventyConfig.addCollection("entries", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/entries/**/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("recentEntries", (collectionApi) => {
    const entries = collectionApi
      .getFilteredByGlob("src/entries/**/*.md")
      .sort((a, b) => b.date - a.date);

    const dateKey = (d) => DateTime.fromJSDate(d, { zone: "utc" }).toFormat("yyyy-MM-dd");
    const recentDays = [...new Set(entries.map((e) => dateKey(e.date)))].slice(0, 5);

    return entries.filter((e) => recentDays.includes(dateKey(e.date)));
  });

  eleventyConfig.addCollection("years", (collectionApi) => {
    const entries = collectionApi.getFilteredByGlob("src/entries/**/*.md");
    const years = [...new Set(entries.map((e) => e.date.getUTCFullYear()))];
    return years.sort((a, b) => b - a);
  });

  eleventyConfig.addFilter("countInYear", (entries, year) => {
    return entries.filter((e) => e.date.getUTCFullYear() === year).length;
  });

  eleventyConfig.addFilter("byYear", (entries, year) => {
    return entries.filter((e) => e.date.getUTCFullYear() === year);
  });

  eleventyConfig.addFilter("groupByMonth", (entries) => {
    const groups = [];
    let current = null;

    for (const entry of entries) {
      const month = DateTime.fromJSDate(entry.date, { zone: "utc" }).toFormat("yyyy-MM");
      if (!current || current.month !== month) {
        current = { month, entries: [] };
        groups.push(current);
      }
      current.entries.push(entry);
    }

    return groups;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
