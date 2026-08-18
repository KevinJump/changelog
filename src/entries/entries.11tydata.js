const path = require("path");

module.exports = {
  layout: "entry.njk",
  eleventyComputed: {
    // Entries live in year/month subfolders on disk (src/entries/YYYY/MM/) but
    // the public URL must stay /entries/<filename-slug>/ regardless of that —
    // page.fileSlug strips the leading YYYY-MM-DD- prefix, which would change
    // existing URLs, so build the slug from the actual filename instead.
    permalink: (data) => `/entries/${path.basename(data.page.inputPath, ".md")}/`,
  },
};
