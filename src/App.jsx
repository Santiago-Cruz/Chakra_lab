import { Box, Text, Button, ButtonGroup, Stack } from "@chakra-ui/react"
import './App.css'
import backgroundImage from '../images/wall.jpg';

function App() {

  return (
    <div className="container" style={{maxWidth: "1300px", margin: "0 auto"}}>
      <Box
        bgImage={`url(${backgroundImage})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100vw"
        h="50vh"
        filter="auto"
        brightness="100%"
      >
        <Box className="content" position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        >
          <Text color="white" align="center" marginBottom={5} fontFamily="Quicksand, sans-serif"
          fontSize="20">
            DOMINA EL TERRENO
          </Text>
          <Stack direction='row' spacing={5} align='center' fontFamily="Quicksand, sans-serif">
            <Button textColor="black" colorScheme='teal' variant='outline'>
              VER DETALLES
            </Button>
            <Button textColor="black" colorScheme='teal' variant='outline'>
              VER VIDEO
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default App
