export default function Aesopp(props) {
  return (
    <div className="aesoppFable">
      <div class="text-2xl">Here's a short story from one of Aesopp's fables:</div>
      
      <div className="imageContainer" class="flex justify-center pt-4">
        <img src="http://3.bp.blogspot.com/-VVK_iksSjVc/UHbFG8mywTI/AAAAAAAAAsM/GAeH9Ra3u9Q/w1200-h630-p-nu/aesop+for+children.jpg" />
      </div>
      <div className="fableTextContainer" class="font-bold text-xl pt-4">
        <div className="fableTitle"> {props.fable.title} </div>
      </div>
      <div className="fableTextContainer" class="text-left font-normal">
        <div className="fableText"> {props.fable.text} </div>
      </div>
      <div class="italic pt-4">{props.fable.lesson}</div>
    </div>
  );
}
