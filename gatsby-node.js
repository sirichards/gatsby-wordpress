/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        // The “graphql” function allows us to run arbitrary
        // queries against the local Contentful graphql schema. Think of
        // it like the site has a built-in database constructed
        // from the fetched data that you can run queries against.
        graphql(
        `           
            {
                allWordpressWpFrontpage {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
        `
        )
        .then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            const frontPageTemplate = path.resolve(`./src/templates/frontpage.js`)

            _.each(result.data.allWordpressWpFrontpage.edges, edge => {
                createPage({
                    path: `/`,
                    component: slash(frontPageTemplate),
                    context: {
                        id: edge.node.id,
                    },
                })

                let frontPageId = edge.node.id;
            })
        })
        .then(() => {
            graphql(
            `
                {
                    allWordpressPage {
                        edges {
                            node {
                                id
                                slug
                            }
                        }
                    }
                }
            `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                const pageTemplate = path.resolve(`./src/templates/page.js`)

                _.each(result.data.allWordpressPage.edges, edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    })
                })

            })
            .then(() => {
                graphql(
                `
                    {
                        allWordpressPost(limit: 1000) {
                            edges {
                                node {
                                    id
                                    slug
                                }
                            }
                        }
                    }
                `
                ).then(result => {
                    if (result.errors) {
                        reject(result.errors)
                    }

                    const postTemplate = path.resolve(`./src/templates/post.js`)

                    _.each(result.data.allWordpressPost.edges, edge => {
                        createPage({
                            path: `/posts/${edge.node.slug}/`,
                            component: slash(postTemplate),
                            context: {
                                id: edge.node.id,
                            },
                        })
                    })

                    resolve()
                })
            })
        })
    })
}