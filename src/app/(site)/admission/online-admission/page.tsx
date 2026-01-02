import dynamic from 'next/dynamic';

const AdmissionForm = dynamic(() => import('@/app/components/Admissions/OnlineAdmission'));

const OnlineAdmissionPage = () => {
  return (
    <AdmissionForm />
  );
};
export default OnlineAdmissionPage;

