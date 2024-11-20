import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

interface UsersType {
  _id: string;
  name: string;
  username: string;
  email: string;
  bio?: string;
  image: string;
}

const UsersDataTable = ({ allUsers }: { allUsers: UsersType[] }) => {
  return (
    <Table>
      <TableCaption>A list of TELEGRAM Users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allUsers?.map((item: UsersType, idx: number) => {
          return (
            <TableRow key={item._id}>
              <TableCell>
                <Image
                  src={item?.image}
                  alt="User profile image"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </TableCell>
              <TableCell className="font-medium">
                <Link className="hover:underline" href={`/${item._id}`}>
                  {item.name}
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default UsersDataTable;
