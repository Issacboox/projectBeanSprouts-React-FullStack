// import React from 'react'
import '@/App.css'; // Import your custom styles

type Props = {}

export default function Errors({ }: Props) {
  return (
    <div className='content'>
      {/* <h3 classNameName="content">Error Page not found 404</h3> */}
      <section className="page_404">
        <div className="errrorpage">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>


                </div>

                <div className="contant_box_404">
                  <h3 className="h2">
                    Look like you're lost
                  </h3>

                  <p>the page you are looking for not avaible!</p>
                  <a href="/" className="link_404">Go to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}