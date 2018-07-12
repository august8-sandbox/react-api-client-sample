import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui';
import RecordItem from './RecordItem';

export default class RecordList extends React.Component {
  render() {
    const recordList = this.props.recordList.map(step => {
      const record = <RecordItem indexNo={step.id} primaryText={step.name} />;
      return record;
    });

    return <List>{recordList}</List>;
  }
}

RecordList.propTypes = {
  recordList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};
