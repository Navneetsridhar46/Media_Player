import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { removeVideoAPI, saveHistoryApi } from '../../services/allAPI';

function VideoCard({ displayData, setDeleteVideoResponse, insideCategory }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    //watch history
    const handleShow = async () => {
        setShow(true);
        // get video details 
        const { caption, youtubeLink } = displayData
        let timeData = new Date()
        let timeStamp = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
        }).format(timeData);
        // console.log(timeStamp);
        await saveHistoryApi({ caption, youtubeLink, timeStamp })
    }

    //removing video
    const deleteVideo = async (vId) => {
        // api call 
        const result = await removeVideoAPI(vId)
        setDeleteVideoResponse(result.data)

    }

    // dragStarted
    const dragStarted = (e, vId) => {
        console.log(`Dragging started with video id :${vId}`);
        e.dataTransfer.setData("videoId", vId)
    }


    return (
        <>
            <Card draggable onDragStart={(e) => dragStarted(e, displayData?.id)} className='shadow' style={{ height: '350px' }}>
                <Card.Img onClick={handleShow} variant="top" style={{ height: '180px' }} src={displayData?.imageURL} />
                <Card.Body>
                    <Card.Title className='d-flex'></Card.Title>
                    <p>{displayData?.caption}</p>
                    {!insideCategory && <button onClick={() => deleteVideo(displayData?.id)} className='btn'><i style={{ height: '20px' }} class="fa-solid fa-trash text-danger"></i></button>}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayData?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="369" src={`${displayData?.youtubeLink}?autoplay=1`} title="PSYTRANCE MIX 2023 | &#39;GREAT SPIRIT vol.01&#39; 🍃 This is more than Psytrance!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard