
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/index'
import Home_emp from './pages//Employee/home_emp'
import Home_admin from './pages/admin/Home_admin'
import Employee_details from './pages/admin/employeedetails'
import AuthTeam from './pages/auth/authTeam'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkUsersigned } from './redux/actions/Auth_actions'
import NotFound from './pages/notFound'
import Tasks_details from './pages/Employee/Tasks_details'



function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const type = useSelector((state => state.users.user ? state.users.user.type : ''))
  console.log('the toooooooken', token)

  useEffect(() => {
    dispatch(checkUsersigned());
  }, [dispatch]);

  const RoutingEmployee = () => {
    return (
      <Switch>
        <Route path='/home_emp' component={Home_emp} />
        <Route path='/home_emp/tasks/details' exact component={Tasks_details} />
      </Switch>
    )
  }




  const Routing = () => {
    return (
      <Switch>
        <Route path='/login' exact component={AuthTeam} />
        <Route path='*'>
          <Redirect to='/login' ></Redirect>
        </Route>
      </Switch>
    )
  }

  return (
    <div>
      <Router>
        <Navbar />
        {
          (!token && !type) ?

            <Switch>
              <Route path='/login' exact component={AuthTeam} />
              <Route path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>

            : ''}
        {
          type === 'Employee' ?
            <Switch>
              <Route path='/emp' exact component={Home_emp} />
              <Route path='/tasks/details/:id' exact component={Tasks_details} />
              <Route path="/">
                <Redirect to="/emp" />
              </Route>
            </Switch>
            : ''}
        {
          type == 'Admin' ?
            <Switch>
              <Route path='/admin/employee/details/:id' exact component={Employee_details} />
              <Route path='/admin/dashboard' exact component={Home_admin} />
              <Route path="/login">
                <Redirect to="/admin/dashboard" />
              </Route>
            </Switch > : ''}

      </Router>
    </div>


  )
}

export default App;
