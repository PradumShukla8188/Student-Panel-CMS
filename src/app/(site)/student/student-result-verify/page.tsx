import dynamic from 'next/dynamic';

const StudentResultVerifyForm = dynamic(
  () => import("@/app/components/public/Student/StudentResultVerify")
);
const StudentResultVerifyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <StudentResultVerifyForm />
    </div>
    )
}

export default StudentResultVerifyPage