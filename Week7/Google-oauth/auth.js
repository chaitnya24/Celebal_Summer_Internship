const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;


const GOOGLE_CLIENT_ID = your-client-id-here;
const GOOGLE_CLIENT_SECRET = your-client-secret-here;

passport.use(new GoogleStrategy({
  clientID: your-client-id-here,
  clientSecret: your-client-secret-here,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});