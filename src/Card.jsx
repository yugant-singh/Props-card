import React from 'react'

const Card = ({ fullName, post, title, imgUrl }) => {
  console.log(fullName);

  return (
    <div className="w-64 h-92 rounded-2xl bg-white flex flex-col items-center justify-between gap-5 p-4  ">
      <img
        src={imgUrl}
        alt={fullName}
        className="h-28 w-28 rounded-full object-cover object-center"
      />

      <div className="text-center flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-black">
          {fullName}
        </h1>
        <h4 className="text-lg text-blue-600">
          {post}
        </h4>
        <p className="text-sm text-gray-600">
          {title}
        </p>
      </div>

      <button className='px-5  py-2 text-white rounded-2xl bg-red-500 text-xl mt-1'>Follow</button>
    </div>
  )
}

export default Card
