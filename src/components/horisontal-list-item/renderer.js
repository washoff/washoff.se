const HUNDRED_PERCENT = 100

function create(React, {StyleSheet, css}) {
  function render({children, itemsCount}) {
    const styles = StyleSheet.create({
      listItem: {
        '@media (min-width: 600px)': {
          width: `${HUNDRED_PERCENT / itemsCount}%`,
          marginBottom: 0,
          display: 'inline-block'
        },
        display: 'block',
        width: '100%',
        textAlign: 'center',
        marginBottom: 50
      }
    })
    return (
      <li className={css(styles.listItem)}>
        {children}
      </li>
    )
  }
  render.propTypes = {
    children: React.PropTypes.node.isRequired,
    itemsCount: React.PropTypes.number.isRequired
  }
  return {
    render
  }
}

export default {
  create
}
