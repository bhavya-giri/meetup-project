import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetup = () => {
    async function handleAddMeetup(enteredMeetupData){
      const response = await fetch ('/api/new-meetup',{
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers:{
          'Content-Type' :'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
    }
  return (
    <NewMeetupForm onAddMeetup={handleAddMeetup}/>
  )
}

export default NewMeetup