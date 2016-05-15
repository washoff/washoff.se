import Aphrodite from 'aphrodite'
import FooterFactory from
  './components/footer/renderer'
import HoristontalListFactory from
  './components/horisontal-list/renderer'
import HoristontalListItemFactory from
  './components/horisontal-list-item/renderer'
import LinkFactory from
  './components/link/renderer'
import MainMenuFactory from
  './components/main-menu/renderer'
import MainSectionFactory from
  './components/main-section/renderer'
import React from 'react'
import ReactDom from 'react-dom'
import ResponsiveContainerFactory from
  './components/responsive-container/renderer'
import ThemeFactory from
  './theme'

function main() {
  const theme = ThemeFactory.create().theme
  const styles = Aphrodite.StyleSheet.create({
    app: {
      fontFamily: theme.primaryFontFamily
    }
  })
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
  const MainMenu = MainMenuFactory.create(
    React, Aphrodite, theme, HoristontalList, HoristontalListItem, Link
  ).render
  const MainSection = MainSectionFactory.create(React, Aphrodite, theme).render
  const ResponsiveContainer = ResponsiveContainerFactory.create(
    React, Aphrodite, theme
  ).render
  ReactDom.render(
    <div className={Aphrodite.css(styles.app)}>
      <ResponsiveContainer>
        <MainMenu>
        </MainMenu>
        <MainSection>
          TODO: About section. -MANI
        </MainSection>
        <MainSection>
          TODO: Details section. -MANI
        </MainSection>
        <Footer>
        </Footer>
      </ResponsiveContainer>
    </div>,
    document.querySelector('[data-app]')
  )
}

main()
