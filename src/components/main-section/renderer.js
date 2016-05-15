function create(React) {
  function render({children}) {
    return (
      <div>
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
