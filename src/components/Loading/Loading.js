import React from "react";
import {Modal, Spin} from "antd";

import "./loading.scss";
import {connect} from "react-redux";

const Loading = (props) => {
  const {isLoadingBoxVisible} = props;
  console.log(isLoadingBoxVisible)
  return (
    <Modal
      className="loading-container"
      centered
      visible={isLoadingBoxVisible}
      align={{}}
      footer={null}

    >
      <div className="loading">
        <Spin size={"large"} tip="Loading..."/>
      </div>

    </Modal>

  );
};

const mapStateToProps = (reduxStore) => {
  return {
    isLoadingBoxVisible: reduxStore.helpers.loadingReducer.isLoadingBoxVisible,
  };
};
export default connect(mapStateToProps)(Loading);
