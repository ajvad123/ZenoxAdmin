import React ,{useState,useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Admin.css'; // Custom CSS for additional styling
import { getDetails } from '../Services/allApi';


function Admin() {

    const [getInfo,setGetInfo]=useState([])


    useEffect(()=>{
      handleStudentDetails()
    })

    const handleStudentDetails=async()=>{

      const res= await getDetails()
      console.log(res);
      setGetInfo(res.data)
      
    }


  return (
    <div id="app" className="p-4  flex-grow-1">
      <main id="main" className="main">
        <div className="pagetitle mb-4 text-center">
          <h1 className="title">Enrolled Students</h1>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  {/* <h5 className="card-title text-center">Student Details</h5> */}
                  <div className="table-responsive">
                    {
                      getInfo.map((item)=>(<table className="table datatable table-hover table-striped">
                        <thead className="thead-light">
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Qualification</th>
                            <th>Course</th>
                            <th>Place</th>
                            <th>WhatsApp</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.qualification}</td>
                            <td>{item.course}</td>
                            <td>{item.place}</td>
                            <td>{item.whatsapp}</td>
                          </tr>
                          {/* Additional Rows */}
                        </tbody>
                      </table>))
                      }
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

export default Admin;
