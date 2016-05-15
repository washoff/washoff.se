function create(React, {css, StyleSheet}) {
  const styles = StyleSheet.create({
    responsiveContainer: {
      '@media (min-width: 720px)': {
        margin: 'auto',
        width: 720
      }
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
