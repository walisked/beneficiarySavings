const admin = require('../config/firebase');
const { sendInviteEmail } = require('../utils/emailService');

exports.inviteUser = async (req, res) => {
  try {
    const { email, role } = req.body;
    
    // Generate sign-in link
    const actionCodeSettings = {
      url: `${process.env.CLIENT_URL}/onboarding?role=${role}`,
      handleCodeInApp: true
    };
    
    const link = await admin.auth().generateSignInWithEmailLink(email, actionCodeSettings);
    
    // Send email
    await sendInviteEmail(email, link, role);
    
    res.status(200).json({ message: 'Invitation sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};