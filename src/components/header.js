import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
	<div className="container">
		<h1 style={{ margin: 0 }}>
			<Link to="/">
				Gatsby WordPress Template
			</Link>
		</h1>
	</div>
)

export default Header
