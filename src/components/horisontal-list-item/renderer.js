const HUNDRED_PERCENT = 100

function create(React, {StyleSheet, css}) {
  function render({children, itemsCount}) {
    const styles = StyleSheet.create({
      listItem: {
        display: 'inline-block',
        width: `${HUNDRED_PERCENT / itemsCount}%`,
        textAlign: 'center'
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
