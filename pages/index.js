import { Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Seattle
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Vedant Grover</Heading>
                    <p>Aspring Developer</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" borderRadius="full" src="/images/me1.jpeg" alt="Profile Image" />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <br/>
                <Paragraph>Hello!</Paragraph>
            </Section>
        </Container>
    )
}

export default Page