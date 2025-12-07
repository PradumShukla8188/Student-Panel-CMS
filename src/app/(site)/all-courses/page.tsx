import dynamic from "next/dynamic"

const AllCourseDetail=dynamic(()=>import('@/app/components/Home/Courses'))
const AllCourse = () => {
    return (<>
    <AllCourseDetail/>
    </>)

}
export default AllCourse