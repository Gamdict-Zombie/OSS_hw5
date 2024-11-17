import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const EditModal = ({ serviceData, onUpdate }) => {
  const updateServiceApi = `https://67296beb6d5fa4901b6d15ca.mockapi.io/Services/${serviceData?.id || ""}`;
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const [service, setService] = useState({
    title: "",
    stars: "",
    horo: "",
    price: "",
  });

  useEffect(() => {
    if (serviceData) {
      setService({
        title: serviceData.title || "",
        stars: serviceData.stars || "",
        horo: serviceData.horo || "",
        price: serviceData.price || "",
      });
    }
  }, [serviceData]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setService({ ...service, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!service.title.trim()) errors.title = "제목을 입력해주세요.";
    if (!service.stars || service.stars < 0 || service.stars > 5)
      errors.stars = "평점은 0에서 5 사이여야 합니다.";
    if (!service.horo || service.horo < 1) errors.horo = "평가 갯수는 1개 이상이어야 합니다.";
    if (!service.price || service.price <= 0) errors.price = "가격은 0보다 커야 합니다.";
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      const response = await axios.put(updateServiceApi, service);
      console.log("Service updated successfully!", response.data);

      if (onUpdate) onUpdate(response.data);

      setError(null);

      alert("서비스가 수정되었습니다.");
    } catch (error) {
      console.error("Error updating service:", error.response || error.message);
      setError("서비스 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              서비스 수정
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="닫기"
            ></button>
          </div>
          <div className="modal-body">
            <form className="formwrap" onSubmit={handleSubmit}>
              <div className="divinputwrap nodivwith">
                <div className="inputwrap nodivwith">
                  <span id="titleSpan" className="labelwrap">
                    제목
                  </span>
                  <div className="inputinnercss">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="inputcss"
                      placeholder="서비스를 잘 드러낼 수 있는 제목을 입력해주세요"
                      value={service.title}
                      onChange={handleInput}
                      required
                    />
                    {formErrors.title && <p className="error-text">{formErrors.title}</p>}
                  </div>
                </div>
              </div>
              <div className="divinputwrap divwith2">
                <div className="inputwrap nodivwith">
                  <span id="starSpan" className="labelwrap">
                    평점
                  </span>
                  <div className="inputinnercss background-colorgray">
                    <input
                      id="stars"
                      name="stars"
                      type="number"
                      className="inputcss"
                      step="0.1"
                      placeholder="5"
                      value={service.stars}
                      onChange={handleInput}
                      required
                    />
                    {formErrors.stars && <p className="error-text">{formErrors.stars}</p>}
                  </div>
                </div>
              </div>
              <div className="divinputwrap divwith2">
                <div className="inputwrap nodivwith">
                  <span id="horospan" className="labelwrap">
                    평가 갯수
                  </span>
                  <div className="inputinnercss">
                    <input
                      id="horo"
                      name="horo"
                      type="number"
                      className="inputcss"
                      value={service.horo}
                      onChange={handleInput}
                      required
                    />
                    {formErrors.horo && <p className="error-text">{formErrors.horo}</p>}
                  </div>
                  <span className="priceunit">개</span>
                </div>
              </div>
              <div className="divinputwrap nodivwith">
                <div className="inputwrap nodivwith">
                  <span id="priceSpan" className="labelwrap">
                    가격
                  </span>
                  <div className="inputinnercss">
                    <input
                      id="price"
                      name="price"
                      type="number"
                      className="inputcss"
                      placeholder="입력해주세요"
                      value={service.price}
                      onChange={handleInput}
                      required
                    />
                    {formErrors.price && <p className="error-text">{formErrors.price}</p>}
                  </div>
                  <span className="priceunit">$</span>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="submitbtncss">
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;