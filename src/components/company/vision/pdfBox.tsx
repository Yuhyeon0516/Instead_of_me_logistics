import { HStack, Text } from "@chakra-ui/react";
import { FaRegFilePdf } from "react-icons/fa6";

export default function PdfBox({ text }: { text: string }) {
    return (
        <HStack
            bg={"gray.100"}
            color={"gray.500"}
            fontSize={"24px"}
            px={"25px"}
            py={"20px"}
            borderRadius={"15px"}
            cursor={"pointer"}
        >
            <FaRegFilePdf />
            <Text>{text}</Text>
        </HStack>
    );
}
