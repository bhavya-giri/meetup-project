import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
const DummieMeetups = [
    {
        id: '1',
        title:'1 meetup',
        image:'https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg',
        address: '1 Delhi',
        description:'this is 1'
    },
    {
      id: '2',
      title:'2 meetup',
      image:'https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg',
      address: '2 Delhi',
      description:'this is 2'
  },
  {
    id: '3',
    title:'3 meetup',
    image:'https://blog.close.com/content/images/hubfs/315483/customer-meetup.jpeg',
    address: '3 Delhi',
    description:'this is 3'
},
    
]
const HomePage = () => {
  return (
    <div>
      <MeetupList meetups ={DummieMeetups}/>

      
    </div>
  )
}

export default HomePage