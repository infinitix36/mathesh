import { Link, useParams } from "react-router-dom";
import BarChart from "../components/chart/BarChart";
import { UserData } from "../components/chart/Data";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Project = () => {
  const { projectId } = useParams();
  const [projectDetails, setprojectDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/projects/getProjectDetails")
      .then(function (response) {
        setprojectDetails(response.data);
      });
  }, []);
  console.log(projectDetails);
  if(projectDetails._id === projectId){
    console.log("Project" + projectId );
  }
  console.log(projectId);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <NavBar />
      <div
        className="side-bar"
        style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
      >
        <SideBar />
      </div>
      <h1>This project ID is = {projectId}</h1>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
           
           
            {projectDetails.map((e)=>{
              return (
                (e?._id === projectId)
                ? 
                <div>{e.description}</div>: null
              
              )
            })}
          </div>
          <div className="col-md-6">
            <h3>contributors</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div class="card">
              <div class="card-header">Featured</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            Chart{" "}
            <div>
              <BarChart chartData={userData} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div class="card text-left">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
export default Project;
