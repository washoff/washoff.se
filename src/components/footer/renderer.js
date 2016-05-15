const data = [
  {
    labelText: 'Telefon',
    labelIcon: 'fa fa-phone',
    linkText: '070 090 88 33',
    linkHref: 'tel:0700908833'
  },
  {
    labelText: 'E-mail',
    labelIcon: 'fa fa-envelope',
    linkText: 'johnny.arstrand@washoff.se',
    linkHref: 'mailto:johnny.arstrand@washoff.se'
  },
  {
    labelText: 'Instagram',
    labelIcon: 'fa fa-instagram',
    linkText: 'wash_off_sanering',
    linkHref: 'https://www.instagram.com/wash_off_sanering/'
  }
]

function create(React, {StyleSheet, css}, theme, HorizontalList, HorizontalListItem, Link) {
  const styles = StyleSheet.create({
    footer: {
      color: theme.secondaryColor,
      background: theme.secondaryBackgroundGradient,
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 15,
      paddingRight: 15
    },
    icon: {
      margin: 5,
      fontSize: theme.extraLargeFontSize,
      verticalAlign: 'middle'
    }
  })
  function render() {
    return (
      <div className={css(styles.footer)}>
        <HorizontalList>
        {data.map(function onMap(footerItemData) {
          return (
            <HorizontalListItem
            key={footerItemData.labelText}
            itemsCount={data.length}>
              <i className={
                `${css(styles.icon)} ${footerItemData.labelIcon}`
              }>
              </i>
              <Link linkHref={footerItemData.linkHref}>
                {footerItemData.linkText}
              </Link>
            </HorizontalListItem>
          )
        })}
        </HorizontalList>
      </div>
    )
  }
  return {
    render
  }
}

export default {
  create
}
