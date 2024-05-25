const Notification = props => {
  //  Write your code here.
  const {src, text, className} = props
  return (
    <div className={`notification ${className}`}>
      <img src={src} alt='notification-icon' />
      <p>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='notification-container'>
      <Notification
        className='primary'
        text='Information Message'
        src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        className='success'
        text='Success Message'
        src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='warning'
        text='Warning Message'
        src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='danger'
        text='Error Message'
        src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
