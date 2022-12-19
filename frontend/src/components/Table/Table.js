import React, {useState, useEffect} from 'react'
import '../../Styles/Table.css';
import axios from "axios";

const Table = () => {
	const [userData, setUserDate] = useState([]);
	const [email, setEmail] = useState('');
	// const headers = {
	// 	authorization : `Bearer ${localStorage.getItem("authToken")}`
	// }
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': localStorage.getItem("authToken")
	  }

	useEffect(() => {
		getUserData()
	}, [])
	
	const getUserData = () => {
		axios.get("http://localhost:8000/api/user/getuser", {
			headers: headers
		  })
		.then((response) => {
			setUserDate(response.data.data)
			// console.log(response)
		})
		.catch((err) => {
			console.log(err);
		});
	}
	return (
		<div className='table-wrapper'>
				<input type="text" name="email"
				onChange={(e) =>
					setEmail({ ...email, email: e.target.value })
				} />
				<button onClick={getUserData}>Search</button>
			<table className='fl-table'>
				<thead>
					<tr>
						<th>No</th>
						<th>Full Name</th>
						<th>Email</th>
						<th>Mobile</th>
						<th>Age</th>
						<th>Register Date</th>
					</tr>
				</thead>
				<tbody>
					{userData?.map((data, index) => {
						return (
							<tr key={index}>
								<td>{index+1}</td>
								<td>{data.first_name} { data.last_name}</td>
								<td>{data.email}</td>
								<td>{data.mobile}</td>
								<td>{data.age}</td>
								<td>{data.register_date}</td>
							</tr>
						)
					})}
					 
				</tbody>
			</table>
		</div>
    )
}

export default Table
