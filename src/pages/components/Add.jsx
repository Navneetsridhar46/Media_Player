import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../services/allAPI';

function Add({setUploadVideoResponse}) {
    const [uploadVideo, setUploadVideo] = useState({
        caption: "", imageURL: "", youtubeLink: ""
    })
    const [show, setShow] = useState(false);

    const handleClose = () => {
        // clear textbox data after cancel click 
        setShow(false)
        setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
    }
    const handleShow = () => setShow(true);

    // console.log(uploadVideo);

    const getYoutubeEmbedLink = (link) => {
        if(link.includes("v=")){
            let videoId = link.split("v=")[1].slice(0,11)
            setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId }`})
        }else{
            setUploadVideo({...uploadVideo,youtubeLink:""})
            alert("Invalid youtube link")
        }
    }

    const handleUpload = async () =>{
        // store uploaded video in http://localhost:3000/videos
        const {caption,imageURL,youtubeLink} = uploadVideo
        if(caption && imageURL && youtubeLink){
            // proceed to store video  from http://localhost:5173/home to http://localhost:3000/videos
            const result = await uploadVideoAPI(uploadVideo)
            // console.log(result);
            if(result.status>=200 && result.status<300){
                alert(`Video '${result.data.caption}' uploaded successfully`)
                setUploadVideoResponse(result.data)
                handleClose()
            }else{
                alert("API call failed.. Please try again after sometime")
            }
        }else{
            alert("Enter data properly!!!")
        }
    }

    return (
        <>
            <div style={{ fontSize: '20px' }} className='text-primary d-flex'>
                <h4> Upload Video</h4>
                <button onClick={handleShow} style={{ width: '44px', height: '44px' }} className='btn bg-secondary ms-2 rounded-circle'><i style={{ height: '18px' }} className="fa-solid fa-plus"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <FloatingLabel
                        controlId="floatingInputCaption"
                        label="Video Caption"
                        className="mb-3"
                    >
                        <Form.Control value={uploadVideo.caption} onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} type="text" placeholder="Video Caption" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputImg"
                        label="Image URL"
                        className="mb-3"
                    >
                        <Form.Control value={uploadVideo.imageURL} onChange={e => setUploadVideo({ ...uploadVideo, imageURL: e.target.value })} type="text" placeholder="something.jpeg" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputLink"
                        label="Youtube video link"
                        className="mb-3"
                    >
                        <Form.Control value={uploadVideo.youtubeLink} onChange={e => getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube video link" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="success">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Add

