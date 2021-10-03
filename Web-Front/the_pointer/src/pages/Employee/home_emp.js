import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tasks from '../../components/Tasks'
import { loadTasks } from '../../redux/actions/requestes-actions'

function Home_emp() {
    const dispatch = useDispatch()
    const id = useSelector((state) => state.users.user ? state.users.user.id : null);
    const name = useSelector((state) => state.users.user ? state.users.user.name : null);
    const tasks = useSelector((state) => state.requests ? state.requests.tasks : null)
    console.log('tasks from redux :', tasks, id)

    useEffect(() => {
        dispatch((loadTasks(id)));
        console.log('rendering')
    }, [])



    //    useEffect(() => { axios.get("http://localhost:5000/api/allTasks", id).then((res) => { setEmployeesL(res.data); console.log('rendring') }) }, [CIN]);

    return (
        <div style={{
            width: '99vw',
            height: '100vh',
            background: 'linear-gradient(to bottom, rgb(234 239 241), rgb(216 220 221))',
            marginTop: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid red',
            padding: '0rem',
        }}>
            <div style={{
                width: '20%',
                height: '100vh',
                background: 'white',
                padding: '10px'

            }}>
                <h3>Profile :  </h3>
                <p>Nom : {name}</p>
                <p>Ville</p>
                <p>Status</p>
                <p>Taches Disponible</p>
            </div>


            <div style={{
                width: '80%',
                height: '100vh',
                background: 'white',

            }}>
                <div style={{
                    position: 'relative',
                    width: '99%',
                    padding: '20px',
                    height: '10%',
                    dispaly: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto',



                }}>
                    <h4>
                        Liste des Taches </h4>

                </div>

                <h3 style={{

                    boxSizing: 'border-box',
                    display: 'inline-block',
                    backgroundColor: 'orange',
                    color: 'white',
                    borderRadius: '3rem', // As longe as this is bigger than the fontsize
                    textAlign: 'center',
                    fontSize: '1.6rem',
                    fontWeight: '400',
                    padding: '.05rem .8rem .1rem',
                    lineHeight: 'inherit',

                }}>En attente</h3>
                <div style={{ display: 'flex', overflow: 'auto', margin: '10px', border: '1px solid #8080803d', borderRadius: '5px' }}>
                    {tasks ? tasks.slice(0, 6).map((task, index) => {

                        return (task.status === 'onDemand' ?
                            <>
                                < Tasks
                                    id={task._id}
                                    key={index}
                                    status={task.status}
                                    name={task.name}
                                    town={task.town}
                                    type={task.typeOfIssue}
                                    lat={task.lat}
                                    lng={task.lng}

                                />
                            </>
                            : ''
                        )
                    }) : 'Il n y a pas de tâches pour le moment !'

                    }
                    {tasks && <button style={{ height: '50px', margin: '60px auto', margin: '10px', border: '1px solid #8080803d', borderRadius: '5px' }}>plus</button>
                    }


                </div>
                <h3 style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    backgroundColor: ' #2ecc71',
                    color: 'white',
                    borderRadius: '3rem', // As longe as this is bigger than the fontsize
                    textAlign: 'center',
                    fontSize: '1.6rem',
                    fontWeight: '400',
                    padding: '.05rem .8rem .1rem',
                    lineHeight: 'inherit'
                }}>En cours ...</h3>
                <div style={{
                    display: 'flex', alignItems: 'start', alignContent: 'stretch', flexDirection: 'row', margin: '10px', border: '1px solid #8080803d', borderRadius: '5px'
                }}>
                    {tasks ? tasks.map((task, index) => {

                        return (task.status === 'inProcess' ?
                            < Tasks
                                id={task._id}
                                key={index}
                                status={task.status}
                                name={task.name}
                                town={task.town}
                                type={task.typeOfIssue}
                                lat={task.lat}
                                lng={task.lng}

                            /> : ''

                        )
                    }) : 'Pas des Tâches encore ! '

                    }


                </div>
                <h6 style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    backgroundColor: ' #3498db',
                    color: 'white',
                    borderRadius: '3rem', // As longe as this is bigger than the fontsize
                    textAlign: 'center',
                    fontSize: '1.6rem',
                    fontWeight: '400',
                    padding: '.05rem .8rem .1rem',
                    lineHeight: 'inherit',


                }}>Terminé</h6>
                <div style={{ display: 'flex', overflow: 'auto', margin: '10px', border: '1px solid #8080803d', borderRadius: '5px' }}>
                    {tasks ? tasks.map((task, index) => {

                        return (task.status === 'Done' ?
                            < Tasks
                                id={task._id}
                                key={index}
                                status={task.status}
                                name={task.name}
                                town={task.town}
                                type={task.typeOfIssue}
                                lat={task.lat}
                                lng={task.lng}

                            /> :
                            ''

                        )
                    }) : <p>Pas des Tâches encore !</p>

                    }

                    {tasks && <button style={{ height: '50px', margin: '60px auto', margin: '10px', border: '1px solid #8080803d', borderRadius: '5px' }}>plus</button>
                    }
                </div>

            </div>
        </div >
    )
}

export default Home_emp;
