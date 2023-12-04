import { VStack, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { gatAllDATA } from "../redux/userReducer/action";
import axios from "axios";

export const Management = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    // gatAllDATA(dispatch())
    axios
      .get(`https://worrisome-plum-parka.cyclic.app/allUser`)

      .then((res) => {
        console.log(res.data.user);
        // dispatch(gatAllDATA(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <VStack>
      <Button colorScheme="blue" m={4} onClick={onOpen}>
        Add Contact
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="FullName" type="text" />
            <br />
            <br />
            <Input placeholder="Email" type="email" />
            <br />
            <br />
            <Input placeholder="Number..." type="number" />
            <br />
            <br />
            <Select placeholder="label">
              <option value="work">Work</option>
              <option value="school">School</option>
              <option value="friends">Friends</option>
            </Select>
          </ModalBody>
          <Button>Submit</Button>
        </ModalContent>
      </Modal>
      {/* endd modal */}

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th> Email</Th>
              <Th isNumeric>Phone Number</Th>
              <Th>Label</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Jane Doe</Td>
              <Td>jane.doe@example.com</Td>
              <Td isNumeric>(555) 1234-567</Td>
              <Td>work</Td>
              <Td display="flex" justifyContent="space-between" gap={4}>
                <Button backgroundColor="green">Edit</Button>

                <Button backgroundColor="red">Delete</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};
