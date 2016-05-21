function create(React, {css, StyleSheet}) {
  const styles = StyleSheet.create({
    responsiveContainer: {
      '@media (min-width: 720px)': {
        width: 720
      },
      paddingLeft: 10,
      paddingRight: 10,
      margin: 'auto'
    }
  })
  function render({children}) {
    return (
      <div className={css(styles.responsiveContainer)}>
        {children}
      </div>
    )
  }
  render.propTypes = {
    children: React.PropTypes.node.isRequired
  }
  return {
    render
  }
}

export default {
  create
}
