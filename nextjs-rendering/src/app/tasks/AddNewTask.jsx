"use client";

import { Calendar, CirclePlus } from "@gravity-ui/icons";
import {
  Button,
  DateField,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextField,
} from "@heroui/react";

export function AddNewTask({ AddATask }) {
  return (
    <Modal>
      <Button variant="secondary">Add New Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add New Task</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below to add a new task to your list.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={AddATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter task title" />
                  </TextField>

                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter task description" />
                  </TextField>

                  <Select
                    className="w-[256px]"
                    name="status"
                    placeholder="Select one"
                  >
                    <Label>Status</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="in-progress" textValue="In Progress">
                          In Progress
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="pending" textValue="Pending">
                          Pending
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="complete" textValue="Complete">
                          Complete
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Select
                    className="w-[256px]"
                    name="priority"
                    placeholder="Select one"
                  >
                    <Label>Priority</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="high" textValue="High">
                          High
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="medium" textValue="Medium">
                          Medium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="low" textValue="Low">
                          Low
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField className="w-full" name="assignTo" type="text">
                    <Label>Assign To</Label>
                    <Input placeholder="Enter assignee name" />
                  </TextField>

                  <TextField className="w-full" name="tags" type="text">
                    <Label>Tags</Label>
                    <Input placeholder="Enter tags (comma separated)" />
                  </TextField>

                  <DateField className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                      <DateField.Prefix>
                        <Calendar className="size-4 text-muted" />
                      </DateField.Prefix>
                      <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                      </DateField.Input>
                    </DateField.Group>
                  </DateField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit">
                      Submit Task
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
