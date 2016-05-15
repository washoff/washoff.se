function create(React, {StyleSheet, css}) {
  const styles = StyleSheet.create({
    list: {
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }
  })
  function render({children}) {
    return (
      <div>
         <ul className={css(styles.list)}>
          {children}
        </ul>
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
