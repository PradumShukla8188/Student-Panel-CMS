import dynamic from 'next/dynamic';

const StudentVerifyForm = dynamic(
  () => import("@/app/components/public/Student/StudentVerify")
);
const StudentVerifyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <StudentVerifyForm />
    </div>
    )
}

export default StudentVerifyPage