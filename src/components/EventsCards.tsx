'use client'
import { EventType } from '@/lib/DB/Models/Event';
import { RootState } from '@/lib/store';
import { CheckIcon } from '@radix-ui/react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { markEventEmployee } from '../../Services/markEvent';
import EventsTableSkeleton from './ManagerView/Components/Events/EventsTableSkeleton';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { toast } from './ui/use-toast';
import { UserType } from '@/lib/DB/Models/Employee';
import { addEventStore } from '@/lib/features/eventsSlice';
import { Label } from './ui/label';

function EventsCards({selectedMonth, user}: {selectedMonth: number, user: UserType}) {
    const events = useSelector((state: RootState) => state.events[selectedMonth]);
    
    const dispatch = useDispatch()
	if (!events) {
		return <EventsTableSkeleton />;
	}
	const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const handleClick = async (event: EventType) => {
		try {
			const res = await markEventEmployee(event, user._id);
            console.log(res)
			if (res.error) {
				toast({
					title: res.error,
					variant: "destructive",
				});
			} else {
				dispatch(addEventStore(res));
				toast({
					title: `נרשמת לאירוע בהצלחה`,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
  return (
    <section className="card pb-[10vh] space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-2">
         {
        sortedEvents.map((event: EventType) => {
            return (
                <Card key={event._id} className='p-1'>
                    <CardHeader className="bg-[#F7EFE5] rounded-t-lg py-4 mb-4">
                        <CardTitle className="text-center">
                            {event.location} <br/> 
                            {new Date(event.date).toLocaleDateString('he')}
                        </CardTitle>
                    </CardHeader>


                    <CardContent>
                        <div className="w-full flex justify-between items-center">
                        <Label>שעת התחלה</Label>
                        <p>{event.start}:00</p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                        <Label>שעת סיום</Label>
                        <p>{event.end}:00</p>
                        </div>
                        <div className="w-full">
                        <Label>מתנפחים </Label>
                        <ul>
                        {event.equipment.map((item: string, index: number) => {
                            return <p className="text-xs" key={index}>{item}</p> 
                        })}
                        </ul>
                        </div>
                    </CardContent>
                    <CardFooter>
                    {!event.isAssigned ? (
					<Button onClick={() => handleClick(event)}>השתבץ לאירוע</Button>
				): (<>
					<CheckIcon color={'green'} height={30} width={30}/> <h3>עובד: {event.employee}</h3>
				</>)}
                    </CardFooter>
                </Card>
            )
        })
    }
    </section>
  )
}

export default EventsCards
