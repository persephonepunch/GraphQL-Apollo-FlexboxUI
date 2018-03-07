import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;

class GoalForm extends Component {
  submitForm = () => {
    this.props
      .createGoal({
        variables: {
          name: this.name.value,
          resolutionId: this.props.resolutionId
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <table class="uk-table">
          <tbody>
              <tr>
                  <td width="75%">  <input class="uk-input uk-width-1-1 uk-form-large" blank placeholder="Instruction" type="text" ref={input => (this.name = input)} />
                  </td>
                        <td>  <button class="uk-button uk-button-secondary uk-button-large" default large onClick={this.submitForm}>Submit</button>
                  </td>

              </tr>
            </tbody>
        </table>

    </div>
    );
  }
}

export default graphql(createGoal, {
  name: "createGoal"
})(GoalForm);
