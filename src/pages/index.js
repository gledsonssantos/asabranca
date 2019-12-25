import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá masternodeiros!</h1>
    <p>Bem vindos, este será o site da ASABRANCA Serviços Digitais, iniciaremos nossas atividades em breve.</p>
    <p>Estamos trabalando para que em Janeiro possamos aceitar a gestão de seus Maternodes MarteX.</p>
    <p></p>
    <p>Contatos via Telegram: @gledsonssantos.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
#   <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
