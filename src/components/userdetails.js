import React from 'react';
import './userdetails.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
const userdeatails = (props) => {
    if (props.data.length > 0) {
        var userdetails = props.data.map((value, i) => {
            return (
                <div className="col-4" key={value.name + i}>
                    <div className="user-main-container">
                        <div className="user-button">
                            <Button className="btn btn-primary" onClick={() => props.edit(value, i)}>Edit</Button>
                            <Button onClick={() => props.delete(value, i)}>Delete</Button>
                        </div>
                        <div className="user-content">
                            <div className="user-label"><span>Name:</span> {value.name}</div>
                            <div><span>Occupation:</span> {value.occupation}</div>
                            <div className="user-buttons">

                            </div>
                        </div>
                    </div>
                </div>

            )
        })
    } else {
        var userdetails = <p>No user data found</p>;
    }
    return (
        <div class="container">
            <div className="row user-allDetails">
                    {userdetails}
            </div>
        </div>
    )
}
export default userdeatails;