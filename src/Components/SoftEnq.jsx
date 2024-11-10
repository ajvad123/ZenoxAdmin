// SoftEnq.jsx
import React, { useState, useEffect } from 'react';
import { getSoftEnq } from '../Services/allApi';
function SoftEnq() {
    const [getMessege, setGetMessege] = useState([]);

    useEffect(() => {
        handlContact()
    }, []);

    const handlContact = async () => {
        try {
            const res = await getSoftEnq();

                console.log(res);
                
            setGetMessege(res.data);
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        }
    };

    return (
        <div id="soft" className="p-4 flex-grow-1">
            <main id="main" className="main">
                <div className="pagetitle mb-4 text-center">
                    <h1 className="title">Software Enquiries</h1>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table datatable table-hover table-striped">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th><b>Name</b></th>
                                                    <th>Email</th>
                                                    <th>Services</th>
                                                    <th>Message</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {getMessege.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.service}</td>
                                                        <td>{item.message}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SoftEnq;
