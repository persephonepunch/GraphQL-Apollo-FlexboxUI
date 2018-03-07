import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import ResolutionForm from "./ResolutionForm";
import GoalForm from "./GoalForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (

<div class="uk-width-medium-5-6 uk-container-center uk-margin-large-top">














      {user._id ? (
        <button class="uk-button uk-button-secondary uk-button-large"
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          Logout
        </button>
      ) : (
        <div>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </div>
      )}
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>
            {resolution.name}
            <GoalForm resolutionId={resolution._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
