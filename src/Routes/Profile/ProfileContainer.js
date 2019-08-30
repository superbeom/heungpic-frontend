import React from "react";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { GET_USER, LOG_OUT } from "./ProfileQueries";

export default withRouter(({ match: { params: { username } } }) => {
  const { loading, data, error } = useQuery(GET_USER, {
    variables: { username }
  });

  const [logOut] = useMutation(LOG_OUT);

  if (error) {
    return (
      <Switch>
        <Redirect to="/notfound" />
      </Switch>
    );
  }

  return <ProfilePresenter loading={loading} data={data} logOut={logOut} />;
});
