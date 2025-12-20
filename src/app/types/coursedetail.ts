export type CourseDetailType = {
  course: string
  imageSrc: string
  profession: string
  price: string
  duration:string
  category:
  |'basiccomputer'
    | 'mobiledevelopment'
    | 'webdevelopment'
    | 'datascience'
    | 'cloudcomputing'
}
