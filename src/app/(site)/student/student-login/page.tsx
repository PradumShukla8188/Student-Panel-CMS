import dynamic from 'next/dynamic';

const StudentLogin = dynamic(() => import('@/app/components/public/Student/StudentLogin'));
const StudentLoginPage = () => {
    return (
            <div className="min-h-screen bg-gray-100 py-10">
            <StudentLogin/>
            </div>
    );
}
    export default StudentLoginPage;