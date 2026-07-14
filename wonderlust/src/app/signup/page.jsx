"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { redirect } from "next/navigation";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    // console.log("Form Data:", user);

    const { data, error } = await authClient.signUp.email({
      email: user.email, // user email address
      password: user.password, // user password -> min 8 characters by default
      name: user.fullName, // user display name
      image: user.imgUrl, // User image URL (optional)
      // callbackURL: "/", // A URL to redirect to after the user verifies their email (optional)
    });
    console.log("Signup Response:", { data, error });
    if (data) {
      toast.success(
        "Sign up successful! Please check your email to verify your account.",
      );
      redirect("/");
    }
    if (error) {
      toast.danger(error.message || "An error occurred during sign up.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-4">
      <Card>
        <Card.Header>
          <Card.Title>Sign Up</Card.Title>
          <Card.Description>
            Please fill in the form below to create an account.
          </Card.Description>
        </Card.Header>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <Card.Content>
            {/* Full Name  */}
            <TextField
              isRequired
              name="fullName"
              validate={(value) => {
                if (!value) {
                  return "Please enter your full name";
                }
                return null;
              }}
            >
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            {/* img url */}
            <TextField
              isRequired
              name="imgUrl"
              type="url"
              validate={(value) => {
                if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(value)) {
                  return "Please enter a valid image URL (jpg, jpeg, png, gif)";
                }
                return null;
              }}
            >
              <Label>Profile Image URL</Label>
              <Input placeholder="https://example.com/image.jpg" />
              <FieldError />
            </TextField>
            {/* Email  */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            {/* password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
          </Card.Content>
          <Card.Footer className="">
            <div className="flex w-full justify-between">
              <Button type="reset" variant="secondary">
                Reset
              </Button>
              <Button type="submit">
                <Check />
                Create Account
              </Button>
            </div>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
}
