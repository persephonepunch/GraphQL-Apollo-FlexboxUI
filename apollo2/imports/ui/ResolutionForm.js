import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

@graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ["Resolutions"]
  }
})
class ResolutionForm extends Component {
  static defaultProps = {
    hi: "heeeey"
  };

  submitForm = () => {
    this.props
      .createResolution({
        variables: {
          name: this.name.value
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (

  <div>

    <table class="uk-table">
      <tbody>
          <tr width="50%">

            <td width="40%">
                     <input class="uk-input uk-width-1-1 uk-form-large" blank placeholder="Instruction" type="text" ref={input => (this.name = input)} />
            </td>

            <td width="18%">    <button class="uk-button uk-button-secondary uk-button-large" onClick={this.submitForm}>Submit</button>
            </td>


          </tr>
        </tbody>
    </table>



      </div>
    );
  }
}

export default ResolutionForm;
