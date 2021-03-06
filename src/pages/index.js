import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá masternodeiros!</h1>
     <p>Bem vindos, este será o site da ASABRANCA, iniciaremos nossas atividades em breve.
		Estamos trabalhando para que em Janeiro possamos aceitar a gestão de seus Maternodes MarteX, escalar o serviço e lhes oferecer a melhor experiência possível.</p>
	 <p>Contatos via Telegram: <a href="https://t.me/gledsonssantos">@gledsonssantos</a>.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
