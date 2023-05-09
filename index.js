const Button = (props) => {
  const { name, style } = props;
  return <button className={style}>{props.name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social buttons</h1>
    <div className="btn-container">
      <Button name="like" style="like-btn" />
      <Button name="comment" style="comment-btn" />
      <Button name="share" style="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
