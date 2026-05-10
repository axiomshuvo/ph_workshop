import { addNewPageTask } from "@/lib/actions";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";

const NewTaskPage = () => {
  return (
    <div className="w-1/2 min-h-screen mx-auto p-4">
      <h2>Add New Task</h2>
      <Form action={addNewPageTask} className="flex flex-col gap-4">
        <TextField className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter task title" />
        </TextField>

        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter task description" />
        </TextField>

        <Select className="w-[256px]" name="status" placeholder="Select one">
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

        <Select className="w-[256px]" name="priority" placeholder="Select one">
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
        <div className="flex  justify-between">
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot="close" type="submit">
            Submit Task
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewTaskPage;
