import { Text, VStack } from "@chakra-ui/react";

export default function VisionTextBox({
    title,
    description,
    descriptionColor = "gray.500",
    isBold = false,
}: {
    title: string;
    description: string;
    descriptionColor?: string;
    isBold?: boolean;
}) {
    return (
        <VStack spacing={2}>
            <Text fontSize={"48px"} fontWeight={"extrabold"}>
                {title}
            </Text>
            <Text
                color={descriptionColor}
                fontWeight={isBold ? "extrabold" : "normal"}
            >
                {description}
            </Text>
        </VStack>
    );
}
