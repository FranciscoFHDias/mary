import React from 'react'
import { toast } from 'react-toastify'
import emailjs from 'emailjs-com'

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      formData: {
        from_name: '',
        reply_to: '',
        message_html: ''
      },
      errors: {}
    }
    this.sendEmail = this.sendEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  sendEmail(e) {
    e.preventDefault()

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        this.state.formData,
        process.env.USER_ID
      )
      .then(() => {
        toast.success('Thanks for contacting us, your message has been sent')
        this.setState({
          formData: { from_name: '', reply_to: '', message_html: '' }
        })
      })
      .catch( error => this.setState({errors: error.text}))
  }

  handleChange(e) {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({ formData })
  }

  
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-6">Contact us</h1>
          <p className="lead">
            Do you have any questions? Please do not hesitate to contact us
            directly. We will get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={this.sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="from_name"
              placeholder="eg: Donald"
              onChange={this.handleChange}
              value={this.state.formData.from_name}
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="reply_to"
              placeholder="eg: donaldduck@baldandsexy.com"
              onChange={this.handleChange}
              value={this.state.formData.reply_to}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message_html"
              placeholder="e.g. Hello world"
              onChange={this.handleChange}
              value={this.state.formData.message_html}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Contact
