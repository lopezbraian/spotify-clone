import "./label.css";

const Label = (props) => {
  const text = props.text;

  // type can either outlined or filled
  const type = props.type;

  return (
    <div
      className={
        type === "outlined" ? "label label-outlined" : "label label-filled"
      }
    >
      {text}
    </div>
  );
};

export default Label;
