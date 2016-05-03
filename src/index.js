import FooterFactory from
  './components/footer/renderer'
import MainMenuFactory from
  './components/main-menu/renderer'
import React from 'react'
import ReactDom from 'react-dom'
import ResponsiveContainerFactory from
  './components/responsive-container/renderer'

function main() {
  const Footer = FooterFactory.create(React).render
  const MainMenu = MainMenuFactory.create(React).render
  const ResponsiveContainer = ResponsiveContainerFactory.create(React).render
  ReactDom.render(
    <ResponsiveContainer>
      <MainMenu>
      </MainMenu>
      <Footer>
      </Footer>
    </ResponsiveContainer>,
    document.querySelector('[data-app]')
  )
}

main()
