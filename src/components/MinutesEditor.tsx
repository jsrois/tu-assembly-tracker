import * as React from "react";
import {Editor, EditorState} from "draft-js";

interface Props {
    id: number;
    content: string;
    backToReaderMode: () => void;
}

const MinutesEditor = (props: Props): JSX.Element => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  return (
    <div className="editorView">
      <div className="editorView__window">
        <Editor
          editorState={editorState}
          onChange={editorState => setEditorState(editorState)}
        />
      </div>
      <div
        className="editorView__closeButton"
        onClick={props.backToReaderMode}
      >
        Back to reader
      </div>
    </div>
  );
};


export default MinutesEditor;