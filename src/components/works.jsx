export const Works = (props) => {
  return (
    <div id='works' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Works</h2>
          <p>
            These are my most recent professional accomplishments.
          </p>
        </div>
        <div className='row'>

          <div class="col-md-4"> 
            {/* <i class="fas fa-chart-line"></i> */}
            <i class="fa fa-money"></i>
            <div class="service-desc">
              <h3>Finance Stock Project</h3>
              <p>
                Ongoing project with the goal to create a web application that helps retail investors understand factors that contribute to safeguarding a portfolio's returns. 
                Topics include portfolio diversification, asset allocation, and an easy to use portfolio rebalancing tool.
              </p>
            </div>
          </div>

          <div class="col-md-4"> 
            <i class="fa fa-home"></i>
            <div class="service-desc">
              <h3>Elphi Inc</h3>
              <p>
                Software engineering internship using React to build a front-end use's permissions page. 
                Also, I led an ADA compliance project to ensure Elphi's software was compliant under accessibility guidelines. 
                The team discovered an area where the company was not compliant and implemented hotkeys to meet the standard.
              </p>
            </div>
          </div>

          <div class="col-md-4"> <i class="fa fa-tree"></i>
            <div class="service-desc">
              <h3>Stanford Tree Hacks</h3>
              <p>
                Stanford holds an annual hackathon that focuses on healthcare, sustainability, education, civic engagement, and social interconnectivity. 
                I led a group that focused on sustainability. We designed a website that calculated the amount of trees needed to be planted to offset a person's 
                commute to work depending on the distance and type of vehicle.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
