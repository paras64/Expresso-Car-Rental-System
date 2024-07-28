import React, { useState } from "react";
import "./AdminStyle/AddFaq.css";
import CloseIcon from "@mui/icons-material/Close";
import { useAdminDataContext } from "./AdminProvider";
import axios from "axios";
const AddFaq = ({ closeModel }) => {
  const { adminData } = useAdminDataContext();
  const [FaqData, SetFaqData] = useState({
    question: "",
    answer: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    SetFaqData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (!FaqData.question || !FaqData.answer) {
      alert("Please complete the required fields");
      return;
    }
    if (FaqData.question.length > 65 || FaqData.answer.length > 210) {
      alert(
        "Character Limit Reached. Please make sure question is not more than 65 character and answer is not more than 210 character"
      );
      return;
    }
    const doc = axios.post(
      "https://car-rental-backend-1tpp.onrender.com/faq/createfaq",
      {
        FaqData,
        adminData,
      }
    );
    doc
      .then((response) => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);

        return;
      });
  };
  const handleReset = (e) => {
    if (e) {
      e.preventDefault();
    }
    SetFaqData({
      question: "",
      answer: "",
    });
  };
  return (
    <>
      <div className="add_faq__model_wrapper"></div>
      <div className="add_faq__model_wrapper_container">
        <div className="add_faq__form">
          <div className="add_faq__form_content">
            <div className="booking-form-content__hero" id="hero__one">
              <h1 className="booking-form__heading">COMPLETE THE FIELDS</h1>
              <CloseIcon id="close-icon" onClick={closeModel} />
            </div>
            <div className="add_faq-form-content__hero" id="add_faq_crypus">
              <form className="hero__add_faq_details_form">
                <div className="hero__faq_add_form__sub">
                  <div>
                    <label htmlFor="question">
                      Question
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="question"
                      name="question"
                      placeholder="Enter the question"
                      value={FaqData.question}
                      onChange={handleChange}
                    />
                    <aside className="faq__crypus">
                      {!FaqData.question && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                      <p className="character__counts">
                        {FaqData.question.length}/65{" "}
                      </p>
                    </aside>
                  </div>
                </div>
                <div className="hero__faq_add_form__sub">
                  <div>
                    <label htmlFor="answer">
                      Answer
                      <span>*</span>
                    </label>
                    <textarea
                      className="textarea__answer"
                      name="answer"
                      id="question"
                      cols="30"
                      rows="10"
                      placeholder="Enter the answer"
                      value={FaqData.answer}
                      onChange={handleChange}
                    ></textarea>
                    <aside className="faq__crypus">
                      {!FaqData.answer && (
                        <p className="required__field">
                          This field is required
                        </p>
                      )}
                      <p className="character__counts">
                        {FaqData.answer.length}/210
                      </p>
                    </aside>
                  </div>
                </div>
                <div className="hero__faq_add_form__sub ">
                  <button className="add_faq_btn__first" onClick={handleReset}>
                    Reset All
                  </button>
                  <button className="add_faq_btn__second" onClick={handleClick}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFaq;
