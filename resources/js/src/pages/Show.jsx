import { useEffect, useState } from "react"
import Header from "./Header"

const Show = () => {
    const [data, setData] = useState([])
    const dataFetch = () => {
        axios.get('http://127.0.0.1:8000/api/employees')
            .then((response => response.data))
            .then((response_data) => {
                setData(response_data.data)
            })
    }
    useEffect(() => {
        dataFetch();
    }, [])
    // console.log(data)
    return (
        <>
            <Header />
            <div className="container-lg mt-5 border rounded">
                <table className="table mt-3">
                    <thead className="table-light">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Company Name</th>
                            <th>Phone No</th>
                            <th>Company Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) =>{
                            return(
                            <tr key={i}>
                                <td>{row.first_name}</td>
                                <td>{row.last_name}</td>
                                <td>{row.dob}</td>
                                <td>{row.company_name}</td>
                                <td>{row.phone_no}</td>
                                <td>{row.company_address}</td>
                            </tr>)
                        }
                            
                        )

                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Show;