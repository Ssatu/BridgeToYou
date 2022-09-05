import { useEffect, useState } from "react";

export default function Emotions(props) {
  let positiveEmotions = [
    {
      category: "Happy",
      emotion: "Elated",
      icon: "😃",
    },
    {
      category: "Happy",
      emotion: "Excited",
      icon: "😁",
    },
    {
      category: "Happy",
      emotion: "Glad",
      icon: "🙂",
    },
    {
      category: "Happy",
      emotion: "Comforted/ Relieved",
      icon: "😌",
    },
    {
      category: "Happy",
      emotion: "Content",
      icon: "😊",
    },
    {
      category: "Proud",
      emotion: "Capable",
      icon: "😉",
    },
    {
      category: "Proud",
      emotion: "Pleased",
      icon: "🥰",
    },
    {
      category: "Proud",
      emotion: "Dignified",
      icon: "😁",
    },
    {
      category: "Proud",
      emotion: "Triumphant",
      icon: "🤗",
    },
    {
      category: "Confident",
      emotion: "Hopeful",
      icon: "👌",
    },
    {
      category: "Confident",
      emotion: "Strong",
      icon: "🤟",
    },
  ];
  let negativeEmotions = [
    {
      category: "Sad",
      emotion: "Disappointed",
      icon: "😞",
    },
    {
      category: "Sad",
      emotion: "Unhappy",
      icon: "🙁",
    },
    {
      category: "Sad",
      emotion: "Upset",
      icon: "☹️",
    },
    {
      category: "Sad",
      emotion: "Elated",
      icon: "😃",
    },
    {
      category: "Sad",
      emotion: "Hurt",
      icon: "😢",
    },
    {
      category: "Sad",
      emotion: "Miserable",
      icon: "😭",
    },
    {
      category: "Angry",
      emotion: "Angry",
      icon: "😡",
    },
    {
      category: "Angry",
      emotion: "Agitated",
      icon: "😠",
    },
    {
      category: "Angry",
      emotion: "Infuriated",
      icon: "😤",
    },
    {
      category: "Tired",
      emotion: "Worn out",
      icon: "😩",
    },
    {
      category: "Tired",
      emotion: "Drained",
      icon: "😪",
    },
    {
      category: "Tired",
      emotion: "Burdened",
      icon: "😓",
    },
    {
      category: "Worried",
      emotion: "Confused",
      icon: "😕",
    },
    {
      category: "Worried",
      emotion: "Uneasy",
      icon: "🙁",
    },
    {
      category: "Worried",
      emotion: "Worried",
      icon: "😣",
    },
    {
      category: "Worried",
      emotion: "Anxious",
      icon: "😰",
    },
    {
      category: "Worried",
      emotion: "Panicked",
      icon: "😨",
    },
    {
      category: "Worried",
      emotion: "Terrified",
      icon: "😱",
    },
  ];

  let neutralEmotions = [
    {
      category: "Realisation",
      emotion: "Understanding",
      icon: "😮",
    },
    {
      category: "Realisation",
      emotion: "Surprised",
      icon: "😦",
    },
    {
      category: "Realisation",
      emotion: "Astonished",
      icon: "😳",
    },
    {
      category: "Others",
      emotion: "Hard to talk?",
      icon: "🤐",
    },
    {
      category: "Others",
      emotion: "Indifferent",
      icon: "😒",
    },
    {
      category: "Interested",
      emotion: "Aware",
      icon: "😶",
    },
    {
      category: "Interested",
      emotion: "Curious",
      icon: "🤔",
    },
    {
      category: "Interested",
      emotion: "Amazed",
      icon: "🤭",
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
      {emotionPrompts.map((x) => {
        return (
          <div onClick={(e) => handleSelection(x)}>
            <p>{x.emotion}</p>
            <p>{x.icon}</p>
          </div>
        );
      })}
      <div onClick={(e) => changeEmotions()}> Show more </div>
      {selected.map((x) => (
        <p>{x.emotion}</p>
      ))}
    </div>
  );
}
