import { Button } from '@chakra-ui/react';
import styles from "./admin.module.css"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deletedata, getRequest } from '../../Redux/AdminReducer/action';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const AdminCard = ({ id, image, name, price, Rating }) => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handleDelete = (id) => {
        // console.log(id) 
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
 dispatch(deletedata(id)).then(() => dispatch(getRequest()));
}

  const handleClick = () => {
 let timerInterval;
 Swal.fire({
   title: "Admin please wait!",
   html: "I will close in <b></b> milliseconds.",
   timer: 1000,
   timerProgressBar: true,
   didOpen: () => {
     Swal.showLoading();
     const b = Swal.getHtmlContainer().querySelector("b");
     timerInterval = setInterval(() => {
       b.textContent = Swal.getTimerLeft();
     }, 100);
   },
   willClose: () => {
     clearInterval(timerInterval);
   },
 }).then((result) => {
   /* Read more about handling dismissals below */
   if (result.dismiss === Swal.DismissReason.timer) {
     console.log("I was closed by the timer");
   }
 });

}

  return (
    <div id={styles.card}>
      <div>
        <img
          style={{
            border:"0px solid green",
            width: "70%",
            textAlign: "center",
            marginLeft: "50PX",
            padding: "5px",
          }}
          src={image}
          alt="title"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Title:{name} </h1>
        <p>Price:{price}</p>
        <p>Rating:{Rating}</p>
        <div id={styles.button}>
          <Link to={`/edit/${id}`}>
            <Button
              id={styles.edit}
              onClick={handleClick}
              style={{ width: "60px" }}
            >
              Edit
            </Button>
          </Link>
          <Button
            id={styles.delete}
            onClick={() => handleDelete(id)}
            style={{ width: "60px" }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminCard