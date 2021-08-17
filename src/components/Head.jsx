import { default as arrowLeft} from "../Image-Components/arrowLeft.svg";
import { default as arrowRight} from "../Image-Components/arrowRight.svg";

function Head(props){
  const {index,heading} = props.items;

    return(
        <section className="title" key={index}>
            <img src={arrowLeft} alt="Left-Arrow" onClick={() => props.changeCounter(props.counterVal - 1)} />
            <textarea cols="20" rows="1" name="heading" className="note-title" placeholder="Note Title" onChange={(e) => props.addHeading(index,e.target.value)}>{heading}</textarea>
            <img src={arrowRight} alt="Right-Arrow" onClick={() => props.changeCounter(props.counterVal + 1)}/>
        </section>
    );
}

export default Head;