"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Calendar,
  DateField,
  DatePicker,
  Form,
  Label,
  toast,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function BookingCard({ destination }) {
  const {
    data: session,
    // isPending, //loading state
    // error, //error object
    // refetch, //refetch the session
  } = authClient.useSession();

  // console.log("Session Data:", session);

  const signOut = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      toast.warning("Successfully signed out!");
      redirect("/"); // Redirect to login page after sign out
    }
  };

  const { _id, destinationName, country, price, category, duration, imageUrl } =
    destination;
  console.log("Destination Data:", destination);

  const [departureDate, setDepartureDate] = useState(null);
  //console.log("Selected Departure Date:", new Date(departureDate));

  const handleBooking = async (event) => {
    event.preventDefault();

    const bookingData = {
      userId: session?.user.id,
      price,
      destinationId: _id,
      destinationName,
      country,
      category,
      duration,
      imageUrl,
      departureDate: new Date(departureDate),
    };
    console.log("Booking Data:", bookingData);

    const res = await fetch("http://localhost:5001/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (res.ok) {
      toast.success(`${session?.user.name}, Your Booking successful!`);
    } else {
      toast.error("Booking failed. Please try again.");
    }

    console.log("Booking Response:", res);
  };

  return (
    <div>
      <Form className="flex flex-col gap-3 p-4 " onSubmit={handleBooking}>
        <p>Starting From </p>
        <p className="text-2xl text-red-500 font-bold">{price}</p>
        <p>Per Person </p>
        <DatePicker isRequired name="date" onChange={setDepartureDate}>
          <Label>Date</Label>
          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
            <DateField.Suffix>
              <DatePicker.Trigger>
                <DatePicker.TriggerIndicator />
              </DatePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>
          <DatePicker.Popover>
            <Calendar aria-label="Event date">
              <Calendar.Header>
                <Calendar.YearPickerTrigger>
                  <Calendar.YearPickerTriggerHeading />
                  <Calendar.YearPickerTriggerIndicator />
                </Calendar.YearPickerTrigger>
                <Calendar.NavButton slot="previous" />
                <Calendar.NavButton slot="next" />
              </Calendar.Header>
              <Calendar.Grid>
                <Calendar.GridHeader>
                  {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                </Calendar.GridHeader>
                <Calendar.GridBody>
                  {(date) => <Calendar.Cell date={date} />}
                </Calendar.GridBody>
              </Calendar.Grid>
              <Calendar.YearPickerGrid>
                <Calendar.YearPickerGridBody>
                  {({ year }) => <Calendar.YearPickerCell year={year} />}
                </Calendar.YearPickerGridBody>
              </Calendar.YearPickerGrid>
            </Calendar>
          </DatePicker.Popover>
        </DatePicker>
        <Button className="self-center" variant="danger" type="submit">
          Book Now
        </Button>
      </Form>
    </div>
  );
}
