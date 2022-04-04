import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
// import EditToyModal from './EditToyModal'
import { removeGear } from '../../api/gear'

const ShowGear = (props) => {
    // most of these are simply to pass to edit modal
    const {gear} = props

    // const [showEditModal, setShowEditModal] = useState(false)

    // const setBgCondition = (cond) => {
    //     if (cond === 'new') {
    //         return {width: '18rem', backgroundColor:'#b5ead7'}
    //     } else if (cond === 'used') {
    //         return {width: '18rem', backgroundColor:'#ffdac1'}
    //     } else {
    //         return {width: '18rem', backgroundColor:'#ff9aa2'}
    //     }
    // }

    // const destroyToy = () => {
    //     removeToy(user, pet._id, toy._id)
    //         .then(() =>
    //             msgAlert({
    //                 heading: 'Toy updated!',
    //                 message: 'great! the pet loves it!',
    //                 variant: 'success',
    //             }))
    //         .then(() => triggerRefresh())
    //         // if there is an error, we'll send an error message
    //         .catch(() =>
    //             msgAlert({
    //                 heading: 'Oh No!',
    //                 message: 'that aint it',
    //                 variant: 'danger',
    //         }))
    // }

    // console.log(setBgCondition(toy.condition))
    
    return (
        <>
            <Card className="m-2">
                <Card.Header>{gear.name}</Card.Header>
                <Card.Body>
                    <small>Quantity: {gear.quantity}</small><br/>
                    <small>{gear.description}</small><br/>
                    <Card.Footer >
                    </Card.Footer>
                    {/* {
                        user && (user.id === pet.owner.id) 
                        ?
                            <>
                                <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                    Edit Toy
                                </Button>
                                <Button onClick={() => destroyToy()}variant="danger">
                                    Delete Toy
                                </Button>
                            </>
                        :
                        null
                    } */}
                </Card.Body>
            </Card>
            {/* <EditToyModal 
                user={user}
                pet={pet}
                toy={toy}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            /> */}
        </>
    )
}

export default ShowGear