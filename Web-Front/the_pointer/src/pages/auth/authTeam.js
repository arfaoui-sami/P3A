import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.css';
import { useHistory } from 'react-router';
import { loginUser } from '../../redux/actions/Auth_actions';
import Loading from '../../components/Loading';
import { loadTasks } from '../../redux/actions/requestes-actions';

//import Select from 'react-bootstrap/FormSelect'
//import store from '../../redux/store'

const AuthTeam = () => {
    const dispatch = useDispatch();
    const type = useSelector((state => state.users.user ? state.users.user.type : ''))
    const errorEmail = useSelector((state => state.users.error ? state.users.error.errors.email : ''))
    const errorPass = useSelector((state => state.users.error ? state.users.error.errors.password : ''))
    const id = useSelector((state => state.users.user ? state.users.user.id : ''))
    const [loading, setLoading] = useState(false)
    const [CIN, setCin] = useState('')
    const [password, setPassword] = useState('')
    const [typeUser, setTypeUser] = useState('Admin')
    const [notValid, setNotvalid] = useState(false)
    const history = useHistory();

    const handelForminputs = (e) => {
        e.preventDefault();
        if (CIN === '' && password === '') { setNotvalid(true) } else {
            setLoading(true);
            console.log('type:', type)
            dispatch(loginUser(CIN, password, typeUser));
            if (type === "Admin") history.push('/admin/dashboard')
            if (type === 'Empolyee') {
                history.push('/emp');
                //dispatch((loadTasks(id))
                ;
            };
            console.log(typeUser)
            setLoading(false);
        }
    };




    return (
        !loading ?
            <>

                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <img style={{ margin: '10px' }} src="https://img.icons8.com/fluency/48/000000/key.png" />
                        {errorPass && <span style={{ color: 'red' }}>{errorPass}</span>}
                        {errorEmail && <span style={{ color: 'red' }} >{errorEmail}</span>}
                        {notValid && <span>{'Remplir tous les champs'}</span>}
                        <form onSubmit={handelForminputs}>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="CIN" value={CIN} onChange={((e) => { setCin(e.target.value) })} />
                            <input type="password" id="password" className="fadeIn third" name="login" placeholder="mot de passe" value={password} onChange={((e) => { setPassword(e.target.value); })} />
                            <select className='select'
                                onChange={(e) => { setTypeUser(e.target.value) }} value={typeUser}>
                                <option selected value="Employee">Employee</option>
                                <option value="Admin">Admin</option>
                            </select>

                            <input type="submit" className="fadeIn fourth" value="connexion" />
                        </form>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,256L480,288L960,32L1440,128L1440,320L960,320L480,320L0,320Z"></path></svg>
            </>
            :
            <><Loading /></>
    )

}

export default AuthTeam
