export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p style={{marginBottom: '10px'}}>{props.data ? props.data.paragraph1 : 'Loading'}</p>
                <p style={{marginBottom: '60px'}}>{props.data ? props.data.paragraph2 : 'Loading'}</p>
                <a
                  href='#Languages'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  {/* Learn More */}
                  <i class="fa fa-chevron-down"></i>
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
