const data = [
  'Wash Off',
  'Tjänster',
  'Kontakt'
]

function create(React, {StyleSheet, css}, theme, HorisontalList, HoristontalListItem, Link) {
  const styles = StyleSheet.create({
    mainMenu: {
      color: theme.secondaryColor,
      background: theme.secondaryBackgroundGradient,
      fontSize: theme.largeFontSize,
      padding: theme.largeSpacing
    }
  })
  function render() {
    return (
      <div className={css(styles.mainMenu)}>
        <HorisontalList>
        {
          data.map(function onMap(title) {
            return (
              <HoristontalListItem key={title} itemsCount={data.length}>
                <Link linkHref="#">
                  {title}
                </Link>
              </HoristontalListItem>
            )
          })
        }
        </HorisontalList>
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
