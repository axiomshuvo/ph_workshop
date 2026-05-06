import { Button } from "@heroui/react";

export default function Home() {
  return (
    <>
      <h1>this is home</h1>
      <Button>My Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </>
  );
}
