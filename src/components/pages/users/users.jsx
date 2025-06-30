import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../actions/userActions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Users = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.user.users);
    const error = useSelector((state) => state.user.error);
    const loading = useSelector((state) => state.user.loading);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const viewUser = (id) => {
        navigate(`/users/${id}`)
    }

    return (
        <>
            <h2>Users</h2>

            {
                loading && <p>loading....</p>
            }

            {
                error ?
                    <p>{error}</p>

                    :


                    users.map((user, index) => (
                        <div key={index} className="pd-user-info">
                            <p>Name: {user.name}</p>
                            <p>User Name: {user.username}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Web: {user.website}</p>
                            <p>Address:
                                {user.address.street},
                                {user.address.suite},
                                {user.address.city},
                                {user.address.zipcode},
                                {user.address.geo.lat},
                                {user.address.geo.lng}
                            </p>
                            <p>Company:
                                {user.company.name}
                                {user.company.catchPhrase}
                                {user.company.bs}
                            </p>
                            <Button variant="contained" color="success" onClick={() => viewUser(user.id)}>View User</Button>
                        </div>
                    ))
            }
        </>
    )
}