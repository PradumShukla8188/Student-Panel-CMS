"use client";

import { useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import students from '@/data/students.json';
import { useState } from "react";

export default function StudentResultVerify() {
    const [studentData, setStudentData] = useState<any>(null);

    const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
        mode: "onBlur",
        defaultValues: {
            emailOrRoll: "",
            dob: ""
        }
    });


    const { mutate, isPending, isError, error } = useMutation({
        mutationKey: ['student-verify'],
        mutationFn: async (data: any) => fetch('/api/student/verify-student', data),
        onSuccess: (data) => {
            console.log("Form Data:", data);
        },
        onError: (error) => {
            console.log("Error:", error);
        }
    })

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        const [y, m, d] = data?.dob?.split("-");
        data.dob = `${d}-${m}-${y}`;
        const student = students?.find((student) =>
            (student?.rollNumber === data?.emailOrRoll) && student?.dateOfBirth === data?.dob
        );
        if (student) {
            console.log("Student Found:", student);
            setStudentData(student)
        }
    }
    return (
        <div className=" bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

        {/* LEFT FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg p-6 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4 text-center text-cyan-600">
            Result
          </h2>

          <label className="block mb-2 font-medium">
            Email / Roll Number
          </label>
          <input
            type="text"
            placeholder="Enter email or roll number"
            className="w-full border rounded px-3 py-2 mb-2 outline-none"
            {...register("emailOrRoll", {
              required: "This field is required",
              pattern: {
                value:
                  /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|\d+|[A-Za-z]+\/\d{4}\/\d+)$/,
                message: "Invalid email or roll number",
              },
            })}
          />
          {errors?.emailOrRoll && (
            <p className="text-red-500 mb-2">
              {errors.emailOrRoll.message as string}
            </p>
          )}

          <label className="block mb-2 font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2 mb-2 outline-none"
            {...register("dob", {
              required: "Date of Birth is required",
            })}
          />
          {errors?.dob && (
            <p className="text-red-500 mb-4">
              {errors?.dob?.message as string}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
            disabled={!isDirty}
          >
            Submit
          </button>
        </form>

        {/* RIGHT RESULT PANEL */}
        <div className="bg-white shadow-lg p-6 rounded-lg min-h-[300px]">
          {!studentData ? (
            <div className="h-full flex items-center justify-center text-gray-400">
              Submit details to view student information
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-cyan-600">
                Student Details
              </h2>

              <div className="border rounded p-4 space-y-2">
                <p><span className="font-semibold">Name:</span> {studentData?.name}</p>
                <p><span className="font-semibold">Roll No:</span> {studentData?.rollNumber}</p>
                <p><span className="font-semibold">Registration No:</span> {studentData?.registrationNumber}</p>
                <p><span className="font-semibold">Course:</span> {studentData?.course}</p>
                <p><span className="font-semibold">Percentage:</span> {studentData?.percentage}</p>
                <p><span className="font-semibold">Grade:</span> {studentData?.grade}</p>
                
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
    )
}
