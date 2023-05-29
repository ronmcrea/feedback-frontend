import React from 'react'
import { ChakraProvider, Container, Image, Heading, Text, Input, RadioGroup, Radio, Stack, Button, Textarea,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
} from '@chakra-ui/react';
import Logo from '../images/logo.webp';
import Background from '../images/TOP-VIEW-LOW.jpg';

function admission_feedback() {
  return (
    <ChakraProvider>
      <Box bgImage={Background} bgRepeat="no-repeat" bgAttachment='fixed' bgSize='100%' w='100%' p={4} color='white' >
        <Container maxW='container.xl' color='#000000' bgColor='white' borderRadius='20' px='20' py='10' my='18'  boxShadow='dark-lg'>
        <Container maxW='2xl' centerContent padding='4%'>
        <Image src={Logo} alt='Dan Abramov' />
        </Container>
            <Heading as='h3' size='lg'>Admissions Customer Satisfaction Survey</Heading>
            <Text mb='8px' fontSize='xl' mt='10'>*1. You are:</Text>
            <RadioGroup mt='10' id='youAre'>
                <Stack display="flex" flexDirection='row' justifyContent="flex-start" columnGap='10'>
                <Radio size='lg' value='Prospective Student' id='prospectiveStudent'>
                <Text fontSize='xl'>Prospective Student</Text>
                </Radio>
                <Radio size='lg' value='Current Student'>
                <Text fontSize='xl'>Current Student</Text>
                </Radio>
                <Radio size='lg' value='Parent' id='parent'>
                <Text fontSize='xl'>Parent</Text>
                </Radio>
                <Radio size='lg' value='Staff Member'>
                <Text fontSize='xl'>Staff Member</Text>
                </Radio>
                </Stack>
                <Radio size='lg' value='Other' mt='10'>
                <Text fontSize='xl'>Other (please specify)</Text>
                </Radio>
                <Input size='md' id='other' variant='filled' mt='5' placeholder='Please Specify'/>
            </RadioGroup>
            <Text mb='8px' fontSize='xl' mt='10'>*2. Your Email Address:</Text>
            <Input size='md' id='email' variant='filled' mt='5' placeholder='Enter Your Email Address'/>
            <Text mb='8px' fontSize='xl' mt='10'>*3. How likely is it that you would recommend Karunya University to a friend or colleague?</Text>
            <RadioGroup mt='10' id='recommend'>
                <Stack spacing='17%' direction='row'>
                <Radio size='lg' value='Excellent'>
                Excellent
                </Radio>
                <Radio size='lg' value='Good'>
                Good
                </Radio>
                <Radio size='lg' value='Fair'>
                Fair
                </Radio>
                <Radio size='lg' value='3'>
                3
                </Radio>
                </Stack>
            </RadioGroup>
            <Text mb='8px' fontSize='xl' mt='10'>*4. Thinking about your experience at the admissions office today, to what extent do you agree/disagree with the following statements?</Text>
            <TableContainer>
  <Table variant='striped' color='balck' maxWidth='100%'>
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Strongly Disagree</Th>
        <Th>Disagree</Th>
        <Th>Neutral</Th>
        <Th>Agree</Th>
        <Th>Strongly Agree</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td size='sm'>The admissions team responded<br></br> to your query in a timely manner</Td>
        <Td><input type='radio' name='response' id='response'/></Td>
        <Td><input type='radio' name='response' id='response'/></Td>
        <Td><input type='radio' name='response' id='response'/></Td>
        <Td><input type='radio' name='response' id='response'/></Td>
        <Td><input type='radio' name='response' id='response'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>The admissions staff was<br></br> courteous and responsive</Td>
        <Td><input type='radio' name='courteous' id='courteous'/></Td>
        <Td><input type='radio' name='courteous' id='courteous'/></Td>
        <Td><input type='radio' name='courteous' id='courteous'/></Td>
        <Td><input type='radio' name='courteous' id='courteous'/></Td>
        <Td><input type='radio' name='courteous' id='courteous'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>The admissions staff was<br></br> knowledgeable and was<br></br> able to help your unique <br></br>needs and/or requests</Td>
        <Td><input type='radio' name='knowledgable' id='knowledgable'/></Td>
        <Td><input type='radio' name='knowledgable' id='knowledgable'/></Td>
        <Td><input type='radio' name='knowledgable' id='knowledgable'/></Td>
        <Td><input type='radio' name='knowledgable' id='knowledgable'/></Td>
        <Td><input type='radio' name='knowledgable' id='knowledgable'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>The ambience of admissions <br></br>office was good</Td>
        <Td><input type='radio' name='ambience' id='ambience'/></Td>
        <Td><input type='radio' name='ambience' id='ambience'/></Td>
        <Td><input type='radio' name='ambience' id='ambience'/></Td>
        <Td><input type='radio' name='ambience' id='ambience'/></Td>
        <Td><input type='radio' name='ambience' id='ambience'/></Td>
      </Tr>
      <Tr>
        <Td size='sm'>The hospitality provided<br></br> exceeded my expectations</Td>
        <Td><input type='radio' name='hospitality' id='hospitality'/></Td>
        <Td><input type='radio' name='hospitality' id='hospitality'/></Td>
        <Td><input type='radio' name='hospitality' id='hospitality'/></Td>
        <Td><input type='radio' name='hospitality' id='hospitality'/></Td>
        <Td><input type='radio' name='hospitality' id='hospitality'/></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

            <Text mb='8px' fontSize='xl' mt='10'>*5. To what extent was the help provided?</Text>
            <RadioGroup mt='10' id='help'>
            <Stack display="flex" flexDirection='row' justifyContent="flex-start" columnGap='10'>
                <Radio size='lg' value='I didnot receive any of the information I needed'>
                <Text fontSize='xl'>I didnot receive any of the information I needed</Text>
                </Radio>
                <Radio size='lg' value='I received all the information and I am considering to join Karunya'>
                <Text fontSize='xl'>I received all the information and I am considering to join Karunya</Text>
                </Radio>
                </Stack>
            <Stack display="flex" flexDirection='row' justifyContent="flex-start" columnGap='10' mt='10'>
                <Radio size='lg' value='I received only partial information'>
                <Text fontSize='xl'>I received only partial information</Text>
                </Radio>
                <Radio size='lg' value='I received all the information I needed and I have applied for Karunya'>
                <Text fontSize='xl'>I received all the information I needed and I have applied for Karunya</Text>
                </Radio>
            </Stack>
            <Stack display="flex" flexDirection='row' justifyContent="flex-start" columnGap='10' mt='10'>
                <Radio size='lg' value='I received all the information but I have decided not to apply'>
                <Text fontSize='xl'>I received all the information but I have decided not to apply</Text>
                </Radio>
            </Stack>
            </RadioGroup>
            <Text fontSize='xl' mt='10'>Do you have any further comments (please specify)</Text>
                <Input size='md' id='comments' variant='filled' mt='5' placeholder='Please Specify'/>

            <Text mb='8px' fontSize='xl' mt='10'>*6. Overall, how satisfied or dissatisfied were you with the quality of service received from the Karunya Admissions Team?</Text>
            <RadioGroup mt='10' id='food'>
            <Stack display="flex" flexDirection='row' justifyContent="flex-start" columnGap='10'>
                <Radio size='lg' value='Very Dissatisfying'>
                <Text fontSize='xl'>Very Dissatisfying</Text>
                </Radio>
                <Radio size='lg' value='Satisfied'>
                <Text fontSize='xl'>Satisfied</Text>
                </Radio>
                <Radio size='lg' value='Dissatisfied'>
                <Text fontSize='xl'>Dissatisfied</Text>
                </Radio>
            </Stack>
            <Stack display="flex" flexDirection='row' justifyContent="flex-start" columnGap='10' mt='10'>
                <Radio size='lg' value='Very Satisfied'>
                <Text fontSize='xl'>Very Satisfied</Text>
                </Radio>
                <Radio size='lg' value='Neither Satisfied nor dissatisfied'>
                <Text fontSize='xl'>Neither Satisfied nor dissatisfied</Text>
                </Radio>
            </Stack>
            </RadioGroup>
            <Text mb='8px' fontSize='xl' mt='10' variant='filled'>*7. Was there anything you appreciated that we should continue doing?</Text>
            <Textarea variant='filled'/>
            <Text mb='8px' fontSize='xl' mt='10' variant='filled'>*8. Is there anything we could have done better?</Text>
            <Textarea variant='filled'/>
            <Container my='10' centerContent>
                <Button colorScheme='facebook'>Submit</Button>
            </Container>
        </Container>
        </Box>
    </ChakraProvider>
  )
}

export default admission_feedback