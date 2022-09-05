export default function Aesopp(props) {
  return (
    <div className="aesoppFable">
      Here's a short story from one of Aesopp's fables:
      <div className="imageContainer">
        <img src="http://3.bp.blogspot.com/-VVK_iksSjVc/UHbFG8mywTI/AAAAAAAAAsM/GAeH9Ra3u9Q/w1200-h630-p-nu/aesop+for+children.jpg" />
      </div>
      <div className="fableTextContainer">
        <div className="fableTitle"> {props.fable.title} </div>
      </div>
      <div className="fableTextContainer">
        <div className="fableText"> {props.fable.text} </div>
      </div>
      <div>{props.fable.lesson}</div>
    </div>
  );
}
