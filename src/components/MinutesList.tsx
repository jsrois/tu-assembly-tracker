import * as React from "react";

interface Props {
  options: string[];
  onSelection: (index: number) => void;
}

const MinutesList = (props: Props): JSX.Element => {
  return (
    <div className="minutesList">
      {props.options.map((date, index) => (
        <div
          className="minutesList__item"
          onClick={event => props.onSelection(index)}
        >
          {date}
        </div>
      ))}
    </div>
  );
};
export default MinutesList;
