import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RecordList from './RecordList';

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordList: [
        {
          recId: 1,
          description: '1レコード目'
        },
        {
          recId: 2,
          description: '2レコード目'
        },
        {
          recId: 3,
          description: '3レコード目'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title="React api client sample"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <RecordList recordList={this.state.recordList} />
      </div>
    );
  }
}
