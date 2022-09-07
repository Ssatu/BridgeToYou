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
    <div>
      <button class = "float-right mt-4 mr-4 rounded-full w-fit bg-white shadow-xl first-line:text-black bg-white hover:bg-slate-200 text-2xl px-4 py-2"
        onClick={(e) => {
          navigate("/TherapistDashboard");
        }}
      >
        Back
      </button>
      <div class = "py-14 bg-blue-100 bg-gradient-to-b from-emerald-300 to-white">
        <div class = "rounded-full bg-white mx-80 outline-double outline-green-700 outline-4 outline-offset-3 ">
          <div class = "text-3xl py-4">
          Here's <span> George's </span> current progress:
          </div>
          <div class = "text-xl py-6">
          {completedSessions} out of {totalSessions} completed{" "}
          </div>
        </div>
      </div>
      <div class = "text-2xl outline-dashed outline-black outline-3 outline-offset-2 mx-auto py-4 font-semibold">
            Therapy Objective: {therapyObjective} 
      </div>
      <div class = "py-12 grid grid-cols-2 divide-gray-300">
        <div class = "mx-14 bg-white rounded-lg border border-gray-200 shadow-md">
          <div class = "mb-2 py-6 text-xl font-semibold tracking-tight text-gray-900">
            What they last completed:{" "}
            {lastWeek.map((achievement) => (
              <div class = "py-4 text-base font-normal text-gray-700 dark:text-gray-400">
                {achievement}
              </div>
            ))}
          </div>
        </div>
        <div class = "mx-14 bg-white rounded-lg border border-gray-200 shadow-md">
          {completedSessions < totalSessions ? (
            <form class = "mb-2 py-6 text-xl font-semibold tracking-tight text-gray-900">
              Completed a session? Give them an update on their progress!
              <div class = "py-2 outline-black outline-3">
                <label class = "py-4 px-4 text-base font-normal text-gray-700 dark:text-gray-400">
                  What did they accomplish last week?
                </label>
                <input class = "py-1 font-normal text-sm outline-dotted outline-2 outline-black"
                  type="text"
                  onChange={(e) => {
                    setAccomplish(e.target.value);
                  }}
                />
              </div>
              <div>
                <div class = "py-4">Which fable would you want to assign to them?</div>
                <div class = "py-1 mx-56 font-normal text-sm outline-2 outline-dotted outline-black">
                  <select onChange={(e) => setChoice(e.target.value)}>
                    <option value={0}>The Bald Man and the Fly</option>
                    <option value={1}>The Crow and the Pitcher</option>
                    <option value={2}>The Dog and the Hare</option>
                  </select>
                </div>

              </div>
              <button class="mt-6 text-white bg-sky-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => {
                  handleSubmit();
                }}
              >
                Submit their progress update!
              </button>
            </form>
          ) : (
            <div class = "mt-12 mx-4 font-semibold text-2xl text-green-800"> Congratulations, they've completed all their sessions!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TherapistSubmit;
