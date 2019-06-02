import * as React from "react";
import MinutesList from "./MinutesList";
import MinutesDetail from "./MinutesDetail";
import {minutesDetailSamples} from "../data/fake";
import MinutesEditor from "./MinutesEditor";

const MinutesPanel = (): JSX.Element => {
  const [selectedMinutes, setSelectedMinutes] = React.useState(0);
  const [editorMode, setEditorMode] = React.useState(false);

  const onSelection = (index: number): void => {
      setSelectedMinutes(index);
  };

  const editContent = (id: number, content: string): void => {

  };

  return (
    <div className="minutesPanel">
      {editorMode ? (
        <div className={"minutesPanel__editor"}>
          <MinutesEditor
            id={selectedMinutes}
            content={minutesDetailSamples[selectedMinutes].content}
            backToReaderMode={() => setEditorMode(false)}
          />
        </div>
      ) : (
        <div className="minutesPanel__reader">
          <MinutesList
            options={minutesDetailSamples.map(sample => sample.date)}
            onSelection={onSelection}
          />
          <MinutesDetail
            id={selectedMinutes}
            content={minutesDetailSamples[selectedMinutes].content}
            editContent={() => setEditorMode(true)}
          />
        </div>
      )}
    </div>
  );
};


export default MinutesPanel;