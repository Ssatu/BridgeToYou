import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  updateCompleted,
  updateLastWeek,
  updateFable,
} from "../features/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TherapistSubmit() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [therapyObjective, setTherapyObjective] = useState(user.therapyObj);
  const [totalSessions, setTotalSessions] = useState(user.totalSessions);
  const [completedSessions, setCompletedSessions] = useState(
    user.completedSessions
  );
  const [lastWeek, setLastWeek] = useState(user.lastWeek);
  const [accomplish, setAccomplish] = useState("");
  const [choice, setChoice] = useState(0);

  let fables = [
    {
      title: "The Bald Man and the Fly",
      text: "A FLY bit the bare head of a Bald Man who, endeavoring to destroy it, gave himself a heavy slap.  Escaping, the Fly said mockingly, 'You who have wished to revenge, even with death, the Prick of a tiny insect, see what you have done to yourself to add insult to injury?'  The Bald Man replied, 'I can easily make peace with myself, because I know there was no intention to hurt.  But you, an ill-favored and contemptible insect who delights in sucking human blood, I wish that I could have killed you even if I had incurred a heavier penalty.'",
      lesson: "Revenge will hurt the avenger",
    },
    {
      title: "The Crow and the Pitcher",
      text: "A Crow, half-dead with thirst, came upon a Pitcher which had once been full of water; but when the Crow put its beak into the mouth of the Pitcher he found that only very little water was left in it, and that he could not reach far enough down to get at it. He tried, and he tried, but at last had to give up in despair. Then a thought came to him, and he took a pebble and dropped it into the Pitcher.  Then he took another pebble and dropped it into the Pitcher. Then he took another pebble and dropped that into the Pitcher. Then he took another pebble and dropped that into the Pitcher. Then he took another pebble and dropped that into the Pitcher. Then he took another pebble and dropped that into the Pitcher. At last, at last, he saw the water mount up near him, and after casting in a few more pebbles he was able to quench his thirst and save his life.",
      lesson: "Little by little does the trick.",
    },
    {
      title: "The Dog and the Hare",
      text: "A HOUND having started a Hare on the hillside pursued her for some distance, at one time biting her with his teeth as if he would take her life, and at another fawning upon her, as if in play with another dog.  The Hare said to him, 'I wish you would act sincerely by me, and show yourself in your true colors.  If you are a friend, why do you bite me so hard? If an enemy, why do you fawn on me?'",
      lesson:
        "No one can be a friend if you know not whether to trust or distrust him. ",
    },
  ];

  function handleSubmit() {
    dispatch(updateFable(fables[choice]));
    dispatch(updateLastWeek(accomplish.split(".")));
    dispatch(updateCompleted(completedSessions + 1));
    navigate("/TherapistDashboard");
  }

  return (
    <>
      <div
        onClick={(e) => {
          navigate("/TherapistDashboard");
        }}
      >
        Back
      </div>
      <div>
        Here's <span>George's</span> current progress:
      </div>
      <div>
        {completedSessions} out of {totalSessions} completed{" "}
      </div>
      <div>Their therapy objective: {therapyObjective} </div>
      <div>
        What they last completed:{" "}
        {lastWeek.map((achievement) => (
          <div>{achievement}</div>
        ))}
      </div>
      <div>
        {completedSessions < totalSessions ? (
          <form>
            Completed a sesssion? Give them an update on their progress!
            <div>
              <label>What did they accomplish last week?</label>
              <input
                type="text"
                onChange={(e) => {
                  setAccomplish(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Which fable would you want to assign to them?</label>
              <select onChange={(e) => setChoice(e.target.value)}>
                <option value={0}>The Bald Man and the Fly</option>
                <option value={1}>The Crow and the Pitcher</option>
                <option value={2}>The Dog and the Hare</option>
              </select>
            </div>
            <div
              onClick={(e) => {
                handleSubmit();
              }}
            >
              Submit their progress update!
            </div>
          </form>
        ) : (
          <div>Congratulations, they've completed all their sessions!</div>
        )}
      </div>
    </>
  );
}

export default TherapistSubmit;
