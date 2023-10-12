import functions from 'firebase-functions';
import admin from 'firebase-admin'

admin.initializeApp();

exports.sendOTP = functions.https.onCall(async (data, context) => {
  const phoneNumber = data.phoneNumber;
  const auth = admin.auth();

  try {
    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const verificationSnapshot = await auth.signInWithPhoneNumber(phoneNumber);
    return { verificationId: verificationSnapshot.verificationId };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Error sending OTP', error);
  }
});