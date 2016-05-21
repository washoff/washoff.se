import Aphrodite from 'aphrodite'
import FooterFactory from
  './components/footer/renderer'
import HoristontalListFactory from
  './components/horisontal-list/renderer'
import HoristontalListItemFactory from
  './components/horisontal-list-item/renderer'
import LinkFactory from
  './components/link/renderer'
/* NOTE: Not in use yet. import MainMenuFactory from
  './components/main-menu/renderer' */
import React from 'react'
import ReactDom from 'react-dom'
import ResponsiveContainerFactory from
  './components/responsive-container/renderer'
import ThemeFactory from
  './theme'
import johnnyProfile from './johnny-profile.jpg'
import logotype from './logotype.png'

function main() {
  const theme = ThemeFactory.create().theme
  /* eslint-disable no-magic-numbers */
  const styles = Aphrodite.StyleSheet.create({
    app: {
      fontFamily: theme.primaryFontFamily
    },
    logotype: {
      maxWidth: 512,
      width: '90%',
      height: 'auto',
      margin: [0, 'auto'],
      display: 'block'
    },
    profile: {
      height: 128,
      width: 'auto',
      borderStyle: 'solid',
      borderWidth: 0,
      borderRadius: '50%',
      display: 'block',
      marginLeft: 5,
      borderColor: theme.primaryColor
    },
    quote: {
      fontFamily: theme.secondaryFontFamily
    },
    serviceList: {
      listStyleType: 'none',
      margin: 0,
      padding: 0
    },
    serviceListItem: {
      display: 'inline-block',
      width: '50%'
    },
    neutralSection: {
      background: theme.neutralSectionBackgroundColor,
      paddingBottom: 15,
      paddingTop: 15,
      color: theme.primaryColor
    }
  })
  /* eslint-enable no-magic-numbers */
  const HoristontalList = HoristontalListFactory.create(
      React, Aphrodite
    ).render
  const HoristontalListItem = HoristontalListItemFactory.create(
      React, Aphrodite, theme
    ).render
  const Link = LinkFactory.create(React, Aphrodite, theme).render
  const Footer = FooterFactory.create(
    React, Aphrodite, theme, HoristontalList, HoristontalListItem, Link
  ).render
  /* TODO: const MainMenu = MainMenuFactory.create(
    React, Aphrodite, theme, HoristontalList, HoristontalListItem, Link
  ).render -MANI */
  const ResponsiveContainer = ResponsiveContainerFactory.create(
    React, Aphrodite, theme
  ).render
  ReactDom.render(
    <div className={Aphrodite.css(styles.app)}>
        <div className={Aphrodite.css(styles.neutralSection)}>
        <ResponsiveContainer>
           <img src={logotype} className={Aphrodite.css(styles.logotype)}/>
          <h2 className={Aphrodite.css(styles.quote)}>
            Välkomna till Wash off!
          </h2>
          </ResponsiveContainer>
        </div>
        <div className={Aphrodite.css(styles.neutralSection)}>
        <ResponsiveContainer>
          <p>
            Med lång erfarenhet inom klottersanering och underhåll av fastigheter
            så är vi ett av de mest ledande företagen inom klottersanering,
            skuggsanering samt klotterskydd.
            Vi hjälper dig att skydda din fastighet eller klottrat område.
            Vi siktar mot ett renare Sverige fritt från skadegörelse
            och strävar efter att göra det på ett miljövänligt sätt.
          </p>
        </ResponsiveContainer>
        </div>
        <div className={Aphrodite.css(styles.neutralSection)}>
        <ResponsiveContainer>
        <h2>Varför välja oss?</h2>
          <p>
           Vi tar bort skuggor som kan finnas kvar efter tidigare saneringar.
           Vi lägger ner den lilla extra tiden som krävs för att få en
           99% borttagning av skadegörelse.
            Vi har ett brett utbud av tjänster vilket innebär att man kan
            anlita ett företag för olika typer av arbeten inom
            underhåll av fastigheter.
            Efter sanering erbjuder vi också återställning av ytor på de
            skadade områdena samt klotterskydd som förhindrar större
            skada vid sanering.
            Vi är måna om våra kunder och lägger ner kärlek i det
            arbete vi utför.
            Ni kommer ställa er frågan, var fanns klottret?
            Kan en fastighet se så ren ut?
          </p>
        </ResponsiveContainer>
        </div>
        <div className={Aphrodite.css(styles.neutralSection)}>
        <ResponsiveContainer>
          <h2>Tjänster</h2>
            <ul className={Aphrodite.css(styles.serviceList)}>
              {
                [
                  'Klotterkonsultering',
                  'Rivning',
                  'Klottersanering',
                  'Lokalstäd',
                  'Klotterskydd',
                  'Flyttstäd',
                  'Taktvätt',
                  'Byggstäd',
                  'Fasadtvätt',
                  'Fordonsstäd',
                  'Högtryckstvätt',
                  'Snöskottning'
                ].map(function onMap(serviceName) {
                  return (
                    <li key={serviceName} className={Aphrodite.css(styles.serviceListItem)}>
                      {serviceName}
                    </li>
                  )
                })
              }
            </ul>
        </ResponsiveContainer>
        </div>
        <div className={Aphrodite.css(styles.neutralSection)}>
        <ResponsiveContainer>
          <img src={johnnyProfile} className={Aphrodite.css(styles.profile)} />
          <h2>Johnny Arstrand VD på Wash Off</h2>
          <p>
            Jag är en person med glimten i ögat och ger det lilla
            extra till kunden.
            Jag är målinriktad och ser inga problem utan bara möjligheter.
            Jag gillar att ha många bollar i luften och när jag gör något
            så gör jag det till 110%. Jag har lärt mig genom livet att
            hårt arbete lönar sig och vill alltid göra mitt bästa
            gentemot kunden.
            Är en kärleksfull familjefar som gärna sprider min
            glädje till alla runt omkring mig.
          </p>
        </ResponsiveContainer>
        </div>
        <Footer>
        </Footer>
    </div>,
    document.querySelector('[data-app]')
  )
}

main()
