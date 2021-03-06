import React, { Component } from 'react'

export default class Searchbar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()

  // Fetch weather data
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a 5 day forecast'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'><button type='submit' className='btn btn-secondary'> Submit </button></span>
      </form>
    )
  }
}
