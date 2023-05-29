import React from 'react'
import { ChakraProvider, Container, Box, Image, Heading, Text, Input, RadioGroup, Radio, Stack, Button,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Select, Checkbox, Textarea } from '@chakra-ui/react';
import Logo from '../images/logo.webp';
import Background from '../images/TOP-VIEW-LOW.jpg';

function mess_feedback() {
    return (
        <ChakraProvider>
        <Box bgImage={Background} bgRepeat="no-repeat" bgAttachment='fixed' bgSize='100%' w='100%' p={4} color='white' >
          <Container maxW='container.xl' color='#000000' bgColor='white' borderRadius='20' px='20' py='10' my='18'  boxShadow='dark-lg'>
            <Container maxW='2xl' centerContent padding='4%'>
            <Image src={Logo} alt='Dan Abramov' />
            </Container>
                <Heading as='h3' size='lg'>Mess Feedback Form</Heading>
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
                <Text mb='8px' fontSize='xl' mt='10'>*8. Which mess have you opted for?</Text>
                <Select placeholder='Select your mess' variant='filled' mt='5'>
                    <option value='option1'>South Mess</option>
                    <option value='option2'>North Mess</option>
                    <option value='option1'>Andhra Mess</option>
                    <option value='option2'>Kerala Mess</option>
                    <option value='option2'>NRI Mess</option>
                </Select>
                <Text mb='8px' fontSize='xl' mt='10'>*9. Where do you hail from?</Text>
                <Select placeholder='Select your state' variant='filled' mt='5'>
                    <option value='option1'>Andaman and Nicobar Islands</option>
                    <option value='option1'>Andhra Pradesh</option>
                    <option value='option2'>Arunachal Pradesh</option>
                    <option value='option1'>Assam</option>
                    <option value='option2'>Bihar</option>
                    <option value='option1'>Chandigarh</option>
                    <option value='option2'>Chhattisgarh</option>
                    <option value='option2'>Dadra and Nagar Haveli</option>
                    <option value='option2'>Daman and Diu</option>
                    <option value='option1'>Delhi</option>
                    <option value='option1'>Goa</option>
                    <option value='option2'>Gujarat</option>
                    <option value='option1'>Haryana</option>
                    <option value='option2'>Himachal Pradesh</option>
                    <option value='option2'>Jammu and Kashmir</option>
                    <option value='option1'>Jharkhand</option>
                    <option value='option2'>Karnataka</option>
                    <option value='option1'>Kerala</option>
                    <option value='option1'>Lakshadweep</option>
                    <option value='option2'>Madhya Pradesh</option>
                    <option value='option2'>Maharashtra</option>
                    <option value='option1'>Manipur</option>
                    <option value='option2'>Meghalaya</option>
                    <option value='option1'>Mizoram</option>
                    <option value='option2'>Nagaland</option>
                    <option value='option2'>Odisha</option>
                    <option value='option2'>Punjab</option>
                    <option value='option2'>Pondicherry</option>
                    <option value='option1'>Rajasthan</option>
                    <option value='option2'>Sikkim</option>
                    <option value='option2'>Tamil Nadu</option>
                    <option value='option1'>Telangana</option>
                    <option value='option2'>Tripura</option>
                    <option value='option1'>Uttar Pradesh</option>
                    <option value='option2'>Uttarakhand</option>
                    <option value='option2'>West Bengal</option>
                </Select>
                
<TableContainer>
  <Table variant='striped' color='balck' maxWidth='100%' mt='10'>
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Very Bad</Th>
        <Th>Bad</Th>
        <Th>OK</Th>
        <Th>Good</Th>
        <Th>Very Good</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm'>Hygiene</Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
        <Td><input type='radio' name='1'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Quality of food</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Taste of food</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Availability of food throughout the mess timing</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Balanced / Healthy Diet</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Snacks / Refreshments</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Cleanliness of Dining Hall</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Cleanliness of Wash Area</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>Cleanliness of food distribution</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>How courteous are the mess staff?</Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
        <Td><input type='radio' name='2'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
                <Text mb='8px' fontSize='xl' mt='10'>Which meal do you usually skip?</Text>
                <Stack spacing={5} direction='row' mt='5'>
  <Checkbox>Breakfast</Checkbox>
  <Checkbox>Lunch</Checkbox>
  <Checkbox>Evening Snacks</Checkbox>
  <Checkbox>Dinner</Checkbox>
</Stack>
            <Textarea variant='filled' placeholder='Reason for skipping the meals' mt='5'/>
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

export default mess_feedback