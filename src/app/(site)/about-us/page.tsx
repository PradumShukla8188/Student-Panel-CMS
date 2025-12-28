import dynamic from 'next/dynamic';

const AboutUs=dynamic(()=>import('@/app/components/AboutUS/index'))

const AboutUsPage = () => {
  return (
        <AboutUs /> 
    );  
};
export default AboutUsPage;