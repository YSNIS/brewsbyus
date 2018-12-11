import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonStyled from './styled/Button'

const ButtonWrapperStyled = styled.div`
  display: flex;

  button {
    margin: 0.5rem;
  }
`

const FormItem = styled.div`
  position: relative;
  max-width: 300px;
  margin-bottom: 0.5rem;

  label {
    position: absolute;
    font-size: 12px;
    top: 0.5rem;
    left: 0.7rem;
    color: ${({theme}) => theme.colors.orange};
  }

  input {
    width: 100%;
    padding: 1.25rem 0.5rem 0.25rem;

    &[disabled] {
      border-color: transparent;
      background: transparent;
      color: ${({theme}) => theme.colors.light};
    }
  }
`

const DashboardUserStyled = styled.div`

`

class DashboardUser extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired
  }

  state = {
    isDisabled: true,
    user: {...this.props.user}
  }

  toggleForm = (e) => {
    e.preventDefault()

    if (!this.state.isDisabled) {
      this.props.updateUser(this.state.user)
    }

    this.setState({isDisabled: !this.state.isDisabled })
  }

  handleChange = (e) => {
    this.setState({
      user: Object.assign(
        {},
        {...this.state.user},
        {[e.target.name]: e.target.value}
      )
    })
  }

  render() {
    const { user, isDisabled } = this.state
    let cta

    if (isDisabled) {
      cta = 'Edit Profile'
    } else {
      cta = 'Update Profile'
    }
    return (
      <DashboardUserStyled>
        <h1>User Profile</h1>
        <form>
          <FormItem>
            <label htmlFor='firstName'>First Name</label>
            <input disabled={this.state.isDisabled} type='text' name='firstName' value={user.firstName} onChange={this.handleChange}/>
          </FormItem>

          <FormItem>
            <label htmlFor='lastName'>Last Name</label>
            <input disabled={this.state.isDisabled} type='text' name='lastName' value={user.lastName} onChange={this.handleChange}/>
          </FormItem>

          <FormItem>
            <label htmlFor='email'>Email</label>
            <input disabled={this.state.isDisabled} type='text' name='email' value={user.email} onChange={this.handleChange}/>
          </FormItem>

          <FormItem>
            <label htmlFor='zipcode'>Zip Code</label>
            <input disabled={this.state.isDisabled} type='text' name='zipcode' value={user.zipcode} />
          </FormItem>

          <FormItem>
            <label htmlFor='phone'>Phone</label>
            <input disabled={this.state.isDisabled} type='text' name='phone' value={user.phone} onChange={this.handleChange}/>
          </FormItem>

          <ButtonWrapperStyled>
            <ButtonStyled onClick={this.toggleForm}>{cta}</ButtonStyled>

            <ButtonStyled>Request To Be A Brewer</ButtonStyled>
          </ButtonWrapperStyled>
        </form>
      </DashboardUserStyled>
    )
  }
}

export default DashboardUser
