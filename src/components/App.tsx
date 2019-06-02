import * as React from "react";
import "./../assets/scss/App.scss";
import MinutesPanel from "./MinutesPanel";
import HeaderBar from "./HeaderBar";

export interface AppProps {}

export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div className="app">
        <HeaderBar/>
        <MinutesPanel/>
      </div>
    );
  }
}
