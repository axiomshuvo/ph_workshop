"use client";
import { Xmark } from "@gravity-ui/icons";
import { AlertDialog, Button, toast } from "@heroui/react";
import { redirect } from "next/navigation";

export default function BookingDeleteAlert({ bookingId }) {
  const handleCancelBooking = async (e) => {
    e.preventDefault();
    console.log("Cancel Booking clicked for bookingId:", bookingId);
    try {
      const response = await fetch(
        `http://localhost:5001/bookings/${bookingId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }
      toast.success("Booking cancelled successfully");
    } catch (error) {
      toast.error(`Error cancelling booking: ${error.message}`);
    }

    redirect("/my-bookings");
  };

  return (
    <AlertDialog>
      <Button variant="danger">
        <Xmark />
        Cancel Booking
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>this booking</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Change your mind
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={handleCancelBooking}
              >
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
