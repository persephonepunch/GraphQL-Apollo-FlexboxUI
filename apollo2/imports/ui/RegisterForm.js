import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class RegisterForm extends Component {
  registerUser = e => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value
      },
      error => {
        if (!error) {
          this.props.client.resetStore();
        }
        console.log(error);
      }
    );
  };

  render() {
    return (


      <table class="uk-table">
        <tbody>
              <tr width="90%">
              <form onSubmit={this.registerUser}>
              <td width="40%">   <input class="uk-input uk-width-1-1 uk-form-large" blank placeholder="Email" type="email" ref={input => (this.email = input)} /></td>
              <td width="40%">   <input class="uk-input uk-width-1-1 uk-form-large" blank placeholder="Password" type="password" ref={input => (this.password = input)} /></td>
              <td width="18%">   <button  class="uk-button uk-button-secondary uk-button-large" type="submit">Register User</button></td>
              </form>

            </tr>
          </tbody>
      </table>



    );
  }
}
