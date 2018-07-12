import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RecordList from './RecordList';
import axios from 'axios';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordList: [
        {
          id: '1',
          name: 'Default User'
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get(API_ENDPOINT)
      .then(res => {
        const dataList = res.data;
        this.setState({ recordList: dataList });
      })
      .catch(function(error) {
        console.log(error);
      });
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
