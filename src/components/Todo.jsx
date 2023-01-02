import PropTypes from "prop-types";

function Todo({ id, checked, action, toggle }) {
  return (
    <>
      <input id={id} type="checkbox" checked={checked} onChange={toggle} />
      <label htmlFor={id}>{action}</label>
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Todo;
