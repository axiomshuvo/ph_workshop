"use client";

import { PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export function EditModal({ destination }) {
  const router = useRouter();
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destinationData = Object.fromEntries(formData.entries());
    // console.log("Form Data:", destinationData);

    try {
      const response = await fetch(
        `http://localhost:5001/destinations/${destination._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(destinationData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update destination");
      }
      const updatedDestination = await response.json();
      console.log("Updated Destination:", updatedDestination);
      router.refresh(); // Refresh the page to reflect the updated data
    } catch (error) {
      console.error("Error updating destination:", error);
    }
  };

  return (
    <Modal>
      <Button view="outlined" size="m">
        <PencilToSquare /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-w-5xl">
            <Modal.CloseTrigger />

            <Modal.Body>
              <form className="  space-y-8  " onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Destination Name */}
                  <div className="md:col-span-2">
                    <TextField
                      name="destinationName"
                      defaultValue={destinationName}
                      isRequired
                    >
                      <Label>Destination Name</Label>
                      <Input
                        placeholder="Bali Paradise"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Country */}
                  <TextField name="country" defaultValue={country} isRequired>
                    <Label>Country</Label>
                    <Input placeholder="Indonesia" className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                  {/* Category - Updated Select Component */}
                  <div>
                    <Select
                      defaultValue={category}
                      name="category"
                      isRequired
                      className="w-full"
                      placeholder="Select category"
                    >
                      <Label>Category</Label>
                      <Select.Trigger className="rounded-2xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Adventure" textValue="Adventure">
                            Adventure
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Beach" textValue="Beach">
                            Beach
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="City Break" textValue="City Break">
                            City Break
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Cultural" textValue="Cultural">
                            Cultural
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Desert" textValue="Desert">
                            Desert
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Historical" textValue="Historical">
                            Historical
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Honeymoon" textValue="Honeymoon">
                            Honeymoon
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Island" textValue="Island">
                            Island
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Luxury" textValue="Luxury">
                            Luxury
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Mountain" textValue="Mountain">
                            Mountain
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Nature" textValue="Nature">
                            Nature
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Wildlife" textValue="Wildlife">
                            Wildlife
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  {/* Price */}
                  <TextField
                    name="price"
                    defaultValue={price}
                    type="number"
                    isRequired
                  >
                    <Label>Price (USD)</Label>
                    <Input
                      type="number"
                      placeholder="1299"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Duration */}
                  <TextField name="duration" defaultValue={duration} isRequired>
                    <Label>Duration</Label>
                    <Input
                      placeholder="7 Days / 6 Nights"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Departure Date */}
                  <div className="md:col-span-2">
                    <TextField
                      name="departureDate"
                      defaultValue={departureDate}
                      type="date"
                      isRequired
                    >
                      <Label>Departure Date</Label>
                      <Input type="date" className="rounded-2xl" />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Image URL - Removed preview */}
                  <div className="md:col-span-2">
                    <TextField
                      name="imageUrl"
                      defaultValue={imageUrl}
                      isRequired
                    >
                      <Label>Image URL</Label>
                      <Input
                        type="url"
                        placeholder="https://example.com/bali-paradise.jpg"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      defaultValue={description}
                      isRequired
                    >
                      <Label>Description</Label>
                      <TextArea
                        placeholder="Describe the travel experience..."
                        className="rounded-3xl"
                      />
                      <FieldError />
                    </TextField>
                  </div>
                </div>

                {/* Buttons */}

                <Button
                  type="submit"
                  variant="outline"
                  slot="close"
                  // isLoading={isPending}
                  className=" rounded-none w-full bg-cyan-500 text-white"
                >
                  {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
                  Update Destination
                </Button>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
