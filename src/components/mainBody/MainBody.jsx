import { Link } from 'react-router-dom';
import Table from '../table/Table';
import "./mainBody.css";

const MainBody = () => {

  const tableHeaders = [
    "Customer Id",
    "UUID",
    "First Name",
    "Last Name",
    "Street",
    "Address",
    "City",
    "State",
    "Email",
    "Phone No.",
    "Action Buttons"
  ];
  const tableData = [
    {
      id: "1",
      uuid: "asdffdsv",
      firstName: "samndkl",
      lastName: "kjdsklfjs",
      street: "khfkdshfkj",
      address: "kjjdskjfjdsk",
      city: "knjdkfsd",
      state: "jdoisjfds",
      email: "jnfisdj",
      phone: "kjsdhfkjsd"
    },
    {
      id: "1",
      uuid: "asdffdsv",
      firstName: "samndkl",
      lastName: "kjdsklfjs",
      street: "khfkdshfkj",
      address: "kjjdskjfjdsk",
      city: "knjdkfsd",
      state: "jdoisjfds",
      email: "jnfisdj",
      phone: "kjsdhfkjsd"
    },
    {
      id: "1",
      uuid: "asdffdsv",
      firstName: "samndkl",
      lastName: "kjdsklfjs",
      street: "khfkdshfkj",
      address: "kjjdskjfjdsk",
      city: "knjdkfsd",
      state: "jdoisjfds",
      email: "jnfisdj",
      phone: "kjsdhfkjsd"
    },
    {
      id: "1",
      uuid: "asdffdsv",
      firstName: "samndkl",
      lastName: "kjdsklfjs",
      street: "khfkdshfkj",
      address: "kjjdskjfjdsk",
      city: "knjdkfsd",
      state: "jdoisjfds",
      email: "jnfisdj",
      phone: "kjsdhfkjsd"
    },
    {
      id: "1",
      uuid: "asdffdsv",
      firstName: "samndkl",
      lastName: "kjdsklfjs",
      street: "khfkdshfkj",
      address: "kjjdskjfjdsk",
      city: "knjdkfsd",
      state: "jdoisjfds",
      email: "jnfisdj",
      phone: "kjsdhfkjsd"
    },
  ];

  return (
    <>
      <div className="Container">
        <input type="text" className="search" />
        <button className="searchButton btn">Search</button>
      </div>
      <button className="addCustomer btn"><Link to="/addCustomer">Add Customer</Link></button>
      <Table tableHeaders={tableHeaders} tableData={tableData} />
    </>
  )
}

export default MainBody