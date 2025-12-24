import React from 'react'
import Card from './Card'

const users = [
  {
    fullName: "John Anderson",
    post: "Frontend Developer",
    title: "React Specialist",
    imgUrl: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    fullName: "Emily Carter",
    post: "UI/UX Designer",
    title: "Design Expert",
    imgUrl: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    fullName: "Michael Brown",
    post: "Full Stack Developer",
    title: "MERN Stack",
    imgUrl: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    fullName: "Sophia Wilson",
    post: "Product Manager",
    title: "Agile Leader",
    imgUrl: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    fullName: "David Martinez",
    post: "Backend Developer",
    title: "API Expert",
    imgUrl: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    fullName: "Olivia Taylor",
    post: "Content Strategist",
    title: "Brand Builder",
    imgUrl: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    fullName: "Daniel Lee",
    post: "Mobile App Developer",
    title: "Android & iOS",
    imgUrl: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    fullName: "Ava Thompson",
    post: "Digital Marketer",
    title: "SEO Expert",
    imgUrl: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    fullName: "Chris Walker",
    post: "DevOps Engineer",
    title: "Cloud Expert",
    imgUrl: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    fullName: "Isabella Harris",
    post: "Startup Founder",
    title: "Entrepreneur",
    imgUrl: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];


const App = () => {
  return (
    <div className="min-h-screen bg-black p-5 flex gap-4 flex-wrap">
      {users.map((user, id) => (
        <Card
          key={id}
          fullName={user.fullName}   
          post={user.post}
          title={user.title}
          imgUrl={user.imgUrl}      
        />
      ))}
    </div>
  )
}

export default App
