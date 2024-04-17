module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,json,html,css,db}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};