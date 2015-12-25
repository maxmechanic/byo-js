/*global FileReader*/
import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Logo from './logo'

class App extends Component {
  constructor (context, props) {
    super(context, props)
    this.onDrop = this.onDrop.bind(this)
    this.state = {}
  }

  onDrop ([file]) {
    if (!file) return

    const reader = new FileReader()
    reader.onload = ({target: {result: src}}) =>
      this.setState({src})

    reader.readAsDataURL(file)
  }

  render () {
    return (
      <Dropzone style={{}} onDrop={this.onDrop}>
        <h1>~byo.js~</h1>
        <Logo src={this.state.src} />
        <p>drag and drop your js image</p>
      </Dropzone>
    )
  }
}

export default App
