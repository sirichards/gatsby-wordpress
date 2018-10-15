import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './header'
import MainMenu from './MainMenu/MainMenu'
import './layout.css'
import 'stylesheets/main.scss';

const Layout = ({ children, data }) => (
	<>
		<Helmet htmlAttributes={
			{"lang": "en"}
		}>
				<title>{data.title}</title>
				{/* <meta name="description" content={data.description} /> */}
		</Helmet>
		<Header />
		<MainMenu />
		<div className="container">
			{children}
		</div>
	</>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout