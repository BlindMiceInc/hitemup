package email

type (
	EmailConfig struct {
		RecipientName        string
		Subject              string
		RequesterName        string
		RequesterAddress     string
		RequesterEmail       string
		RequesterPhoneNumber string
		Neighbourhood        string
		City                 string
		SocialService        []string
	}
)
