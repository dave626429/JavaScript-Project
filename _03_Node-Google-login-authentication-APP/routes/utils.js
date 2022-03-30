const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = process.env.CLIENT_ID;

const client = new OAuth2Client(CLIENT_ID);

async function verify(user_token_id) {
  const ticket = await client.verifyIdToken({
    idToken: user_token_id,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
}

function verifySessionToken(req, res, next) {
  const session_token = req.cookies["session_token"];
  verify(session_token)
    .then((payload) => {
      next();
    })
    .catch(() => {
      res.redirect("/login");
    });
}

module.exports = { verify, verifySessionToken };
