import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  budget: number;
  message: string;
}

export const ContactFormEmail: React.FC<Partial<ContactFormEmailProps>> = ({
  firstName = "John",
  lastName = "Doe",
  email = "johndoe@example.com",
  budget = 50000,
  message = "This is a sample message from the contact form.",
}) => (
  <Html>
    <Head />
    <Preview>
      New Contact Form Submission from {firstName} {lastName}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
          width="170"
          height="50"
          alt="Your Company Logo"
          style={logo}
        />
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Section style={section}>
          <Row style={row}>
            <Column style={iconColumn}>
              <Img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/user-icon.png`}
                width="24"
                height="24"
                alt="User"
              />
            </Column>
            <Column style={contentColumn}>
              <Text style={labelText}>Name:</Text>
              <Text style={valueText}>
                {firstName} {lastName}
              </Text>
            </Column>
          </Row>
          <Row style={row}>
            <Column style={iconColumn}>
              <Img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/email-icon.png`}
                width="24"
                height="24"
                alt="Email"
              />
            </Column>
            <Column style={contentColumn}>
              <Text style={labelText}>Email:</Text>
              <Text style={valueText}>{email}</Text>
            </Column>
          </Row>
          <Row style={row}>
            <Column style={iconColumn}>
              <Img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/budget-icon.png`}
                width="24"
                height="24"
                alt="Budget"
              />
            </Column>
            <Column style={contentColumn}>
              <Text style={labelText}>Budget:</Text>
              <Text style={valueText}>${budget.toLocaleString()}</Text>
            </Column>
          </Row>
          <Row style={row}>
            <Column style={iconColumn}>
              <Img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/message-icon.png`}
                width="24"
                height="24"
                alt="Message"
              />
            </Column>
            <Column style={contentColumn}>
              <Text style={labelText}>Message:</Text>
              <Text style={messageText}>{message}</Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: "#1F2937",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  width: "100%",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto 20px",
  display: "block",
};

const h1 = {
  color: "#F97316",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "0",
};

const section = {
  padding: "30px",
  borderRadius: "8px",
  border: "1px solid #374151",
  backgroundColor: "#374151",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const row = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "20px",
};

const iconColumn = {
  width: "40px",
  paddingRight: "15px",
};

const contentColumn = {
  flexGrow: 1,
};

const labelText = {
  color: "#F97316",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const valueText = {
  color: "#E5E7EB",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontSize: "16px",
  marginBottom: "0",
};

const messageText = {
  ...valueText,
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};
