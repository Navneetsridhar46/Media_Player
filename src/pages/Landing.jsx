import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    // navigate to home page 
    navigate('/home')
  }

  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='header row align-items-center m-3'>
          <div className='col-lg-5'>
            <h3>Welcome to <span className='text-warning'>MX Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player app. Will allow you to add abd remove their uploaded videos , also helps to arrange them im different categories by providing drag & drop functionalities</p>
            <button onClick={handleNavigate} className='btn btn-danger mt-3'>Get Started</button>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img style={{ width: '70%', height: '450px' }} src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" alt="Landing image" />
          </div>
        </div>
        <div className='features'>
          <h3 className='text-center fw-bolder'>Features</h3>
          <div className="row mt-3">
            <div className='col-lg-4'>
              <Card className='bg-info'>
                <Card.Img style={{ height: '300px' }} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
                <Card.Body style={{ height: '120px' }} className='p-2'>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload , view and remove the videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div style={{ height: '450px' }} className='col-lg-4'>
              <Card className='bg-info'>
                <Card.Img style={{ height: '300px' }} variant="top" src="https://i.pinimg.com/originals/e6/80/fc/e680fc8d1708ee1a5f9358ecb11b6e9c.gif" />
                <Card.Body style={{ height: '120px' }} className='p-2'>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                    User can categorize the videos according to their preferences using drag & drop feature.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div style={{ height: '450px' }} className='col-lg-4'>
              <Card className='bg-info'>
                <Card.Img style={{ height: '300px' }} variant="top" src="https://i.gifer.com/Nuhu.gif" />
                <Card.Body style={{ height: '120px' }} className='p-2'>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    Users can watch the history of viewed videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className='row video border p-4 mt-4 align-items-center'>
          <div className='col-lg-5'>
            <h3 className=''>Simple , Fast , Powerfull</h3>
            <p>Play Everything : <span>Relive the magic of 'Adscendo', the rise of a magnificent tale in the history of Tomorrowland.
              Discover the official fantasy story behind the Tomorrowland 2023 festival theme: The Rise of Adscendo</span></p>
            <p>Play Everything : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta corrupti totam alias amet, dolorum beatae praesentium maiores qui, delectus non labore porro sunt? Dignissimos hic aliquam neque deleniti dolorem?</span></p>
            <p>Play Everything : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta corrupti totam alias amet, dolorum beatae praesentium maiores qui, delectus non labore porro sunt? Dignissimos hic aliquam neque deleniti dolorem?</span></p>

          </div>
          <div className='col'></div>
          <div className='col-lg-6'>
            <iframe width="656" height="369" src="https://www.youtube.com/embed/t-3ErVKHgl4" title="Tomorrowland Belgium 2023 | Official Aftermovie" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing