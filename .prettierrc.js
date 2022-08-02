/** @type {import('prettier').Options} */
module.exports = {
  overrides: [
    {
      files: ["*.md", "README"],
      options: {
        parser: "markdown-nocjsp",
      },
    },
    {
      files: ["*.mdx"],
      options: {
        parser: "mdx-nocjsp",
      },
    },
  ],
};
