

// import  CourseDetailData from "@/app/api/courseDetails/route"
import { CourseDetailData } from "../../../../../data/course-data";
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    id: string
  }>
}



const CourseDetailPage = async ({ params }: Props) => {
  const { id } = await params
  const courseId = Number(id)

  console.log("course id--->", courseId)

  const course = CourseDetailData.find(
    item => item?.id === courseId
  )

  console.log("course--->", course)

  if (!course) return notFound()

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Image */}
        <div className="border rounded-lg p-6">
          <img
            src={course.imageSrc}
            alt={course.course}
            className="w-full h-64 object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {course.course}
          </h1>

          <p className="text-gray-600 mb-4">
            {course.profession}
          </p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {course.duration}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {course.category}
            </p>
            <p className="text-xl font-bold text-primary">
              Price: ₹{course.price}
            </p>
          </div>

          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:opacity-90">
            Enroll Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default CourseDetailPage
