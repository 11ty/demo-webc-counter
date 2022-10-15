const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.ignores.add("*.md");

	eleventyConfig.addPlugin(pluginWebc, {
		components: "_includes/webc/*.webc"
	});

	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.setServerOptions({
		domdiff: false
	});
};