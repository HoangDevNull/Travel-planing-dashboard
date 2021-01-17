import React, { Component } from 'react';

import { PropTypes } from 'prop-types';
import { withStyles, Button } from '@material-ui/core';

const styles = () => ({
  disabled: {
    userSelect: 'auto !important',
    pointerEvents: 'auto !important',
    color: 'unset !important'
  }
});

class IconText extends Component {
  render() {
    const { label, classes, icon } = this.props;
    return (
      <Button
        startIcon={icon}
        classes={{
          disabled: classes.disabled
        }}
        component='div'
        disabled
      >
        {label}
      </Button>
    );
  }
}

IconText.propTypes = {
  label: PropTypes.element,
  icon: PropTypes.element
};

export default withStyles(styles)(IconText);
