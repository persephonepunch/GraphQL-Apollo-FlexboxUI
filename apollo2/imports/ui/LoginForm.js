import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";

export default class LoginForm extends Component {
  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      console.log(error);
      if (!error) {
        this.props.client.resetStore();
      }
    });
  };

  render() {
    return (

      <div>
        <table class="uk-table">
          <tbody>
            <tr width="90%">

                    <form onSubmit={this.login}>
                      <td width="40%">  <input class="uk-input uk-width-1-1 uk-form-large" placeholder="Email"type="email" ref={input => (this.email = input)} /> </td>
                      <td width="40%"> <input  class="uk-input uk-width-1-1 uk-form-large" placeholder="Password" type="password" ref={input => (this.password = input)} /></td>


                      <td width="18%">  <button class="uk-button uk-button-secondary uk-button-large" type="submit">Login User</button></td>
                    </form>


              </tr>
            </tbody>
        </table>

      </div>





    );
  }
}
