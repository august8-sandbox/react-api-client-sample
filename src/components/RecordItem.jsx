import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui';

export default class RecordItem extends React.Component {
  render() {
    return (
      <ListItem key={this.props.indexNo} primaryText={this.props.primaryText} />
    );
  }
}

RecordItem.propTypes = {
  indexNo: PropTypes.number,
  primaryText: PropTypes.string
};
