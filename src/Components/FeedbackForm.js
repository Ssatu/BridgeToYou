import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmotions, updateFeedback } from "../features/userSlice";

export default function FeedbackForm(props) {
  const [selectedPrompts, setSelectedPrompts] = useState(new Set());
  const [chosenPrompt, setChosenPrompt] = useState("");
  const [feedback, setFeedback] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let rng = Math.random();
  let emotionCategories = [
    "Happy",
    "Proud",
    "Confident",
    "Sad",
    "Angry",
    "Tired",
    "Worried",
    "Realisation",
    "Others",
    "Interested",
  ];

  let prompts = [
    {
      text: "There was something on my mind throughout the session…",
      emotions: ["Worried", "Sad", "Angry", "Tired"],
    },
    {
      text: "I wanted to say that I…",
      emotions: ["Worried", "Sad", "Angry", "Tired"],
    },
    {
      text: "Hearing … made me think about…",
      emotions: ["Worried", "Sad", "Angry", "Realisation"],
    },
    {
      text: "I was not sure about… ",
      emotions: ["Worried", "Sad", "Angry"],
    },
    {
      text: "I did not know about…",
      emotions: ["Realisation", "Interested"],
    },
    {
      text: "I learnt that I …",
      emotions: [
        "Happy",
        "Proud",
        "Confident",
        "Sad",
        "Angry",
        "Tired",
        "Worried",
        "Realisation",
        "Others",
        "Interested",
      ],
    },
    {
      text: "I was surprised to hear…",
      emotions: ["Realisation", "Interested", "Others", "Proud"],
    },
    {
      text: "I came to terms with…",
      emotions: ["Realisation", "Happy", "Proud", "Confident"],
    },
    {
      text: "I understood that…",
      emotions: ["Realisation", "Happy", "Proud", "Confident", "Interested"],
    },
    {
      text: "Saying ... made me realise ...",
      emotions: [
        "Happy",
        "Proud",
        "Confident",
        "Sad",
        "Angry",
        "Tired",
        "Worried",
        "Realisation",
        "Others",
        "Interested",
      ],
    },
    {
      text: "Reflecting on… made me feel…",
      emotions: [
        "Happy",
        "Proud",
        "Confident",
        "Sad",
        "Angry",
        "Tired",
        "Worried",
        "Realisation",
        "Others",
        "Interested",
      ],
    },
    {
      text: "Recounting this memory made me think about…",
      emotions: [
        "Happy",
        "Proud",
        "Confident",
        "Sad",
        "Angry",
        "Tired",
        "Worried",
        "Realisation",
        "Others",
        "Interested",
      ],
    },
    {
      text: "I did not want to hear about …",
      emotions: ["Worried", "Sad", "Angry", "Tired"],
    },
    {
      text: "I could not understand…",
      emotions: ["Worried", "Sad", "Angry", "Tired"],
    },
    {
      text: "I wish I…",
      emotions: ["Worried", "Sad", "Angry", "Tired", "Realisation"],
    },
    {
      text: "I appreciated …. And felt that…",
      emotions: ["Interested", "Proud", "Happy", "Confident"],
    },
    {
      text: "I liked … and wanted to…",
      emotions: ["Interested", "Proud", "Happy", "Confident"],
    },
    {
      text: "I foresee myself…",
      emotions: [
        "Happy",
        "Proud",
        "Confident",
        "Sad",
        "Angry",
        "Tired",
        "Worried",
        "Realisation",
        "Others",
        "Interested",
      ],
    },
    {
      text: "I want to know more about…",
      emotions: [
        "Happy",
        "Proud",
        "Confident",
        "Sad",
        "Angry",
        "Tired",
        "Worried",
        "Realisation",
        "Others",
        "Interested",
      ],
    },
    {
      text: "I expected myself to…",
      emotions: [
        "Happy",
        "Proud",
        "Confident",
        "Sad",
        "Angry",
        "Tired",
        "Worried",
        "Realisation",
        "Others",
        "Interested",
      ],
    },
  ];

  useEffect(() => {
    props.emotions.forEach((emotion) => {
      let category = emotion.category;
      prompts.forEach((prompt) => {
        if (prompt.emotions.includes(category)) {
          setSelectedPrompts((prev) => new Set([...prev, prompt.text]));
        }
      });
    });
  }, []);

  function choosePrompt(text) {
    setChosenPrompt(text);
  }

  function handleSubmit() {
    dispatch(updateEmotions(props.emotions.map((e) => e.emotion)));
    dispatch(updateFeedback(feedback));
    navigate("/PatientDashboard");
  }

  return (
    <div>
      <div>
        What made you feel these feelings?
        <div>
          {props.emotions.map((emotion) => {
            return <p>{emotion.emotion}</p>;
          })}
        </div>
      </div>

      {chosenPrompt.length === 0 ? (
        <div>
          {Array.from(selectedPrompts)
            .splice(0, 10)
            .map((x) => {
              return <div onClick={(e) => choosePrompt(x)}>{x}</div>;
            })}
        </div>
      ) : (
        <div>
          <div>{chosenPrompt}</div>
          <form>
            <label for="explanation">Tell us more!</label>
            <br />
            <input
              type="text"
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
              value={feedback}
            />
            <button onClick={(e) => handleSubmit()}>
              {" "}
              Submit your feedback!{" "}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
