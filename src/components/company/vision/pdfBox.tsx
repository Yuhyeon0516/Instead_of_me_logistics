import { HStack, Text } from "@chakra-ui/react";
import { FaRegFilePdf } from "react-icons/fa6";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../../../global/recoil";

export default function PdfBox({ text }: { text: string }) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <HStack
            bg={"gray.100"}
            color={"gray.500"}
            fontSize={displayResolution === "web" ? "24px" : "14px"}
            px={displayResolution === "web" ? "25px" : "15px"}
            py={displayResolution === "web" ? "20px" : "10px"}
            borderRadius={displayResolution === "web" ? "15px" : "10px"}
            cursor={"pointer"}
        >
            <FaRegFilePdf />
            <Text>{text}</Text>
        </HStack>
    );
}
