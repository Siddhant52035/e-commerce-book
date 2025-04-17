"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/utils/index";
import Link from "next/link";
import TextInput from "@/components/UI/TextInput";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Loading from "@/components/UI/Loading";
import signup from "@/assets/images/signup.png";

interface BookData {
  name: string;
  image: string;
  price: string;
  desc: string;
}
const Register = () => {
  const [errMsg, setErrMsg] = useState<{
    message: string;
    status: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<BookData>({ mode: "onChange" });

  const onSubmit = async (data: BookData) => {
    setIsSubmitting(true);
    try {
      const res = await apiRequest({
        url: "/auth/signup",
        data: data,
        method: "POST",
      });

      if (res?.status === "failed") {
        setErrMsg(res);
      } else {
        setErrMsg(res);
        setTimeout(() => {
          window.location.replace("/login");
        }, 5000);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full ">
      {/* LEFT - FORM */}
      <div className="w-full lg:w-[55%] flex items-center justify-center px-6">
        <div className="w-full max-w-lg bg-[#cbd0dc] p-8 rounded-sm shadow-md">
          <h2 className="text-3xl font-extrabold text-center text-black">
        Upload Book
          </h2>
         
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* First & Last Name */}
            <div className="flex flex-col lg:flex-row gap-2">
              <TextInput
                name="name"
                label="Name"
                placeholder="First Name"
                type="text"
                styles="w-full"
                register={register("name", {
                  required: "Name is required!",
                })}
                error={errors.name ? errors.name?.message : ""}
              />
              <TextInput
                name="image"
                label="Image"
                placeholder="image"
                type="text"
                styles="w-full"
                register={register("image", {
                  required: "image is required!",
                })}
                error={errors.image ? errors.image?.message : ""}
              />
            </div>

            {/* price */}
            <TextInput
              name="price"
              placeholder="price@example.com"
              label="Price"
              type="price"
              register={register("price", {
                required: "price Address is required",
              })}
              styles="w-full"
              error={errors.price ? errors.price.message : ""}
            />

            {/* desc & Confirm desc */}
            <div className="flex flex-col lg:flex-row gap-2">
              <TextInput
                name="desc"
                label="Description"
                placeholder="desc"
                type="desc"
                styles="w-full"
                register={register("desc", {
                  required: "desc is required!",
                })}
                error={errors.desc ? errors.desc?.message : ""}
              />
             
            </div>
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}
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
      {/* RIGHT - IMAGE */}
      
    </div>
  );
};

export default Register;
