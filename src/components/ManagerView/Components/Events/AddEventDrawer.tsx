import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import labels from "../../../../../Labels/AddEvent.json";
import AddEventForm from "./AddEventForm";
function AddEventDrawer() {
	return (
		<Drawer>
			<DrawerTrigger className="fixed bottom-[10vh] right-5 z-10 bg-primary h-[3rem] w-[3rem] rounded-full hover:scale-105">
				<PlusCircledIcon color="white" className="w-full h-full rounded-full" />
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-center">
					<DrawerTitle className="text-appLightPurple text-center">
						{labels.addEventSubTitle}
					</DrawerTitle>
					<DrawerDescription className="text-center">{labels.addEventHeader}</DrawerDescription>
				</DrawerHeader>
				<AddEventForm />
				<DrawerFooter>
					<DrawerClose>
						<Button variant="outline">סגור</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export default AddEventDrawer;
