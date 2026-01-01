"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type AdmissionData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    gender: string;
    address: string;
    houseNo: string;
    locality: string;
    city: string;
    tehsil: string;
    district: string;
    zipCode: string;
    course: string;
    photo: FileList;
};

const AdmissionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AdmissionData>();
    const [submittedData, setSubmittedData] = useState<AdmissionData | null>(null);

    const onSubmit = (data: AdmissionData) => {
        setSubmittedData(data);
        console.log("Admission Form Submitted", data);
        alert("Admission Form Submitted Successfully 🎉");
    };

    return (
        <div className="max-w-3xl mx-auto bg-blue-40 shadow-lg rounded-lg p-6 mt-10">
            <h2 className="text-2xl font-bold text-center mb-4 text-cyan-600">Student Admission Form</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label>First Name<span className="required">*</span></label>
                        <input
                            {...register("firstName", { required: true, minLength: 2, maxLength: 30 })}
                            className="w-full border p-2 rounded"
                            placeholder="Enter first name"
                        />
                        {errors.firstName && <span className="text-red-500 text-sm">First name is required</span>}
                    </div>
                    <div >
                        <label>Last Name<span className="required">*</span></label>
                        <input
                            {...register("lastName", { minLength: 2, maxLength: 20 })}
                            className="w-full border p-2 rounded"
                            placeholder="Enter last name"
                        />
                        {errors.lastName && <span className="text-red-500 text-sm">Last name is required</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                        <label>Email<span className="required">*</span></label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full border p-2 rounded"
                            placeholder="Enter email"
                        />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                    </div>

                    <div>
                        <label>Phone<span className="required">*</span></label>
                        <input
                            {...register("phone", { required: true })}
                            className="w-full border p-2 rounded"
                            placeholder="Enter phone number"
                        />
                        {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                        <label>Date of Birth<span className="required">*</span></label>
                        <input
                            type="date"
                            {...register("dob", { required: true })}
                            className="w-full border p-2 rounded"
                        />
                        {errors.dob && <span className="text-red-500 text-sm">DOB is required</span>}
                    </div>

                    <div>
                        <label>Gender<span className="required">*</span></label>
                        <select {...register("gender", { required: true })} className="w-full border p-2 rounded">
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        {errors.gender && <span className="text-red-500 text-sm">Gender is required</span>}
                    </div>

                </div>

                <div>
                    <label>Address</label><br />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label>House No<span className="required">*</span></label>
                            <input
                                {...register("houseNo", { required: true })}
                                className="w-full border p-2 rounded"
                                placeholder="Enter house number"
                            />
                            {errors.houseNo && <span className="text-red-500 text-sm">House No is required</span>}
                        </div>
                        <div>
                            <label>Locality<span className="required">*</span></label>
                            <input
                                {...register("locality", { required: true })}
                                className="w-full border p-2 rounded"
                                placeholder="Enter locality"
                            />
                            {errors.locality && <span className="text-red-500 text-sm">Locality is required</span>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label>City<span className="required">*</span></label>
                            <input
                                {...register("city", { required: true })}
                                className="w-full border p-2 rounded"
                                placeholder="Enter city"
                            />
                            {errors.city && <span className="text-red-500 text-sm">City is required</span>}
                        </div>
                        <div>
                            <label>Tehsil<span className="required">*</span></label>
                            <input
                                {...register("tehsil", { required: true })}
                                className="w-full border p-2 rounded"
                                placeholder="Enter tehsil"
                            />
                            {errors.tehsil && <span className="text-red-500 text-sm">Tehsil is required</span>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label>Distt<span className="required">*</span></label>
                            <input
                                {...register("district", { required: true })}
                                className="w-full border p-2 rounded"
                                placeholder="Enter zip code"
                            />
                            {errors.district && <span className="text-red-500 text-sm">District is required</span>}
                        </div>
                        <div>
                            <label>Zip Code<span className="required">*</span></label>
                            <input
                                {...register("zipCode", { required: true })}
                                className="w-full border p-2 rounded"
                                placeholder="Enter zip code"
                            />
                            {errors.zipCode && <span className="text-red-500 text-sm">Zip Code is required</span>}
                        </div>
                    </div>
                </div>
                <div>
                    <label>Select Course<span className="required">*</span></label>
                    <select {...register("course", { required: true })} className="w-full border p-2 rounded">
                        <option value="">Select Course</option>
                        <option>Computer Basics</option>
                        <option>ADCA</option>
                        <option>DCA</option>
                        <option>Tally</option>
                    </select>
                    {errors.course && <span className="text-red-500 text-sm">Course is required</span>}
                </div>

                <div>
                    <label>Upload Photo<span className="required">*</span></label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("photo", { required: true })}
                        className="w-full border p-2 rounded"
                    />
                    {errors.photo && <span className="text-red-500 text-sm">Photo is required</span>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
                >
                    Submit Admission
                </button>
            </form>

            {submittedData && (
                <div className="mt-6 p-4 border rounded bg-green-50">
                    <h3 className="font-bold text-lg mb-2">Form Submitted Successfully</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AdmissionForm;
