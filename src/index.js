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
// TODO: import logotype from './logotype.png'

function main() {
  const theme = ThemeFactory.create().theme
  const styles = Aphrodite.StyleSheet.create({
    app: {
      fontFamily: theme.primaryFontFamily
    },
    quote: {
      fontFamily: theme.secondaryFontFamily
    },
    neutralSection: {
      background: theme.neutralSectionBackgroundColor,
      paddingBottom: 15,
      paddingTop: 15,
      color: theme.primaryColor
    },
    section1: {
      background: theme.section1BackgroundColor,
      paddingBottom: 15,
      paddingTop: 15,
      color: theme.secondaryColor
    },
    section2: {
      background: theme.section2BackgroundColor,
      paddingBottom: 15,
      paddingTop: 15
    },
    section3: {
      background: theme.section3BackgroundColor,
      paddingBottom: 15,
      paddingTop: 15
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
        <MainMenu>
        </MainMenu>
        <div className={Aphrodite.css(styles.neutralSection)}>
        <ResponsiveContainer>
          <h2>
            Klottersanering i Strängnäs
          </h2>
          <p>
            Wash Off erbjuder högkvalitativ klottersanering i Strängnäs med omnejd.
          </p>
          </ResponsiveContainer>
        </div>
        <div className={Aphrodite.css(styles.section1)}>
          <ResponsiveContainer>
          <h1>
            Wash Off
          </h1>
          <h2 className={Aphrodite.css(styles.quote)}>
            För att bra kvalitet lönar sig i längden.
          </h2>
          </ResponsiveContainer>
        </div>
        <div className={Aphrodite.css(styles.neutralSection)}>
        <ResponsiveContainer>
          <h2>
            Tjänster
          </h2>
          <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo dolor, finibus et nibh in, finibus maximus eros. Nam nec egestas tortor. Maecenas rhoncus odio nec turpis iaculis tempus. Sed consequat eros in sem interdum fermentum. Sed maximus, orci at porttitor sagittis, neque nulla ornare nisl, non blandit diam ipsum et sapien. Nullam enim purus, laoreet ac hendrerit at, ullamcorper sed lectus. Nullam placerat erat a aliquet vehicula.
          </p>
          <p>
Ut vitae ipsum hendrerit, accumsan sem eu, accumsan arcu. Morbi ullamcorper, augue at sodales pharetra, neque neque maximus massa, a pulvinar odio libero ut nunc. Vestibulum non nulla libero. In mattis lectus sem, quis pharetra elit posuere vel. Etiam volutpat at nisl ut facilisis. Donec eleifend ipsum id lectus accumsan, nec mattis leo volutpat. Ut eu elit ac massa egestas rhoncus sit amet et nunc. Integer id accumsan augue. Ut euismod sollicitudin turpis quis mattis. Donec porta vitae eros sit amet consectetur.
</p>
<p>
Sed quis molestie enim, a elementum augue. Vestibulum faucibus, est quis lobortis laoreet, lectus purus ullamcorper velit, ac molestie velit nunc quis nisi. In eget nisl sagittis, varius ipsum in, viverra nibh. Donec maximus quam ac lorem viverra tincidunt. Donec viverra augue lorem, vitae sagittis enim volutpat ut. Vivamus nulla metus, pulvinar sed elit nec, maximus tristique quam. Nunc eu commodo velit. Pellentesque eget sem hendrerit, luctus velit sit amet, sagittis nisl. In placerat porttitor orci vitae sagittis. Proin vel sapien pulvinar, aliquam velit ac, aliquam erat. Maecenas velit purus, pretium sit amet dictum ut, maximus sed odio. Donec vitae leo sit amet nunc faucibus cursus. Pellentesque faucibus ac felis nec ultrices. Vestibulum odio orci, sagittis sed ipsum ut, convallis elementum elit. Sed et ullamcorper purus. Etiam porttitor finibus lectus, vitae dapibus tortor mattis eget.
</p>
<p>
Etiam nunc enim, fringilla a ex sit amet, eleifend sodales risus. Maecenas et semper sapien. Integer id justo ac lorem lacinia laoreet id sed purus. Phasellus sollicitudin ex dignissim diam lacinia lacinia. Etiam vitae ante ac nisi porta molestie sit amet a nisl. Nullam volutpat hendrerit velit id consequat. Aliquam eleifend lorem augue, a tempus metus ullamcorper quis. Morbi commodo consequat nisl, eu sagittis massa rhoncus ut. Suspendisse fringilla nisl turpis, eu commodo sem porta rutrum.
</p>
<p>
Suspendisse rhoncus in dolor ac ullamcorper. Sed vel placerat augue, nec tempus elit. Aliquam sagittis libero quis massa scelerisque, quis luctus nisl porttitor. Nunc blandit fermentum risus, eget pretium velit tincidunt non. Suspendisse interdum tincidunt tempus. Nullam vel eleifend massa. Donec ante tortor, consequat quis mauris ac, pretium luctus dolor.
</p>
          </div>
          </ResponsiveContainer>
        </div>
        <div className={Aphrodite.css(styles.section1)}>
        <ResponsiveContainer>
          <h2>
            Vill du veta mer?
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo dolor, finibus et nibh in, finibus maximus eros. Nam nec egestas tortor. Maecenas rhoncus odio nec turpis iaculis tempus. Sed consequat eros in sem interdum fermentum. Sed maximus, orci at porttitor sagittis, neque nulla ornare nisl, non blandit diam ipsum et sapien. Nullam enim purus, laoreet ac hendrerit at, ullamcorper sed lectus. Nullam placerat erat a aliquet vehicula.
          </p>
          <p>
Ut vitae ipsum hendrerit, accumsan sem eu, accumsan arcu. Morbi ullamcorper, augue at sodales pharetra, neque neque maximus massa, a pulvinar odio libero ut nunc. Vestibulum non nulla libero. In mattis lectus sem, quis pharetra elit posuere vel. Etiam volutpat at nisl ut facilisis. Donec eleifend ipsum id lectus accumsan, nec mattis leo volutpat. Ut eu elit ac massa egestas rhoncus sit amet et nunc. Integer id accumsan augue. Ut euismod sollicitudin turpis quis mattis. Donec porta vitae eros sit amet consectetur.
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
