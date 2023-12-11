import { Text, VStack } from "@chakra-ui/react";

export default function VisionTextBox({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <VStack spacing={2}>
            <Text fontSize={"48px"} fontWeight={"extrabold"}>
                {title}
            </Text>
            <Text color={"gray.500"}>{description}</Text>
        </VStack>
    );
}
