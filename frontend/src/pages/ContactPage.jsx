import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  Button,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md'


export default function Contact() {
    const textColor = useColorModeValue("gray.600", "gray.200");
  return (
    <Container  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex textColor={textColor}>
        <Box
          p="4" flex="1" mt={10} w="100%" 
          color="white"
          borderRadius="lg"
>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box textColor={textColor}>
                
                  <Heading align='center'>Contact</Heading>
                  
                  <Text align='center' mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    You can contact us by phone or email.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        textColor={textColor}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +370 69111337
                      </Button>
                      <Button
                      
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        textColor={textColor}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        ContactUs@Skelbiu.lt
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        textColor={textColor}
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Vilnius, Lithuania
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}