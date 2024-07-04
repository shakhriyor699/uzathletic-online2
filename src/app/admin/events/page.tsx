import { getAllevents } from '@/app/actions/getAllevents'
import EventsClient from '@/components/AdminClient/EventsClient/EventsClient'
import CreateModal from '@/components/Modals/CreateModal'
import React from 'react'

export const revalidate = 3600

const EventsPage = async () => {
  const events = await getAllevents()

  return (
    <>
      <EventsClient data={events.data} />
      <CreateModal />
    </>
  )
}

export default EventsPage