import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
        <Skeleton height="200px" />    
        <CardBody>
            <SkeletonText mt="5" noOfLines={4} spacing="4"/>
        </CardBody>
    </Card>
  )
};

export default SkeletonCard;
