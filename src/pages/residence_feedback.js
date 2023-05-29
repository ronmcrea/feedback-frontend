import React from 'react'
import { ChakraProvider, Container, Box, Image, Heading, Text, Input, RadioGroup, Radio, Stack, Button,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Select, Textarea } from '@chakra-ui/react';
import Logo from '../images/logo.webp';
import Background from '../images/TOP-VIEW-LOW.jpg';

function residence_feedback() {
    return (
        <ChakraProvider>
        <Box bgImage={Background} bgRepeat="no-repeat" bgAttachment='fixed' bgSize='100%' w='100%' p={4} color='white' >
          <Container maxW='container.xl' color='#000000' bgColor='white' borderRadius='20' px='20' py='10' my='18'  boxShadow='dark-lg'>
            <Container maxW='2xl' centerContent padding='4%'>
            <Image src={Logo} alt='Dan Abramov' />
            </Container>
                <Heading as='h3' size='lg'>Residence Feedback Form</Heading>
                <Text mb='8px' fontSize='xl' mt='10'>*1. Student Register Number:</Text>
                <Input size='md' id='name' variant='filled'/>
                <Text mb='8px' fontSize='xl' mt='10'>*2. Student Name:</Text>
                <Input size='md' id='name' variant='filled'/>
                <Text mb='8px' fontSize='xl' mt='10'>*3. Email:</Text>
                <Input type='email' size='md' id='name' variant='filled'/>
                <Text mb='8px' fontSize='xl' mt='10'>*4. Gender:</Text>
                <Select placeholder='Select option' variant='filled' mt='5'>
                    <option value='option1'>Male</option>
                    <option value='option2'>Female</option>
                </Select>
                <Text mb='8px' fontSize='xl' mt='10'>*5. Year of Study:</Text>
                <Select placeholder='Select option' variant='filled' mt='5'>
                    <option value='option1'>I</option>
                    <option value='option2'>II</option>
                    <option value='option1'>III</option>
                    <option value='option2'>IV</option>
                </Select>
                <Text mb='8px' fontSize='xl' mt='10'>*6. Graduate Program:</Text>
                <Select placeholder='Select option' variant='filled' mt='5'>
                    <option value='option1'>Undergraduate</option>
                    <option value='option2'>Postgraduate</option>
                </Select>
                <Text mb='8px' fontSize='xl' mt='10'>*7. Residence:</Text>
                <Select placeholder='Select option' variant='filled' mt='5'>
                    <option value='option1'>FDR</option>
                    <option value='option2'>Hebzibah Residence</option>
                    <option value='option1'>Angelina Residence</option>
                    <option value='option2'>JMR</option>
                </Select>
                <TableContainer>
  <Table variant='striped' color='balck' maxWidth='100%' mt='10'>
    <Thead>
      <Tr>
        <Th>Infrastructure Facilities</Th>
        <Th>Very Bad</Th>
        <Th>Bad</Th>
        <Th>OK</Th>
        <Th>Good</Th>
        <Th>Very Good</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm'>Room</Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Furniture</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Bathroom and Restroom</Td>
        <Td><input type='radio' name='3'/></Td>
        <Td><input type='radio' name='3'/></Td>
        <Td><input type='radio' name='3'/></Td>
        <Td><input type='radio' name='3'/></Td>
        <Td><input type='radio' name='3'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Gym Facilities</Td>
        <Td><input type='radio' name='4'/></Td>
        <Td><input type='radio' name='4'/></Td>
        <Td><input type='radio' name='4'/></Td>
        <Td><input type='radio' name='4'/></Td>
        <Td><input type='radio' name='4'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Play Grounds</Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Public Spaces / Lounges</Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Safety & Security</Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Wifi & Internet</Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
        <Td><input type='radio' name='5'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='striped' color='balck' maxWidth='100%' mt='10'>
    <Thead>
      <Tr>
        <Th>Room / Floor Ambience</Th>
        <Th>Very Bad</Th>
        <Th>Bad</Th>
        <Th>OK</Th>
        <Th>Good</Th>
        <Th>Very Good</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm'>Ambience during Study Hours<br></br>(8:30 pm to 10:30 pm)</Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Ambience during Silence Hours<br></br>(10:30 pm to 6:00 am)</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='striped' color='balck' maxWidth='100%' mt='10'>
    <Thead>
      <Tr>
        <Th>Administrative Services</Th>
        <Th>Very Bad</Th>
        <Th>Bad</Th>
        <Th>OK</Th>
        <Th>Good</Th>
        <Th>Very Good</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm'>Hostel Discipline</Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Counselling Support</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Emergency Care</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='striped' color='balck' maxWidth='100%' mt='10'>
    <Thead>
      <Tr>
        <Th>Services</Th>
        <Th>Very Bad</Th>
        <Th>Bad</Th>
        <Th>OK</Th>
        <Th>Good</Th>
        <Th>Very Good</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm'>Water Services</Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Electricity Services</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Cleanliness of your residence</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Cleanliness of Bathroom Facilities</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Timeliness of repairs</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Security Services</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Hot Kitchen / Food Courts</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Utility Shops / Canteen</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Photocopy / Printing Services</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Laundry Services</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<TableContainer>
  <Table variant='striped' color='balck' maxWidth='100%' mt='10'>
    <Thead>
      <Tr>
        <Th>Events</Th>
        <Th>Very Bad</Th>
        <Th>Bad</Th>
        <Th>OK</Th>
        <Th>Good</Th>
        <Th>Very Good</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm'>Recreational Activities</Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Sports Activities</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
                <Text mb='8px' fontSize='xl' mt='10'>Overall to what degree are you satisfied with your living in your residence</Text>
                <Input size='md' id='name' variant='filled'/>
            <Text mb='8px' fontSize='xl' mt='10' variant='filled'>What do you like most about your residence?</Text>
            <Textarea variant='filled' placeholder='Give your comments'/>
            <Text mb='8px' fontSize='xl' mt='10' variant='filled'>Is there anything we could do to enhance your resident experience?</Text>
            <Textarea variant='filled' placeholder='Give your comments'/>
                <Container my='10' centerContent>
                    <Button colorScheme='facebook'>Submit</Button>
                </Container>
            </Container>
            </Box>
        </ChakraProvider>
      )
}

export default residence_feedback