import React from "react";
import styled from "styled-components";
import { PhotosOne } from "./PhotoGalleryApi";

const PhotoGallery = () => {
  const PhotoGallerySection = styled.section`
    /* border: 2px solid black; */
    height: 44rem;
    width: 100%;
    padding: 20px 5px;
    overflow: hidden;
    .photo-container {
      height: 44rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(11, 150px);
      grid-template-rows: repeat(3, 220px);
      /* grid-auto-rows: 200px 200px 200px; */
      grid-auto-columns: 200px 200px 200px;
      grid-gap: 10px;
      animation-name: slider;
      animation-duration: 250s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    @keyframes slider {
      from {
        transform: translateX(0px);
      }
      to {
        transform: translateX(-2499px);
      }
    }
    .h-stretch {
      grid-row: span 2;
    }
    .w-stretch {
      grid-column: span 2;
    }

    .pics img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `;

  return (
    <>
      <PhotoGallerySection>
        <div className="photo-container">
          {PhotosOne.map((images, index) => {
            return (
              <div key={index} className={`pics ${images.class}`}>
                <img src={images.photo} alt={`Photo${index}`} />
              </div>
            );
          })}
        </div>
      </PhotoGallerySection>
    </>
  );
};

export default PhotoGallery;
