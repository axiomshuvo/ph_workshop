"use client";
import { CircleInfoFill, Gear } from "@gravity-ui/icons";
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";

export function UsersTable({ users, deleteUserAction }) {
  console.log(users);
  const handleDeleteUser = async (userId) => {
    // Call the deleteUser function from actions.js
    await deleteUserAction(userId);
  };
  return (
    <div className="container mx-auto p-4">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell> {user?.username || user?.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-3">
                      <Link href={`/users/${user._id}`}>
                        <Button variant="outline">
                          Details
                          <CircleInfoFill />
                        </Button>
                      </Link>

                      <Link href={`/users/${user._id}/edit`}>
                        <Button variant="secondary">
                          Edit <Gear />
                        </Button>
                      </Link>

                      <AlertDialog>
                        <Button variant="danger">Delete</Button>
                        <AlertDialog.Backdrop>
                          <AlertDialog.Container>
                            <AlertDialog.Dialog className="sm:max-w-[400px]">
                              <AlertDialog.CloseTrigger />
                              <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                  Delete User permanently?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>
                              <AlertDialog.Body>
                                <p>
                                  This will permanently delete
                                  <strong> {user.username}</strong> and all of
                                  its data. This action cannot be undone.
                                </p>
                              </AlertDialog.Body>
                              <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                  Cancel
                                </Button>
                                <Button
                                  onClick={() => handleDeleteUser(user._id)}
                                  slot="close"
                                  variant="danger"
                                >
                                  Delete User
                                </Button>
                              </AlertDialog.Footer>
                            </AlertDialog.Dialog>
                          </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                      </AlertDialog>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
