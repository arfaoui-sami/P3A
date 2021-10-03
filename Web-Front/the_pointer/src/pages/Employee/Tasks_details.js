import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from "jwt-decode";
import { useParams, useHistory } from 'react-router-dom';
import Map from '../../components/Maps';
import { updateTaskStatus } from '../../redux/actions/requestes-actions'
const Tasks_details = () => {
    const { id } = useParams();
    const decryptedId = jwtDecode(id);
    const history = useHistory()
    const dispatch = useDispatch()

    const handelClick = (newStatus) => {

        dispatch(updateTaskStatus(decryptedId.id, newStatus))
        history.goBack();


    }

    console.log('dec is', decryptedId)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Map lat={decryptedId.lat} lng={decryptedId.lng} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '50%', margin: '10px', border: '1px solid #8080803d', borderRadius: '5px', padding: '5px' }}>

                <span>
                    <b>
                        Pour Mr/Mdme :
                    </b>
                    {decryptedId.name}
                </span>
                <span>
                    <b>
                        Type :
                    </b>
                    {decryptedId.type}
                </span>
                <span>
                    <b>
                        Ville :
                    </b>
                    {decryptedId.town}
                </span>


            </div>
            <div style={{ width: '50%', border: '1px solid #8080803d', borderRadius: '5px', padding: '5px' }}>
                {decryptedId.status === 'onDemand' ?
                    <>
                        <button onClick={() => handelClick("inProcess")} style={{ margin: '5px' }} type="button" class="btn btn-outline-success">Accepter la Mession</button>
                        <button style={{ margin: '5px' }} type="button" class="btn btn-outline-danger">Signaler un problème</button>
                        <button style={{ margin: '5px' }} type="button" class="btn btn-outline-warning">Reporter</button>
                        <button type="button" class="btn btn-outline-info">Imprimer</button>
                    </>
                    :
                    <>
                        <button onClick={() => handelClick("onDemand")} type="button" class="btn btn-warning">Annuler la Mession</button>
                        <button style={{ margin: '5px' }} type="button" class="btn btn-outline-danger">Signaler un problème</button>
                        <button type="button" class="btn btn-outline-info">Imprimer</button>
                    </>
                }

            </div>
        </div>
    )
}
export default Tasks_details;