import * as React from "react";

export interface Props {
    id: number;
    content: string;
    editContent: () => void;
}

const MinutesDetail = (props: Props): JSX.Element => (
  <div className="detailedView">
    <div className="detailedView__minutes">{props.content}</div>
    <div className="detailedView__editButton" onClick={props.editContent}>Edit</div>
  </div>
);

export default MinutesDetail;