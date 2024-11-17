import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceModal from "./modal";
import ShowIndex from "./showindex";
import EditModal from "./editmodal";
import Footer from "./footer";
import "./App.css";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const App = () => {
  const apiUrl = "https://67296beb6d5fa4901b6d15ca.mockapi.io/Services";
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  // 데이터 가져오기
  const fetchServices = async () => {
    try {
      const response = await axios.get(apiUrl);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // 데이터 추가 핸들러
  const handleSave = (newService) => {
    setServices((prevServices) => [...prevServices, newService]); // 새 데이터 추가
  };

  // 데이터 삭제 핸들러
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setServices((prevServices) => prevServices.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleSelectService = (id) => {
    const service = services.find((service) => service.id === id);
    setSelectedService(service); // 선택된 데이터를 상태로 저장
  };

  const handleEdit = (updatedService) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  return (
    <div>
      <ServiceModal onSave={handleSave} />
      <EditModal serviceData={selectedService} onUpdate={handleEdit} />
      <header height="44" className="headercss">
        <a direction="left" className="h-26px w-85px cursor-pointer no-underline" href="/">
            <svg height="100%" viewBox="0 0 85 26" width="85" xmlns="http://www.w3.org/2000/svg"><path d="M77.69 4.86c3.975 0 7.197 3.215 7.197 7.18l-.002.055h.002c.073 3.477.074 5.769.003 6.874-.108 1.659-.724 3.372-1.947 4.693A7.21 7.21 0 0 1 77.593 26c-2.724 0-4.998-.984-6.653-2.921l-.05-.059 3.226-2.684c.837.997 1.938 1.48 3.478 1.48.9 0 1.67-.358 2.259-.992.515-.556.817-1.263.832-1.813v-.443a7.186 7.186 0 0 1-2.995.65c-3.975 0-7.197-3.214-7.197-7.179 0-3.964 3.222-7.178 7.197-7.178zm-32.13-.225c4.131 0 7.48 3.34 7.48 7.46 0 4.121-3.349 7.462-7.48 7.462s-7.48-3.34-7.48-7.461c0-4.12 3.349-7.461 7.48-7.461zM4.533 0v10.354L8.623 5.2h5.309l-5.337 6.726 5.572 7.065h-4.98L4.534 13.42v5.572H0V0h4.533zM29.92 4.86a6.233 6.233 0 0 1 6.233 6.234v7.897H31.96v-7.908a2.04 2.04 0 0 0-4.074-.152l-.006.152v7.908h-4.193v-7.908a2.04 2.04 0 0 0-4.075-.152l-.005.152v7.908h-4.194v-7.897a6.233 6.233 0 0 1 10.371-4.662 6.201 6.201 0 0 1 4.136-1.571zm31.847 0a6.8 6.8 0 0 1 6.8 6.8v7.331h-4.194v-7.34a2.607 2.607 0 0 0-2.441-2.602l-.165-.006a2.607 2.607 0 0 0-2.602 2.442l-.005.165v7.34l-4.193.001v-7.33a6.8 6.8 0 0 1 6.8-6.8zM45.56 8.818a3.282 3.282 0 0 0-3.287 3.279 3.282 3.282 0 0 0 3.287 3.278 3.282 3.282 0 0 0 3.287-3.278 3.282 3.282 0 0 0-3.287-3.279zm32.13.226a3 3 0 0 0-3.003 2.996 3 3 0 0 0 3.003 2.996 3 3 0 0 0 3.003-2.996 3 3 0 0 0-3.003-2.996z" fill="#212224" fill-rule="evenodd"></path></svg>
        </a>
      </header>
    <div class="dividtop"></div>
      <main className="mainwrap">
      <div className="divinputwrap nodivwith">
          <div className="underbtnwrap" id="buttonfield">
            <button
            type="button"
            className="submitbtncss"
            id="btnAdd"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >
            추가하기
            </button>
          </div>
        </div>
        <ShowIndex services={services} onDelete={handleDelete} onEdit={handleSelectService} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
