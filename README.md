# medimind-front-test
deployed to Vercel to test HelseID login flow via OAuth 2.0.

##live URL
https://medimind-front-test.vercel.app

##current flow
- Login button on `/` redirects to HelseID
- After login, user is redirected to `/callback` with `?code=...`
- Auth code is logged to console (no backend token exchange yet)

##HelseID Setup
- Redirect URI: `/callback`
- API Access: `HelseID Test-token-tjeneste`
- Audience: set to client ID
- Awaiting approval from Norsk Helsenett

##Environment Variables
Set these locally or in Vercel:
