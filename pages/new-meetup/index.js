import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetup = () => {
    const handleAddMeetup =(meetupDetails)=>{
        console.log(meetupDetails)
    }
  return (
    <NewMeetupForm onAddMeetup={handleAddMeetup}/>
  )
}

export default NewMeetup