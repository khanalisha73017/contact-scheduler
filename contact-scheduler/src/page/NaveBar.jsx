import React from "react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NaveBar = () => {
  return (
    <Flex align="center" backgroundColor="red" gap={3} p={4}>
      <Heading> Contact Scheduler </Heading>
      <Spacer />

      <Link to="/">Contact Management</Link>
      <Link to="/appointment">Contact Management</Link>
    </Flex>
  );
};
