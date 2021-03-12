import * as React from "react"
import "../bootstrap.css"
import "../style.css"
import "../brand.css"
import tiaTrajeImg from "../images/tia_traje.png"
import HeaderBGImg from "../images/header_bg.png"
import ContributionsBGImg from "../images/contributions_bg.png"
import USImg from "../images/us.jpeg"
import LogoListaImg from "../images/logo-lista.png"
import LogoImg from "../images/logo.png"

const HeaderSection = {
  backgroundImage: `url(${HeaderBGImg})`,
}

const ContributionsSection = {
  backgroundImage: `url(${ContributionsBGImg})`,
}

const HeaderBrand = () => {
  return (
    <div className="header__title">
      <h1>Giovanna Grandón Caro</h1>
      <h2>CONSTITUYENTE DISTRITO 12</h2>
      <ul>
        <li>La Florida</li>
        <li>La Pintana</li>
        <li>Pirque</li>
        <li>Puente Alto</li>
        <li>San José de Maipo</li>
      </ul>
    </div>
  )
}

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Giovanna Grandón Caro</title>
      <header style={HeaderSection}>
        <div className="row">
          <div className="col-lg-7"><HeaderBrand /></div>
          <div className="col-lg-5 position-relative">
            <div className="p-absolute bottom-0 end-0">
              <a className="btn btn-warning btn-lg" href="#unete">ÚNETE</a>
              <a target="_blank" rel="noreferrer" className="btn btn-warning btn-lg" href="https://aportes.servel.cl/servel-aportes/inicio.xhtml">DONA</a>
            </div>
          </div>
        </div>
      </header>
      <section className="us-section">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 mb-2 mb-4">
            <h3>Porque no queremos más que el <strong>1%</strong> decida por nosotrxs</h3>
          </div>
          <div className="col-md-10 offset-md-1 offset-lg-3 col-lg-5">
            <img className="img-thumbnail" src={USImg} alt="Giovanna y Lista del Pueblo puño en alto" />
          </div>
        </div>
      </section>
      <section className="form-section" id="unete">
        <h3>Súmate al equipo Pikachu</h3>
        <img className="form-section__img d-md-block d-lg-none" src={tiaTrajeImg} alt="Logo" />
        <div className="row">
          <div className="col-lg-6">
            <iframe title="Formularios Súmate al equipo Pikachu" src="https://docs.google.com/forms/d/e/1FAIpQLSdv3XTs7P5xdPc1fZnzhbdDhlHh6HNbdbkPHkK13KZLNH14zg/viewform?embedded=true" width="100%" height="1650" frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img className="img-fluid" src={tiaTrajeImg} alt="Logo" />
          </div>
        </div>
      </section>
      <section style={ContributionsSection} className="contributions-section">
        <div className="row">
          <div className="col-lg-6">
            <h3>APORTA CON DINERO</h3>
            <p>Esta campaña es independiente, no está financiada por partidos políticos ni por grandes empresas. Nuestro trabajo es 100% voluntario, pero necesitamos ayuda para financiar materiales y cosas prácticas de la campaña. La contienda es desigual, pero con tu ayuda y la de otrxs podemos lograrlo. ¡Sólo el pueblo ayuda al pueblo!</p>
          </div>
          <div className="col-lg-6">
            <a target="_blank" rel="noreferrer" className="btn btn-success btn-lg" href="https://aportes.servel.cl/servel-aportes/inicio.xhtml">APORTA CON DINERO</a>
          </div>
        </div>
      </section>
      <footer>
        <div className="row">
          <div className="col-md-4 my-4"><img src={LogoImg} alt="Logo" /></div>
          <div className="col-md-4 my-4">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bailapikachu.oficial/" title="instagram">
              <svg aria-hidden="true" focusable="false" dataprefix="fab" dataicon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/tiapikachu" title="twitter">
              <svg aria-hidden="true" focusable="false" dataprefix="fab" dataicon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCEcmyTtxFIrUFiYpdhBUfJA" title="youtube">
              <svg aria-hidden="true" focusable="false" dataprefix="fab" dataicon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/tiapikachuconstituyente" title="facebook">
              <svg aria-hidden="true" focusable="false" dataprefix="fab" dataicon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <strong>2021 Giovanna Grandón</strong>
          </div>
          <div className="col-md-4 my-4">
            <img src={LogoListaImg} alt="Logo lista del Pueblo" />
          </div>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage
