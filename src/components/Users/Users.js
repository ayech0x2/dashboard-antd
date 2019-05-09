import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../../redux/actions/usersAction/fetchUsers";
import {Table} from "antd";

const Users = (props) => {
  const {usersList} = props;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email address",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address.street",
    }
  ];
  useEffect(() => {
    props.dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <Table title={()=> "Users"} bordered={true} dataSource={usersList} columns={columns}/>

    </div>
  );
};
const mapStateToProps = (reduxStore) => {
  return {
    usersList: reduxStore.userReducer.usersList,
  };
};
export default connect(mapStateToProps)(Users);
