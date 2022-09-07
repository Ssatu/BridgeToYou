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
    dispatch(updateEmotions(props.emotions));
    dispatch(updateFeedback(feedback));
    navigate("/PatientDashboard");
  }

  return (
    <div>
      <div>
        <div class="text-xl font-bold pt-12 pb-4">What made you feel these emotions ?</div>
        <div class="grid grid-cols-4 gap-10 mt-4 mx-40 pb-12">
          {props.emotions.map((emotion) => {
            return <p class="mx-8 rounded-3xl border-solid border-2 border-sky-300 text-xl">{emotion.emotion}</p>;
          })}
        </div>
      </div>

      {chosenPrompt.length === 0 ? (
        <div class="grid grid-cols-4 gap-10 mt-4 mx-40 pb-12">
          <div></div>
          <div class="col-span-2 bg-amber-100 border-solid border-2">
          {Array.from(selectedPrompts)
            .splice(0, 10)
            .map((x) => {
              return <div class="text-left italic py-4 pl-12 hover:font-bold" onClick={(e) => choosePrompt(x)}>{x}</div>;
            })}
          </div>
          <div></div>
        </div>
        
      ) : (
        <div class="grid grid-cols-4 gap-10 mt-4 mx-40 pb-12">
          <div></div>
          <div class="text-left italic py-8 px-12 col-span-2 bg-amber-100 border-solid border-2">
            <divv>{chosenPrompt}</divv>
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
              <div class="flex justify-center pt-20"> 
                <button class="w-60 p-2 rounded-full bg-white border-solid border-2 border-amber-300 hover:bg-slate-200" onClick={(e) => handleSubmit()}>
                  {" "}
                  Submit your feedback!{" "}
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}
