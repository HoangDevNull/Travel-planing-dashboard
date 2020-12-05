import React from 'react';

import Loading from 'components/common/Loading';

export const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        isDoneLoading: false
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1800);
    }

    render() {
      const { isLoading } = this.state;
      return (
        <>
          <Loading isLoading={isLoading} />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withLoading;
