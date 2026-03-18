require("dotenv").config();
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: process.env.AWS_REGION });

const test = async () => {
  try {
    const command = new SendEmailCommand({
      Source: process.env.EMAIL_FROM,
      Destination: { ToAddresses: [process.env.EMAIL_FROM] },
      Message: {
        Subject: { Data: "SES Test Email" },
        Body: {
          Html: {
            Data: "<h1>SES is working!</h1><p>Email from AWS SES</p>",
          },
        },
      },
    });
    const result = await ses.send(command);
    console.log("✅ Email sent successfully!", result.MessageId);
  } catch (error) {
    console.error("❌ SES Error:", error.message);
  }
};

test();