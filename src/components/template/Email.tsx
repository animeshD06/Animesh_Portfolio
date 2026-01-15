import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Row,
  Column,
  Link,
} from "@react-email/components";

import { selfData } from "@/constant";

interface EmailTemplateProps {
  userName: string;
  contactReason: string;
  userMessage: string;
}

export function EmailTemplate({
  userName,
  contactReason,
  userMessage,
}: EmailTemplateProps) {
  const socials = [
    {
      name: "GitHub",
      url: `https://github.com/${selfData.socials_username.github}`,
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
      name: "LinkedIn",
      url: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    },
    {
      name: "Instagram",
      url: `https://instagram.com/${selfData.socials_username.instagram}`,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
  ];

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Row>
              <Column style={{ width: "40px" }}>
                <Img
                  src="https://raw.githubusercontent.com/aarabii/An/refs/heads/master/public/images/logo.png"
                  alt="AN"
                  width="40"
                  height="40"
                />
              </Column>
              <Column>
                <Text style={brandText}>Animesh Abhi Dubey</Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Text style={heading}>Hey {userName}! 🚀</Text>
            <Text style={text}>
              Thanks a bunch for reaching out! 🎉 <br />
              Your message just landed safely in my inbox, and I've already
              notified the caffeine team (aka me) to get on it ASAP.
            </Text>

            <Text style={text}>
              Here's a quick recap of what you sent, in case you forgot (or
              your cat walked across the keyboard):
            </Text>

            <Text style={label}>
              📌 Reason to Contact: <strong>{contactReason}</strong>
            </Text>

            <Text style={label}>💬 Message:</Text>
            <pre style={codeBlock}>{userMessage}</pre>

            <Text style={text}>
              I'll get back to you soon probably sooner than your food
              delivery app says "just 10 more minutes." 🍕
            </Text>

            <Section style={socialSection}>
              <table style={socialTable}>
                <tbody>
                  <tr>
                    {socials.map((social) => (
                      <td key={social.name} style={socialIconCol}>
                        <Link href={social.url}>
                          <Img
                            src={social.icon}
                            alt={social.name}
                            width="28"
                            height="28"
                            style={socialIcon}
                          />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </Section>

            <Text style={footerText}>
              You're receiving this email because you contacted me via my
              site. If that wasn't you... it might've been your cat
              again 🐾
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = {
  background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #6633ee 100%)",
  padding: "40px 20px",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#ffffff",
  lineHeight: "1.5",
};

const container: React.CSSProperties = {
  backgroundColor: "transparent",
  maxWidth: "600px",
  margin: "0 auto",
};

const header: React.CSSProperties = {
  marginBottom: "30px",
  alignItems: "center",
};

const brandText: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "10px",
  marginTop: "5px",
};

const heading: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const text: React.CSSProperties = {
  fontSize: "16px",
  marginBottom: "16px",
};

const label: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "20px",
};

const codeBlock: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.1)",
  padding: "16px",
  borderRadius: "8px",
  fontFamily: "monospace",
  fontSize: "14px",
  whiteSpace: "pre-wrap",
  lineHeight: "1.4",
  color: "#fff",
  marginTop: "8px",
};

const socialSection: React.CSSProperties = {
  marginTop: "30px",
  padding: "20px",
  textAlign: "center",
  width: "100%",
};

const socialTable: React.CSSProperties = {
  margin: "0 auto",
  borderSpacing: "12px",
  borderCollapse: "separate",
};

const socialIconCol: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.08)",
  padding: "8px",
  borderRadius: "8px",
  textAlign: "center",
};

const socialIcon: React.CSSProperties = {
  borderRadius: "4px",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  marginTop: "30px",
  color: "#ccc",
};
