import { Box, VStack, Text, Grid } from "@chakra-ui/react";
import BringingTextBoxMobile from "./partnersBringing/bringingTextBoxMobile";

export default function PartenrsBringingMobile() {
    return (
        <Box
            w={"100%"}
            px={"30px"}
            pt={"50px"}
            pb={"100px"}
            bgColor={"white"}
            color={"black"}
        >
            <VStack alignItems={"flex-start"} spacing={7}>
                <Text color={"#FC6307"} fontSize={"20px"}>
                    Our Partners
                </Text>
                <Text
                    fontSize={"36px"}
                    fontWeight={"extrabold"}
                    lineHeight={"1.2"}
                >
                    우리의 파트너,
                    <br />
                    모두가 하나 되었습니다.
                </Text>

                <Grid
                    templateColumns={"repeat(3,1fr)"}
                    gap={"10px"}
                    alignSelf={"center"}
                >
                    <BringingTextBoxMobile name="ConnectFlows" />
                    <BringingTextBoxMobile name="GreenlightMasters" />
                    <BringingTextBoxMobile name="PowerPlates" />
                    <BringingTextBoxMobile name="PowerSolutions" />
                    <BringingTextBoxMobile name="NeoFly" />
                    <BringingTextBoxMobile name="GrowPlus" />
                    <BringingTextBoxMobile name="FlightGlobal" />
                    <BringingTextBoxMobile name="SafeTrades" />
                    <BringingTextBoxMobile name="DeltaSoft" />
                    <BringingTextBoxMobile name="PerfectPartners" />
                    <BringingTextBoxMobile name="MasterDistributors" />
                    <BringingTextBoxMobile name="SmartNetworks" />
                    <BringingTextBoxMobile name="SunshineCircles" />
                    <BringingTextBoxMobile name="GlobalTraders" />
                    <BringingTextBoxMobile name="ExpressCubes" />
                </Grid>
            </VStack>
        </Box>
    );
}
