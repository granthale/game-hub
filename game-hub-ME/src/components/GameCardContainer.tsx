import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({children} : Props) => {
  return (
    <Box
      width={{ sm: "80vw", md: "40vw", lg: "25vw", xl: "16vw" }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer