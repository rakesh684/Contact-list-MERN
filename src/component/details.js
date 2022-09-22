import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const Details = () => {
    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}>Welcome Rakesh Kumar</h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='add_btn'>
                        <button className='btn btn-primary'><EditIcon /></button>
                        <button className='btn btn-danger'><DeleteIcon /></button>
                    </div>
                    <div className='row'>
                        <div className="left_view col-lg-6 col-md-6 col-12" >
                            <img src='../profile.png' style={{ width: 50 }} alt='profile' />
                            <h3 className='mt-3'>Name: <span >Rakesh Kumar</span></h3>
                            <h3 className='mt-3'>Age: <span >25</span></h3>
                            <p> <EmailIcon />Email:  <span style={{ fontWeight: 400 }}>dr.ravi123@gmail.com</span></p>
                            <p> <WorkIcon />Occupation: <span style={{ fontWeight: 400 }}>webDeveloper</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">
                            <p className="mt-5"><PhoneIphoneIcon />Mobile: <span>+91 9999999999 </span></p>
                            <p className="mt-3"><LocationOnIcon />Location:  <span>Delhi</span></p>
                            <p className="mt-3">Description: <span> hi I am rakesh kumar .I am currently in delhi.</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
