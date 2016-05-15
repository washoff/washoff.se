function create(React, {StyleSheet, css}, theme) {
  const styles = StyleSheet.create({
    link: {
      fontFamily: theme.primaryFontFamily,
      color: theme.secondaryColor,
      textDecoration: 'none',
      ':hover, :focus': {
        textDecoration: 'underline'
      }
    }
  })
  function render({children, linkHref}) {
    return (
      <a href={linkHref} className={css(styles.link)}>
        {children}
      </a>
    )
  }
  render.propTypes = {
    children: React.PropTypes.node.isRequired,
    linkHref: React.PropTypes.string.isRequired
  }
  return {
    render
  }
}

export default {
  create
}
