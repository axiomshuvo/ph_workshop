"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const userData = Object.fromEntries(formData.entries());

  const { data, error } = await authClient.signIn.email({
    email: userData.email,
    password: userData.password,
    rememberMe: true,
    callbackURL: "/dashboard",
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Sign-in successful");
  }
};

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container mx-auto py-20">
      <h2 className="mb-5 text-center text-3xl font-bold">Please Sign In</h2>

      <Form className="mx-auto flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
          <InputGroup>
            <InputGroup.Input placeholder="john@example.com" />
          </InputGroup>
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          validate={(value) => {
            if (value.length < 8)
              return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(value))
              return "Password must contain at least one uppercase letter";
            if (!/[0-9]/.test(value))
              return "Password must contain at least one number";
            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <InputGroup.Suffix>
              <button
                type="button"
                aria-label={isVisible ? "Hide password" : "Show password"}
                onClick={() => setIsVisible((v) => !v)}
                className="flex items-center px-3 text-[--muted] hover:text-[--foreground] transition-colors"
              >
                {isVisible ? <EyeSlash /> : <Eye />}
              </button>
            </InputGroup.Suffix>
          </InputGroup>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
