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
		Estamos trabalhando para que em Janeiro possamos aceitar a gestão de seus Maternodes MarteX.</p>
	 <p>Contatos via Telegram: <a href="https://t.me/gledsonssantos">@gledsonssantos</a>.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
//
    <script src="{% static 'js/vendors.min.js' %}"></script>
    <script src="{% static 'js/jquery.time-to.min.js' %}"></script>
    <script>
        $(document).ready(function() {
            $('#countdown').timeTo({
                timeTo: new Date(new Date('Mon Jan 06 2020 09:00:00 GMT-0300 (Brasilia Standard Time)')),
                displayDays: 2,
                displayCaptions: true,
                fontSize: 30,
                captionSize: 14,
                lang: 'pt'
            });
        });
    </script>
    </body>
//
  </Layout>
)

export default IndexPage
