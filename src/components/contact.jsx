import { React } from 'react'

export const Contact = (props) => {
  
  // Getting year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please sent me an email if you want to get in touch. <br/>
                  I am currently looking for <strong>software engineering</strong> opportunities
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : '/'}>
                      <i className='fa fa-linkedIn'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.github : '/'}>
                      <i className='fa fa-github'></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id='footer' style={{backgroundColor: "#333"}}> */}
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; {year} Chance Lamberth
          </p>
        </div>
      </div>
    </div>
  )
}
