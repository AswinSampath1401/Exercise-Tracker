import axios from 'axios';
import React , {Component} from 'react';


export default class CreateUser extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            username : e.target.value
        })
    }
    
    onSubmit(e){

        e.preventDefault();

        const user = {
            username : this.state.username
        }

        axios.post('http://localhost:5000/users/add',user)
            .then((res)=>{
                console.log(`User has been added to database`);
                console.log(res.data);
            })
            .catch((err)=> console.log(`Error occured ${err}`));
        
        this.setState({
            username : ''
        });

        window.location = "/create";
    }

    render(){
        return(
            <div>
                <h1 className="text-danger">Create New User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            required 
                            className="form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}