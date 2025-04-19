"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/utils/index";
import TextInput from "@/components/UI/TextInput";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Loading from "@/components/UI/Loading";
import { handleFileUpload } from "@/utils/index"; // make sure this is the updated one for PDF

interface BookData {
  name: string;
  pdf: string; // will store the uploaded PDF URL
  desc: string;
}

const BookForm = () => {
  const [errMsg, setErrMsg] = useState<{
    message: string;
    status: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BookData>({ mode: "onChange" });

  const onSubmit = async (data: BookData) => {
    setIsSubmitting(true);
    try {
      if (!pdfFile) {
        setErrMsg({ message: "Please upload a PDF file.", status: "failed" });
        setIsSubmitting(false);
        return;
      }

      const uploadedUrl = await handleFileUpload(pdfFile);

      if (!uploadedUrl) {
        setErrMsg({ message: "PDF upload failed.", status: "failed" });
        setIsSubmitting(false);
        return;
      }

      const payload = {
        ...data,
        pdf: uploadedUrl, // now contains the PDF URL
      };

      const res = await apiRequest({
        url: "/note/upload-pdf",
        data: payload,
        method: "POST",
      });

      setErrMsg(res);

      

      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-full lg:w-[55%] flex items-center justify-center px-6">
        <div className="w-full max-w-lg bg-[#cbd0dc] p-8 rounded-sm shadow-md">
          <h2 className="text-3xl font-extrabold text-center text-black">
            Upload Book
          </h2>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <TextInput
              name="name"
              label="Name"
              placeholder="Book Name"
              type="text"
              styles="w-full"
              register={register("name", {
                required: "Name is required!",
              })}
              error={errors.name ? errors.name?.message : ""}
            />

            {/* PDF File Upload */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Upload PDF
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && file.type === "application/pdf") {
                    setPdfFile(file);
                  } else {
                    setErrMsg({
                      message: "Only PDF files are allowed.",
                      status: "failed",
                    });
                  }
                }}
              />
            </div>

            {/* Price */}
            {/* <TextInput
              name="price"
              placeholder="Price"
              label="Price"
              type="text"
              register={register("price", {
                required: "Price is required",
              })}
              styles="w-full"
              error={errors.price ? errors.price.message : ""}
            /> */}

            {/* Description */}
            <TextInput
              name="desc"
              label="Description"
              placeholder="Description"
              type="text"
              styles="w-full"
              register={register("desc", {
                required: "Description is required!",
              })}
              error={errors.desc ? errors.desc?.message : ""}
            />

            {/* Error Message */}
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status === "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {/* Submit Button */}
            {isSubmitting ? (
              <Loading />
            ) : (
              <PrimaryButton
                className="w-full bg-[#0e2a47] text-white py-3 rounded-md"
                text="Upload"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
