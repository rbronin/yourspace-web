import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import { Skeleton, Alert } from "@material-ui/lab";
import { useLocation } from "react-router-dom";
import { useQuery, useToken } from "../../Config";
import AppBar from "../../Components/AppBar";
import { searchUser, clearSearchUser } from "../../store/actions/users/search";
import { connect } from "react-redux";
import UserCard from "../../Components/User/UserCard";

const Search = ({ searchUser, searchData, clearSearch }) => {
  const { search } = useLocation();
  const token = useToken();
  const query = useQuery();
  const [str, setStr] = useState(() => {
    const name = query.get("s") || "";
    return name;
  });
  useEffect(() => {
    const name = query.get("s");
    setStr(name);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    searchUser({
      name: str,
      token: token,
    });
    return () => {
      clearSearch();
    };
  }, [str]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <AppBar searchValue={str} />
      <Container maxWidth='lg'>
        {searchData.isLoading &&
          [1, 2, 3, 4].map((item) => {
            return (
              <Box width='100%' marginX='auto' marginY={2}>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  alignItems={"center"}
                  mb={1}
                  width='100%'
                >
                  <Skeleton animation='wave' variant='circle' width={40} height={40} />
                  <Skeleton animation='wave' variant='text' height={60} width='95%' />
                </Box>
              </Box>
            );
          })}
        {searchData.isDone && searchData.error !== null && (
          <Box display={"flex"} justifyContent='center' paddingY={2}>
            <Alert variant='outlined' severity='error'>
              {searchData.error?.response?.data?.error || "Some error occured"}
            </Alert>
          </Box>
        )}
        {searchData.data && searchData.data?.result?.length === 0 && (
          <Box display={"flex"} justifyContent='center' paddingY={4}>
            <Alert variant='outlined' severity='warning'>
              No User found!
            </Alert>
          </Box>
        )}

        {searchData.data &&
          searchData.data?.result?.length > 0 &&
          searchData.data?.result?.map((user) => <UserCard user={user} />)}
      </Container>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    searchData: state.SearchUserReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    searchUser: (payload) => {
      dispatch(searchUser(payload));
    },
    clearSearch: () => {
      dispatch(clearSearchUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
