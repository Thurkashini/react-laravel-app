import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../App";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Add = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        dob: "",
        company_name: "",
        phone_no: "",
        company_address: ""
    })
    const handlechange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        let submit_data = {
            first_name: data.first_name,
            last_name: data.last_name,
            dob: data.dob,
            company_name: data.company_name,
            phone_no: data.phone_no,
            company_address: data.company_address
        }
        axios.post('http://127.0.0.1:8000/api/employees', submit_data).then(() => {
            navigate('/Show')
        })
    }
    return (
        <>
            <Header />
            <br />
            <div className="container-lg mt-5">
                <form onSubmit={handleFormSubmit}>
                    <div className=".bg-light border rounded-1 p-3">
                        <div className="row">
                            <span className="fs-5">Personal Details</span>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">First Name</label>

                                <input type="text" className="form-control" name="first_name" onChange={handlechange} required />
                            </div>

                            <div className="col">
                                <label className="form-label">Last Name</label>

                                <input type="text" className="form-control" name="last_name" onChange={handlechange} required />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col">
                                <label className="form-label">DOB</label>

                                <input type="date" className="form-control" name="dob" onChange={handlechange} required />
                            </div>
                            
                            <div className="col">
                                {/* <label className="form-label">DOB</label>

                                <input type="date" className="form-control" name="dob" onChange={handlechange} required /> */}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className=".bg-light border rounded-1 p-3">
                        <div className="row">
                            <span className="fs-5">Office Details</span>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Company Name</label>

                                <input type="text" className="form-control" name="company_name" onChange={handlechange} required />

                            </div>

                            <div className="col">
                                <label className="form-label">Phone Number</label>

                                <input type="text" className="form-control" name="phone_no" onChange={handlechange} required />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col">
                                <label className="form-label">Address</label>

                                <input type="text" className="form-control" name="company_address" onChange={handlechange} required />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">

                            </div>

                            <div className="col">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Add;