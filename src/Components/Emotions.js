import { useEffect, useState } from "react";

export default function Emotions(props) {
  let positiveEmotions = [
    {
      category: "Happy",
      emotion: "Elated",
      icon: "đ",
    },
    {
      category: "Happy",
      emotion: "Excited",
      icon: "đ",
    },
    {
      category: "Happy",
      emotion: "Glad",
      icon: "đ",
    },
    {
      category: "Happy",
      emotion: "Comforted/ Relieved",
      icon: "đ",
    },
    {
      category: "Happy",
      emotion: "Content",
      icon: "đ",
    },
    {
      category: "Proud",
      emotion: "Capable",
      icon: "đ",
    },
    {
      category: "Proud",
      emotion: "Pleased",
      icon: "đĨ°",
    },
    {
      category: "Proud",
      emotion: "Dignified",
      icon: "đ",
    },
    {
      category: "Proud",
      emotion: "Triumphant",
      icon: "đ¤",
    },
    {
      category: "Confident",
      emotion: "Hopeful",
      icon: "đ",
      color:"red"
    },
    {
      category: "Confident",
      emotion: "Strong",
      icon: "đ¤",
    },
  ];
  let negativeEmotions = [
    {
      category: "Sad",
      emotion: "Disappointed",
      icon: "đ",
    },
    {
      category: "Sad",
      emotion: "Unhappy",
      icon: "đ",
    },
    {
      category: "Sad",
      emotion: "Upset",
      icon: "âšī¸",
    },
    {
      category: "Sad",
      emotion: "Elated",
      icon: "đ",
    },
    {
      category: "Sad",
      emotion: "Hurt",
      icon: "đĸ",
    },
    {
      category: "Sad",
      emotion: "Miserable",
      icon: "đ­",
    },
    {
      category: "Angry",
      emotion: "Angry",
      icon: "đĄ",
      color:"red"
    },
    {
      category: "Angry",
      emotion: "Agitated",
      icon: "đ ",

    },
    {
      category: "Angry",
      emotion: "Infuriated",
      icon: "đ¤",
    },
    {
      category: "Tired",
      emotion: "Worn out",
      icon: "đŠ",
    },
    {
      category: "Tired",
      emotion: "Drained",
      icon: "đĒ",
    },
    {
      category: "Tired",
      emotion: "Burdened",
      icon: "đ",
    },
    {
      category: "Worried",
      emotion: "Confused",
      icon: "đ",
    },
    {
      category: "Worried",
      emotion: "Uneasy",
      icon: "đ",
    },
    {
      category: "Worried",
      emotion: "Worried",
      icon: "đŖ",
    },
    {
      category: "Worried",
      emotion: "Anxious",
      icon: "đ°",
    },
    {
      category: "Worried",
      emotion: "Panicked",
      icon: "đ¨",
    },
    {
      category: "Worried",
      emotion: "Terrified",
      icon: "đą",
    },
  ];

  let neutralEmotions = [
    {
      category: "Realisation",
      emotion: "Understanding",
      icon: "đŽ",
    },
    {
      category: "Realisation",
      emotion: "Surprised",
      icon: "đĻ",
    },
    {
      category: "Realisation",
      emotion: "Astonished",
      icon: "đŗ",
    },
    {
      category: "Others",
      emotion: "Hard to talk?",
      icon: "đ¤",
    },
    {
      category: "Others",
      emotion: "Indifferent",
      icon: "đ",
    },
    {
      category: "Interested",
      emotion: "Aware",
      icon: "đļ",
    },
    {
      category: "Interested",
      emotion: "Curious",
      icon: "đ¤",
    },
    {
      category: "Interested",
      emotion: "Amazed",
      icon: "đ¤­",
    },
  ];

  const [counter, setCounter] = useState(0);
  const [emotionPrompts, setEmotionPrompts] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    randomEmotions(counter);
    props.setEmotions(selected);
  }, [selected, counter]);

  function handleSelection(x) {
    console.log(x.emotion);
    setSelected(selected.concat([x]));
    setCounter(counter + 1);
    console.log(selected);
  }

  function changeEmotions() {
    setCounter(counter + 1);
  }

  function randomEmotions(counter) {
    let emotions = [];
    emotions[0] = positiveEmotions[counter % positiveEmotions.length];
    emotions[1] = neutralEmotions[counter % neutralEmotions.length];
    emotions[2] = negativeEmotions[(counter * 2) % negativeEmotions.length];
    emotions[3] = negativeEmotions[(counter * 2 + 1) % negativeEmotions.length];
    setEmotionPrompts(emotions);
  }

  return (
    <div>
      <div class="text-xl font-bold pt-12">Choose 4 emotions that best describe how you felt after the session</div>
      <div class="grid grid-cols-4 gap-10 mt-4 mx-40">
        {emotionPrompts.map((x) => {
          return (
            <div class="shadow-lg pt-4 pb-4 rounded-xl border-solid border-2 border-sky-300 hover:bg-slate-200" onClick={(e) => handleSelection(x)}>
              <p class="text-6xl p-4">{x.icon}</p>
              <p class="text-3xl">{x.emotion}</p>
            </div>
          );
        })}
      </div>
      <div class="flex justify-center pt-4 pb-4">
      <div class="w-32 p-2 rounded-full border-solid border-2 border-sky-300 hover:bg-slate-200" onClick={(e) => changeEmotions()}> Show more </div>
      </div>
      <div>
        <div class="grid grid-cols-3">
          <div></div>
          <div class="grid grid-cols-2">
            <div class="text-2xl">You chose:</div>
            <div class="text-xl text-left pl-16">
              {selected.map((x) => (
                <p>{x.emotion}{x.icon}</p>
              ))}
            </div>
          </div>
          
          <div></div>
        </div>
        
      </div>
      
      
    </div>
  );
}
