module.exports = {
	siteMetadata: {
		title: 'Gatsby WordPress Template',
	},
	plugins: [
		'gatsby-plugin-resolve-src',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		// {
		// 	resolve: `gatsby-plugin-canonical-urls`,
		// 	options: {
		// 		siteUrl: `https://www.esmeloans.com`,
		// 	},
		// },
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: "GTM-MPFMW8W",

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: true,

				// Specify optional GTM environment details.
				// gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
				// gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				/*
				* The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
				* Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
				*/
				baseUrl: `localhost:8888/MAMP-Sites/WP-API/`,
				// The protocol. This can be http or https.
				protocol: `http`,
				// Indicates whether the site is hosted on wordpress.com.
				// If false, then the asumption is made that the site is self hosted.
				// If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
				// If your site is hosted on wordpress.org, then set this to false.
				hostingWPCOM: false,
				// If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
				// This feature is untested for sites hosted on Wordpress.com
				useACF: true,
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				// Exclude specific pages or groups of pages using glob parameters
				// See: https://github.com/isaacs/minimatch
				// The example below will exclude the single `path/to/page` and all routes beginning with `category`
				// exclude: ["/page-name/*"],
				query: `
				{
					site {
						siteMetadata {
							siteUrl
						}
					}
			
					allSitePage {
						edges {
							node {
								path
							}
						}
					}
				}`
			}
		},
	],
}
