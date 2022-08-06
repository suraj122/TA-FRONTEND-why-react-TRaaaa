function Button(props) {
  function getStyles() {
    return `btn btn--${props.size || "medium"} btn--${props.type || "primary"}`;
  }
  return (
    <button
      disabled={props.disabled}
      className={getStyles()}
      onClick={props.onClickHandler}
    >
      {props.lebel || "button"}
    </button>
  );
}

export default Button;
