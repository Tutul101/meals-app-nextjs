"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  const handleImageFileClick = () => {
    imageInputRef.current.click();
  };
  const handleImageFileChange = (event) => {
    const chosenImage = event.target.files[0];
    console.log("chosenImage", chosenImage);
    if (!chosenImage) {
      setPickedImage(null);
    } else {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setPickedImage(fileReader.result);
        console.log("fileReader.result", fileReader.result);
      };
      fileReader.readAsDataURL(chosenImage);
    }
  };
  return (
    <div className={classes.picker}>
      <label>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No Image picked yet</p>
          ) : (
            <Image
              src={pickedImage}
              alt="The image is selected by the user"
              fill
            />
          )}
        </div>
        <input
          type="file"
          className={classes.input}
          id={name}
          accept="image/png, image/jpg, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageFileChange}
          required={true}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImageFileClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
