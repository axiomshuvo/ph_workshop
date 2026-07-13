"use client";

import { Delete } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteDestination({ destination }) {
  const { destinationName } = destination;
  const handleDelete = async () => {
    console.log("Delete destination:", destinationName);
    try {
      const response = await fetch(
        `http://localhost:5001/destinations/${destination._id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();
      console.log("Delete response:", data);
      if (!response.ok) {
        throw new Error("Failed to delete destination");
      }
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
    redirect("/destinations");
  };
  return (
    <AlertDialog>
      <Button variant="danger">
        <Delete /> Delete Destination
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
