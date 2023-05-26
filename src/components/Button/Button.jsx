import "./style.css";

const Button = (props) => {
  const { children } = props;
  const isFill = props.isFill;

  const style = isFill ? "button button--fill" : "button button--clear";

  return <button className={style}>{children}</button>;
};

export default Button;
