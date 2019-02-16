import React, { Component } from 'react';
import './user.css';
import Userdeatils from '../components/userdetails'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                name: "a",
                age: "a",
                occupation: "a",
                hometown: "a",
                qualification: "a"
            },
            users: []
        }
    }
    detailsHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const oldFormControls = this.state.formControls;
        const newFormControls = Object.assign(oldFormControls, {
            [name]: value
        });
        this.setState({
            formControls: newFormControls
        });
    }
    submitFormHandler = (e) => {
        e.preventDefault();
        var tUser = this.state.users;
        var checkValidData = { ...this.state.formControls }
        if (checkValidData.name === "" || checkValidData.age === "" || checkValidData.occupation === "" || checkValidData.hometown === "" || checkValidData.qualification === "") {
            alert("PLease fill all data first")
        }
        else {
            tUser.push(this.state.formControls)
            this.setState({
                formControls: {
                    name: "",
                    age: "",
                    occupation: "",
                    hometown: "",
                    qualification: ""
                },
                users: tUser
            }, console.log(this.state.users))
        }
    }
    editUserDetailsHandler = (value, i) => {
        alert("Still in progress")
        console.log("clicked", value, i)
    }
    deleteUserDetailsHandler = (value, index) => {
        var tUser = [];
        for (var i = 0; i < this.state.users.length; i++) {
            if (i !== index) {
                tUser.push(this.state.users[i])
            }
        }
        this.setState({
            users: tUser
        })
    }
    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="form-container">
                        <div className="form-header">
                            <p>Fill details here</p>
                        </div>
                        <form onSubmit={this.submitFormHandler}>

                            <div class="container">


                                <div class="row">
                                    <div class="col-3"> <label>Name</label></div>
                                    <div class="col-9"><input type="text" placeholder="name" name="name" value={this.state.formControls.name} onChange={this.detailsHandler} /></div>

                                </div>
                                <div class="row">
                                    <div class="col-3"> <label>Age</label></div>
                                    <div class="col-9"><input type="text" placeholder="age" name="age" value={this.state.formControls.age} onChange={this.detailsHandler} /></div>

                                </div>
                            <div class="row">
                                <div class="col-3"> <label>Occupation</label></div>
                                <div class="col-9"><input type="text" placeholder="Occupation" name="occupation" value={this.state.formControls.occupation} onChange={this.detailsHandler} /></div>

                            </div>
                            <div class="row">
                                <div class="col-3"> <label>Hometown</label></div>
                                <div class="col-9"><input type="text" placeholder="Hometown" name="hometown" value={this.state.formControls.hometown} onChange={this.detailsHandler} /></div>

                            </div>
                            <div class="row">
                                <div class="col-3"> <label>Qualification</label></div>
                                <div class="col-9"><input type="text" placeholder="Qualification" name="qualification" value={this.state.formControls.qualification} onChange={this.detailsHandler} /></div>

                            </div>
                            <input type="submit" className="btn btn-primary" value="SUBMIT" />
                            </div>
                        </form>
                </div>
            </div>
            <Userdeatils data={this.state.users} edit={(value, i) => this.editUserDetailsHandler(value, i)}
                delete={(value, i) => this.deleteUserDetailsHandler(value, i)} />
            </div >
        );
    }
}

export default User;
