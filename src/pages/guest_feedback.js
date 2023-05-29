import React from 'react';
import { ChakraProvider, Container, Box, Image, Heading, Text, Input, RadioGroup, Radio, Stack, Button,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react';
import Logo from '../images/logo.webp';
import Background from '../images/TOP-VIEW-LOW.jpg';

function guest_feedback() {
  return (
    <ChakraProvider>
    <Box bgImage={Background} bgRepeat="no-repeat" bgAttachment='fixed' bgSize='100%' w='100%' p={4} color='white' >
      <Container maxW='container.xl' color='#000000' bgColor='white' borderRadius='20' px='20' py='10' my='18'  boxShadow='dark-lg'>
        <Container maxW='2xl' centerContent padding='4%'>
        <Image src={Logo} alt='Dan Abramov' />
        </Container>
            <Heading as='h3' size='lg'>Guest Feedback Form</Heading>
            <Text mb='8px' fontSize='xl' mt='10'>*1. Name:</Text>
            <Input size='md' id='name' variant='filled'/>
            <Text mb='8px' fontSize='xl' mt='10'>*2. Room No:</Text>
            <Input size='md' id='roomNo' variant='filled'/>
            <TableContainer>
  <Table maxWidth='100%' mt='4%'>
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Excellent</Th>
        <Th>Good</Th>
        <Th>Fair</Th>
        <Th>Poor</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm' p='2%' fontSize='xl'>*3. Check-In Experience:</Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
      </Tr>
      <Tr>
        <Td size='sm' p='2%' fontSize='xl'>*4. Cleanliness:</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm' p='2%' fontSize='xl'>*5. Housekeeping:</Td>
        <Td><input type='radio' name='3'/></Td>
        <Td><input type='radio' name='3'/></Td>
        <Td><input type='radio' name='3'/></Td>
        <Td><input type='radio' name='3'/></Td>
      </Tr>
      <Tr>
        <Td size='sm' p='2%' fontSize='xl'>*6. Staff Service:</Td>
        <Td><input type='radio' name='4'/></Td>
        <Td><input type='radio' name='4'/></Td>
        <Td><input type='radio' name='4'/></Td>
        <Td><input type='radio' name='4'/></Td>
      </Tr>
      <Tr>
        <Td size='sm' p='2%' fontSize='xl'>*7. Restaurant Food:</Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
      </Tr>
      <Tr>
        <Td size='sm' p='2%' fontSize='xl'>*8. Amenities:</Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
      </Tr>
      <Tr>
        <Td size='sm' p='2%' fontSize='xl'>*9. Overall Hotel Rating:</Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
            <Container my='10' centerContent>
                <Button colorScheme='facebook'>Submit</Button>
            </Container>
        </Container>
        </Box>
    </ChakraProvider>
  )
}

export default guest_feedback