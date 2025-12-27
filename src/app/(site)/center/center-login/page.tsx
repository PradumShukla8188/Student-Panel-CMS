import dynamic from 'next/dynamic';

const CenterLogin = dynamic(() => import('@/app/components/public/Center/CenterLogin'));
const CenterLoginPage = () => {
    return (
            <div className="min-h-screen bg-gray-100 py-10">
            <CenterLogin/>
            </div>
    );
}
    export default CenterLoginPage;