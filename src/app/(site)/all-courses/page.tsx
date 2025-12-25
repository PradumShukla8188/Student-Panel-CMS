import dynamic from "next/dynamic"

const AllCourseDetail=dynamic(()=>import('@/app/components/public/AllCourses/AllCoursesUI'))
const AllCourse = () => {
    return (<>
    <AllCourseDetail/>
    </>)

}
export default AllCourse