import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'

const MainMenu = () => (

    <StaticQuery
        query={graphql`
            query {
                wordpressWpApiMenusMenusItems {
                    items {
                        wordpress_id
                        title
                        url
                        wordpress_children {
                            wordpress_id
                            title
                            url
                            wordpress_children {
                                wordpress_id
                                title
                                url
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <ul>
                {
                    /* need to work on url below */
                    /* also need to loop wordpress_children for however many levels deep */
                }
                {
                    data.wordpressWpApiMenusMenusItems.items.map((item) =>
                        <li key={item.wordpress_id}>
                            <Link to={item.url.replace('http://localhost:8888/MAMP-Sites/WP-API', '')}>
                                {item.title}
                            </Link>

                            {item.wordpress_children && 
                                <ul>
                                    {item.wordpress_children.map((item) => 
                                        <li key={item.wordpress_id}>
                                            <Link to={item.url.replace('http://localhost:8888/MAMP-Sites/WP-API', '')}>
                                                {item.title}
                                            </Link>
                                            {item.wordpress_children &&
                                                <ul>
                                                    {item.wordpress_children.map((item) =>
                                                        <li key={item.wordpress_id}>
                                                            <Link to={item.url.replace('http://localhost:8888/MAMP-Sites/WP-API', '')}>
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            }
                                        </li>
                                    )}
                                </ul>
                            }
                        </li>
                    )
                }
            </ul>
        )}
    />

)

export default MainMenu