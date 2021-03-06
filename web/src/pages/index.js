import React from "react"
import { Link } from "gatsby"
import { Heading, Button, Text } from "rebass"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CreateAlbumButton from "../components/CreateAlbumButton"
import { useAuth } from "react-use-auth"

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Heading>Hi {isAuthenticated() ? user.nickname : null}</Heading>
        {isAuthenticated() ? (
          <CreateAlbumButton userId={user.sub} />
        ) : (
          <Button onClick={login}>Login</Button>
        )}
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
