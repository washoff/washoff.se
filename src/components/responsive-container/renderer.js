function create(React) {
  function render({children}) {
    return (
      <div className="container">
        <div>
        </div>
        <div>
          {children}
        </div>
      </div>
    )
  }
  render.propTypes = {
    children: React.PropTypes.object.isRequired
  }
  return {
    render
  }
}

export default {
  create
}
