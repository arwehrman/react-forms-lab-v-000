import React from 'react';
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  changeMsg = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.changeMsg}/>
        ({this.props.maxChars - this.state.value.length} characters left)
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number
};

TwitterMessage.defaultProps = {
  maxChars: 140
};

export default TwitterMessage;
