const pluginWebc = require("@11ty/eleventy-plugin-webc");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
	eleventyConfig.ignores.add("*.md");

	eleventyConfig.addPlugin(pluginWebc);

	eleventyConfig.setServerOptions({
		domDiff: false
	});
};
