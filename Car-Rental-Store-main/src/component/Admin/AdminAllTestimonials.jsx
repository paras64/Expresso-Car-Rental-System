import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAdminDataContext } from "./AdminProvider";
const AdminAllTestimonials = () => {
  const { adminData } = useAdminDataContext();
  const [Testimonial, SetTestimonial] = useState([]);
  const [Active, setActive] = useState(null);
  const handleDelete = (ID) => {
    console.log(ID)
    const doc = axios.delete(
      `https://car-rental-backend-1tpp.onrender.com/testimonials/deletetestimonial/${ID}/${adminData.token}`
    );
    doc
      .then((response) => {
        console.log(response)
        alert(response.data.message);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data.message);
        window.location.reload();
      });
  };
  const getTestimonialData = async () => {
    await axios
      .get("https://car-rental-backend-1tpp.onrender.com/testimonials ")
      .then((response) => {
        SetTestimonial(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  useEffect(() => {
    getTestimonialData();
  }, []);

  const AdminAllTestimonialsSection = styled.section`
    height: 100%;
    width: 100%;
    padding: 2rem 3rem;
    .all_testimonial__container {
      /* border: 2px solid; */
      display: flex;
      width: 100%;
    }
    .all_testimonial__content {
      /* border: 3px solid; */
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .all__testimonial_heading {
      font-size: 1.8rem;
      font-family: Poppins;
      color: var(--btn-background-color);
    }
    .alltestimonial_content_crypus {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: rgba(23, 23, 23, 0.24) 0px 1px 3px;
    }
    .all__testimonial__optimus {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 3rem;
    }
    .all__testimonial__content__prime {
      font-style: Poppins;
   
    }
    .all__testimonial__content__prime h1 {
      font-size: 16px;
      color: var(--black-color);
      font-family: "Poppins";
    }
    .all__testimonial__content__prime p {
      font-size: 15px;
      color: var(--text-color);
      font-family: Rubik;
      text-align: left;
    }
    .all__testimonial__content__prime__btn {
      border: none;
      background: transparent;
      color: blue;
      font-size: 16px;
      font-family: "Rubik";
      font-weight: bolder;
      cursor: pointer;
    }
    .all__user_heading {
      font-size: 1.8rem;
      font-family: Poppins;
      color: var(--btn-background-color);
    }
    .all__testimonial__hero_container {
      background-color: var(--page-background-color);
    }
    .testimonial__customer__name_heading {
      color: var(--btn-background-color);
      padding: 0rem 3rem;
      font-family: "Poppins";
      font-size: 20px;
      margin-top: 2rem;
    }
 
  `;

  return (
    <AdminAllTestimonialsSection>
      <div className="all_testimonial__container">
        <div className="all_testimonial__content">
          <h1 className="all__testimonial_heading">All Testimonial</h1>
          {Testimonial && Testimonial.length ? (
            Testimonial.map((item, index) => (
              <div key={item._id} className="alltestimonial_content_crypus">
                <aside className="all__testimonial__optimus">
                  <div className="all__testimonial__content__prime">
                    <h1>Customer Name</h1>
                    <p>
                      {item.firstname} {item.lastname}
                    </p>
                  </div>
                  <div className="all__testimonial__content__prime">
                    <h1>Customer Email</h1>
                    <p>{item.email}</p>
                  </div>
                  <div className="all__testimonial__content__prime">
                    {Active === index ? (
                      <button
                        className="all__testimonial__content__prime__btn"
                        onClick={() => {
                          setActive(null);
                        }}
                      >
                        Close message
                      </button>
                    ) : (
                      <button
                        className="all__testimonial__content__prime__btn"
                        onClick={() => {
                          setActive(index);
                        }}
                      >
                        View message
                      </button>
                    )}
                  </div>
                  <div className="all__testimonial__content__prime">
                    <button
                      className="all__testimonial__content__prime__btn"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Delete testimonial
                    </button>
                  </div>
                </aside>

                {Active === index
                  ? item.message && (
                      <div className="all__testimonial__hero_container">
                        <h1 className="testimonial__customer__name_heading">
                          {item.firstname} {item.lastname}'s Message
                        </h1>

                        <aside className="all__testimonial__optimus">
                          <div className="all__testimonial__content__prime">
                            <p>{item.message}</p>
                          </div>
                          {/* Add more content here if needed */}
                        </aside>
                      </div>
                    )
                  : null}
              </div>
            ))
          ) : (
            <h1 className="no_orders__found">No Users Has been found</h1>
          )}
        </div>
      </div>
    </AdminAllTestimonialsSection>
  );
};

export default AdminAllTestimonials;
