import pdf from './Lamberth_2021.pdf'
export const Resume = (props) => {

  const showPDF = () => {
    let value = <a target="_blank" rel="noreferrer" href={pdf}><a href={pdf} target="_blank" rel="noreferrer" class="btn btn-custom btn-lg" style={{margin: "30px"}}>View Resume in Full Screen</a></a>
    return value
  }
  
  return (
    <div id='resume' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 style={{paddingTop: '85px'}}>Resume</h2>
          <embed class="mobileHide" src={pdf} width="700px" height="910px"/>
          <br />
          {showPDF()}          
        </div>
      </div>
    </div>
  )
}
