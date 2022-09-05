import ProgressBar from "./ProgressBar";

export default function Tracker(props) {
  return (
    <div>
      <div>{props.therapyObjective}</div>
      <div>
        {props.completedSessions} out of {props.totalSessions} completed
        <ProgressBar
          bgcolor="#6a1b9a"
          completed={(props.completedSessions / props.totalSessions) * 100}
        />
      </div>
      <div className="whatsDonePrevSession">
        <div>What you've accomplished last session!</div>
        {props.lastWeek.map((x) => {
          return <div className="accomplishments">{x}</div>;
        })}
      </div>
    </div>
  );
}
