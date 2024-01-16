import Collections from '@/components/shared/Collections';
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions';
import { auth } from '@clerk/nextjs';
import Link from 'next/link'
import React from 'react'

const profilePage = async () => {

    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;

    const organizedEvents = await getEventsByUser({userId,
      page: 1,
    });

  return (
    <>
      {/* my tickets  */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size={"lg"} className="button hidden sm:flex">
            <Link href={"/#events"}>Explore More Events</Link>
          </Button>
        </div>
      </section>

      {/* <section className="wrapper my-8">
        <Collections
          data={events?.data}
          emptyTitle="No event tickets found"
          emptyStateSubtest="No worries ! You can create a new event to get started"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName='ordersPage'
          totalPage={2}
        />
      </section> */}

      {/* Events organized  */}

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size={"lg"} className="button hidden sm:flex">
            <Link href={"/events/create"}>Create New Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collections
          data={organizedEvents?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubtest="Go create one to get started"
          collectionType="Events_Oragnized"
          limit={3}
          page={1}
          urlParamName="eventsPage"
          totalPage={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
}

export default profilePage