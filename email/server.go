package main

import (
	"bytes"
	"email/pkg/email"
	"fmt"
	"html/template"
	"log"
	"net/smtp"
	"os"
)

func main() {

	// Set up Gmail auth with my creds
	GMAIL_USERNAME := os.Getenv("GMAIL_USERNAME")
	GMAIL_PASSWORD := os.Getenv("GMAIL_PASSWORD")
	gmailAuth := smtp.PlainAuth("", GMAIL_USERNAME, GMAIL_PASSWORD, "smtp.gmail.com")

	// Parse the template
	t, err := template.ParseFiles("templates/emailTemplate.html")
	if err != nil {
		log.Fatal(err)
	}

	// Shitty test for now, can improve later
	emailconf := email.EmailConfig{
		RecipientName:        "Contact Name",
		Subject:              "Test Subject",
		RequesterName:        "Aaron",
		RequesterAddress:     "My address",
		RequesterEmail:       "My email",
		RequesterPhoneNumber: "My number",
		Neighbourhood:        "Rochester",
		City:                 "NY",
		SocialService:        []string{"Education", "Community Development"},
	}

	// This is where the email body data will be stored
	var body bytes.Buffer
	// Set headers
	headers := "MIME-version: 1.0;\nContent-Type: text/html;"
	body.Write([]byte(fmt.Sprintf("Subject: %s\n%s\n\n", emailconf.Subject, headers)))

	t.Execute(&body, emailconf)

	err = smtp.SendMail("smtp.gmail.com:587", gmailAuth, GMAIL_USERNAME, []string{"recipientemail@email.com"}, body.Bytes())
	if err != nil {
		log.Fatalf("Could not send the mail: %s", err.Error())
	}
	log.Print("Sucessfully sent email")

}
