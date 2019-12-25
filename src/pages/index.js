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
    <p>Estamos trabalhando para que em Janeiro em 06/01/2020 possamos aceitar a gestão de seus Maternodes MarteX.</p>
    <p>Contatos via Telegram: <a href="https://t.me/gledsonssantos">@gledsonssantos</a>.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
/**   <Link to="/page-2/">Go to page 2</Link> */
  </Layout>
)

export default IndexPage
