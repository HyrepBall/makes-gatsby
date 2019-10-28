/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, Menu, Button, Icon } from "antd"
import { Link } from "gatsby"

import "./layout.css"
import "antd/dist/antd.css"
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const AppLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Главная
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link
              to="/new-post"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Новая запись
            </Link>
          </Menu.Item>
        </Menu>

        <div>
          <Button type="primary" size="large">
            Войти
          </Button>
        </div>
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
