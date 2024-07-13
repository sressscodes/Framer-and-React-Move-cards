import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      filesize:".9mb", 
      close : false, 
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      filesize:".4mb", 
      close : true, 
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
      desc: "Lorem ipsum sit amet consectetur adipisicing, Lorem ipsum dolor,",
      filesize:".7mb", 
      close : true, 
      tag: {isOpen: true, tagTitle: "upload", tagColor: "green"}
    },
  ]


  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((items,i)=>(
        <Card data={items} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground