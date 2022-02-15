const Button = (props) => {
  const { as: Component = "button", className, ...otherProps } = props;

  return <Component {...otherProps} />;
};

export default Button;
