import React from 'react'
import { useState,useEffect } from 'react'
import { getContact } from '../Services/allApi'
function messeges() {

    const [getMessege,setGetMessege]=useState([])



    useEffect(()=>{
        handlContact()
    },[getMessege])

    const handlContact=async()=>{

        const res= await getContact()
        // console.log(res);

        setGetMessege(res.data)
        

    }


  return (

    <div id="msg" className="p-4  flex-grow-1">
    <main id="main" className="main">
      <div className="pagetitle mb-4 text-center">
        <h1 className="title">Enquiries</h1>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="table-responsive">{
                    getMessege.map( (item)=>(<table className="table datatable table-hover table-striped">
                        <thead className="thead-light">
                          <tr>
                            <th><b>Name</b></th>
                            <th>Email</th>
                            <th>subject</th>
                            <th>message</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.subject}</td>
                            <td>{item.message}</td>
                           
                          </tr>
                          {/* Additional Rows */}
                        </tbody>
                      </table>) )
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default messeges