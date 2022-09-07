import ProgressBar from "./ProgressBar";

export default function Tracker(props) {
  return (
    <div>
      <div class="flex justify-center items-center">
        <div class="items-center text-xl rounded-lg bg-sky-300 w-auto px-20">
          <div class="pt-4"> {props.therapyObjective} </div>
          <div class="pt-2 pb-4">
            {props.completedSessions} out of {props.totalSessions} completed
            <ProgressBar
              bgcolor="#6a1b9a"
              completed={(props.completedSessions / props.totalSessions) * 100}
            />
          </div>
        </div>
      </div>
    

      <div className="whatsDonePrevSession">
        <div class="pt-8 pb-4">What you've accomplished last session!</div>
        {props.lastWeek.map((x) => {
          return <div className="accomplishments">{x}</div>;
        })}
      </div>
    </div>
  );
}
