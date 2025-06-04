export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <title>Verify Your Email</title>
</head>
<body>
  <h1>Verify Your Email</h1>
  <p>Thank you for signing up for Akafta! Your verification code is:</p>
  <h2 style="color: #414EF9;">{{verification_code}}</h2>
  <p>This code will expire in 10 minutes.</p>
  <p>Thanks,<br>The Akafta Team</p>
</body>
</html>
`;
export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Password Reset</title>
    <style type="text/css" rel="stylesheet" media="all">
    /* Base ------------------------------ */
    *:not(br):not(tr):not(html) {
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    body {
      width: 100% !important;
      height: 100%;
      margin: 0;
      line-height: 1.4;
      background-color: #F5F7F9;
      color: #839197;
      -webkit-text-size-adjust: none;
    }
    a {
      color: #414EF9;
    }

    /* Layout ------------------------------ */
    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F7F9;
    }
    .email-content {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    /* Masthead ----------------------- */
    .email-masthead {
      padding: 25px 0;
      text-align: center;
    }
    .email-masthead_logo {
      max-width: 400px;
      border: 0;
    }
    .email-masthead_name {
      font-size: 16px;
      font-weight: bold;
      color: #839197;
      text-decoration: none;
      text-shadow: 0 1px 0 white;
    }

    /* Body ------------------------------ */
    .email-body {
      width: 100%;
      margin: 0;
      padding: 0;
      border-top: 1px solid #E7EAEC;
      border-bottom: 1px solid #E7EAEC;
      background-color: #FFFFFF;
    }
    .email-body_inner {
      width: 570px;
      margin: 0 auto;
      padding: 0;
    }
    .email-footer {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      text-align: center;
    }
    .email-footer p {
      color: #839197;
    }
    .body-action {
      width: 100%;
      margin: 30px auto;
      padding: 0;
      text-align: center;
    }
    .body-sub {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #E7EAEC;
    }
    .content-cell {
      padding: 35px;
    }
    .align-right {
      text-align: right;
    }

    /* Type ------------------------------ */
    h1 {
      margin-top: 0;
      color: #292E31;
      font-size: 19px;
      font-weight: bold;
      text-align: left;
    }
    h2 {
      margin-top: 0;
      color: #292E31;
      font-size: 16px;
      font-weight: bold;
      text-align: left;
    }
    h3 {
      margin-top: 0;
      color: #292E31;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
    }
    p {
      margin-top: 0;
      color: #839197;
      font-size: 16px;
      line-height: 1.5em;
      text-align: left;
    }
    p.sub {
      font-size: 12px;
    }
    p.center {
      text-align: center;
    }

    /* Buttons ------------------------------ */
    .button {
      display: inline-block;
      width: 200px;
      background-color: #414EF9;
      border-radius: 3px;
      color: #ffffff;
      font-size: 15px;
      line-height: 45px;
      text-align: center;
      text-decoration: none;
      -webkit-text-size-adjust: none;
      mso-hide: all;
    }
    .button--green {
      background-color: #28DB67;
    }
    .button--red {
      background-color: #FF3665;
    }
    .button--blue {
      background-color: #414EF9;
    }

    /*Media Queries ------------------------------ */
    @media only screen and (max-width: 600px) {
      .email-body_inner,
      .email-footer {
        width: 100% !important;
      }
    }
    @media only screen and (max-width: 500px) {
      .button {
        width: 100% !important;
      }
    }
  </style>
</head>
<body>
  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table class="email-content" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td class="email-masthead">
              <a class="email-masthead_name">Akafta</a>
            </td>
          </tr>
          <tr>
            <td class="email-body" width="100%">
              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-cell">
                    <h1>Password Reset Successful</h1>
                    <p>Your password has been successfully reset. You can now log in with your new password.</p>
                    <p>Thanks,<br>The Akafta Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Choose a new password for Canvas</title>
  <style type="text/css" rel="stylesheet" media="all">
    /* Base ------------------------------ */
    *:not(br):not(tr):not(html) {
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    body {
      width: 100% !important;
      height: 100%;
      margin: 0;
      line-height: 1.4;
      background-color: #F5F7F9;
      color: #839197;
      -webkit-text-size-adjust: none;
    }
    a {
      color: #414EF9;
    }

    /* Layout ------------------------------ */
    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F7F9;
    }
    .email-content {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    /* Masthead ----------------------- */
    .email-masthead {
      padding: 25px 0;
      text-align: center;
    }
    .email-masthead_logo {
      max-width: 400px;
      border: 0;
    }
    .email-masthead_name {
      font-size: 16px;
      font-weight: bold;
      color: #839197;
      text-decoration: none;
      text-shadow: 0 1px 0 white;
    }

    /* Body ------------------------------ */
    .email-body {
      width: 100%;
      margin: 0;
      padding: 0;
      border-top: 1px solid #E7EAEC;
      border-bottom: 1px solid #E7EAEC;
      background-color: #FFFFFF;
    }
    .email-body_inner {
      width: 570px;
      margin: 0 auto;
      padding: 0;
    }
    .email-footer {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      text-align: center;
    }
    .email-footer p {
      color: #839197;
    }
    .body-action {
      width: 100%;
      margin: 30px auto;
      padding: 0;
      text-align: center;
    }
    .body-sub {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #E7EAEC;
    }
    .content-cell {
      padding: 35px;
    }
    .align-right {
      text-align: right;
    }

    /* Type ------------------------------ */
    h1 {
      margin-top: 0;
      color: #292E31;
      font-size: 19px;
      font-weight: bold;
      text-align: left;
    }
    h2 {
      margin-top: 0;
      color: #292E31;
      font-size: 16px;
      font-weight: bold;
      text-align: left;
    }
    h3 {
      margin-top: 0;
      color: #292E31;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
    }
    p {
      margin-top: 0;
      color: #839197;
      font-size: 16px;
      line-height: 1.5em;
      text-align: left;
    }
    p.sub {
      font-size: 12px;
    }
    p.center {
      text-align: center;
    }

    /* Buttons ------------------------------ */
    .button {
      display: inline-block;
      width: 200px;
      background-color: #414EF9;
      border-radius: 3px;
      color: #ffffff;
      font-size: 15px;
      line-height: 45px;
      text-align: center;
      text-decoration: none;
      -webkit-text-size-adjust: none;
      mso-hide: all;
    }
    .button--green {
      background-color: #28DB67;
    }
    .button--red {
      background-color: #FF3665;
    }
    .button--blue {
      background-color: #414EF9;
    }

    /*Media Queries ------------------------------ */
    @media only screen and (max-width: 600px) {
      .email-body_inner,
      .email-footer {
        width: 100% !important;
      }
    }
    @media only screen and (max-width: 500px) {
      .button {
        width: 100% !important;
      }
    }
  </style>
</head>
<body>
  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table class="email-content" width="100%" cellpadding="0" cellspacing="0">
          <!-- Logo -->
          <tr>
            <td class="email-masthead">
              <a class="email-masthead_name">Canvas</a>
            </td>
          </tr>
          <!-- Email Body -->
          <tr>
            <td class="email-body" width="100%">
              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">
                <!-- Body content -->
                <tr>
                  <td class="content-cell">
                    <h1>Hi {{name}},</h1>
                    <p>You recently requested to reset your password for your Canvas account. Click the button below to reset it.</p>
                    <!-- Action -->
                    <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <div>
                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{action_url}}" style="height:45px;v-text-anchor:middle;width:200px;" arcsize="7%" stroke="f" fill="t">
                              <v:fill type="tile" color="#FF3665" />
                              <w:anchorlock/>
                              <center style="color:#ffffff;font-family:sans-serif;font-size:15px;">Reset your password</center>
                            </v:roundrect><![endif]-->
                            <a href="{{action_url}}" class="button button--red">Reset your password</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <p>If you did not request a password reset, please ignore this email or reply to let us know. This password reset is only valid for the next 30 minutes.</p>
                    <p>Thanks,<br>Canvas Labs, Inc. and the Canvas Team</p>
                    <p><strong>P.S.</strong> We also love hearing from you and helping you with any issues you have. Please reply to this email if you want to ask a question or just say hi.</p>
                    <!-- Sub copy -->
                    <table class="body-sub">
                      <tr>
                        <td>
                          <p class="sub">If you’re having trouble clicking the password reset button, copy and paste the URL below into your web browser.</p>
                          <p class="sub"><a href="{{action_url}}">{{action_url}}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-cell">
                    <p class="sub center">&copy; 2016 Canvas. All rights reserved.</p>
                    <p class="sub center">
                      Canvas
                      <br>{{product_address_line1}}
                      <br>{{product_address_line2}}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
export const WELCOMING_EMAIL_TEMPLATE=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Welcome to Appcues</title>
      <style type="text/css">
         /* Force Hotmail to display emails at full width */
         .ExternalClass {
         width:100%;
         }
         /* Force Hotmail to display normal line spacing.  More on that: http://www.emailonacid.com/forum/viewthread/43/ */
         .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
         line-height: 100%;
         }
         /* Take care of image borders and formatting */
         img { 
         max-width: 600px; 
         outline: none; 
         text-decoration: none; 
         -ms-interpolation-mode: bicubic;
         margin:0;
         padding:0;
         display: block;
         }
         a img { border: none; }
         table { border-collapse: collapse !important; }
         #outlook a { padding:0; }
         .ReadMsgBody { width: 100%; }
         .ExternalClass {width:100%;}
         .backgroundTable {margin:0 auto; padding:0; width:100% !important;}
         table td {border-collapse: collapse;}
         .ExternalClass * {line-height: 115%;}
         /* General styling */
         td {
         font-family: Arial, sans-serif;
         }
         body {
         -webkit-font-smoothing:antialiased;
         -webkit-text-size-adjust:none;
         width: 100%;
         height: 100%;
         color: #6b7d90;2
         font-weight: 400;
         font-size: 18px;
         }
         h1 {
         margin: 10px 0;
         }
         a {
         color: #4baad4;
         text-decoration: underline;
         }
         .desktop-hide {
         display: none;
         }
         .hero-bg {
         background: -webkit-linear-gradient(90deg, #2991bf 0%,#7ecaec 100%);
         background-color: #4baad4;
         }
         .force-full-width {
         width: 100% !important;
         }
         .body-padding {
         padding: 0 75px;
         }
         .force-width-80 {
         width: 80% !important;
         }
      </style>
      <style type="text/css" media="screen">
         @media screen {
         /* Thanks Outlook 2013! http://goo.gl/XLxpyl */
         * {
         font-family:'Arial', 'sans-serif' !important;
         }
         .w280 {
         width: 280px !important;
         }
         }
      </style>
      <style type="text/css" media="only screen and (max-width: 480px)">
         /* Mobile styles */
         @media only screen and (max-width: 480px) {
         table[class*="w320"] {
         width: 320px !important;
         }
         td[class*="w320"] {
         width: 280px !important;
         padding-left: 20px !important;
         padding-right: 20px !important;
         }
         img[class*="w320"] {
         height: 40px !important;
         }
         td[class*="mobile-spacing"] {
         padding-top: 10px !important;
         padding-bottom: 10px !important;
         }
         *[class*="mobile-hide"] {
         display: none !important;
         }
         .desktop-hide {
         display: block!important;
         }
         *[class*="mobile-br"] {
         font-size: 12px !important;
         }
         td[class*="mobile-w20"] {
         width: 20px !important;
         }
         img[class*="mobile-w20"] {
         width: 20px !important;
         }
         td[class*="mobile-center"] {
         text-align: center !important;
         }
         table[class*="w100p"] {
         width: 100% !important;
         }
         td[class*="activate-now"] {
         padding-right: 0 !important;
         padding-top: 20px !important;
         }
         td[class*="mobile-resize"] {
         font-size: 22px !important;
         padding-left: 15px !important;
         }
         td[class*="mobile-hide"] {
         display:none;
         }
         }
      </style>
   </head>
   <body  offset="0" class="body externalClass" style="padding:0; margin:0; display:block; background:#e8ecf0; -webkit-text-size-adjust:none" bgcolor="#e8ecf0">
      <table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%">
         <tr>
            <td align="center" valign="top" style="background-color:#eeebeb" width="100%">
               <center>
                  <table cellspacing="0" cellpadding="0" width="600" class="w320">
                     <tr>
                        <td align="center" valign="top">
                           <table class="mobile-hide" style="margin:0 auto;" cellspacing="0" cellpadding="0" width="100%">
                              <tr>
                                 <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                              </tr>
                              <tr>
                                 <td style="text-align: left;">
                                    <img class="w320" height="40" src="https://s3.amazonaws.com/appcues-email-assets/images/appcues-blue-logo.png" alt="Appcues - Acquire highly engaged customers" ></a>
                                 </td>
                                 <td align="right" style="color: #4baad4; font-size: 18px;" class="mobile-hide">
                                    <div>
                                       <a href="https://www.appcues.com" style="color: #4baad4; text-decoration: none;">Request a demo</a>
                                    </div>
                                 </td>
                              </tr>
                              <tr>
                                 <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                              </tr>
                           </table>
                           <table cellspacing="0" cellpadding="0" width="100%">
                              <tr>
                                 <td class="hero-bg">
                                    <table cellspacing="0" cellpadding="0" width="100%">
                                       <tr>
                                          <td height="45" style="font-size: 45px; line-height: 45px;" class="desktop-hide">&nbsp;</td>
                                       </tr>
                                       <tr>
                                          <td style="font-size:40px; font-weight: 400; color: #ffffff; text-align:center;">
                                             <img src="https://s3.amazonaws.com/appcues-email-assets/images/appcues-white-logo.png" class="desktop-hide" height="40" style="margin: 0 auto;"/>
                                             <div class="mobile-br">&nbsp;</div>
                                             Welcome to Appcues
                                             <br>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td height="15" style="font-size: 15px; line-height: 15px;">&nbsp;</td>
                                       </tr>
                                       <tr>
                                          <td style="font-size:24px; text-align:center; padding: 0 75px; color:#ffffff;">
                                             Here’s What You Need To Get Started
                                          </td>
                                       </tr>
                                       <tr>
                                          <td height="50" style="font-size: 50px; line-height: 50px;">&nbsp;</td>
                                       </tr>
                                    </table>
                                    <table cellspacing="0" cellpadding="0" width="100%">
                                       <tr>
                                          <td>
                                             <img src="https://s3.amazonaws.com/appcues-email-assets/images/email-hero-animation.gif" class="force-full-width ExternalClass"/>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                           <table cellspacing="0" cellpadding="0" class="force-full-width" bgcolor="#ffffff" >
                              <tr>
                                 <td style="background-color:#ffffff;">
                                    <br>
                                    <center>
                                       <table style="margin: 0 auto;" cellspacing="0" cellpadding="0" class="force-width-80">
                                          <tr>
                                             <td align="left" valign="top" style="color: #7f8c8d; font-size: 20px; font-weight: 700; line-height: 24px;">
                                                <img src="https://s3.amazonaws.com/appcues-email-assets/images/create-content.png" alt="">
                                             </td>
                                             <td width="40">&nbsp;</td>
                                             <td align="left" style="color: #95a5a6; font-size: 15px; font-weight: 500; line-height: 24px;">
                                                <div style="line-height: 24px">
                                                   <strong style="color: #4baad4; font-weight: 700;">Step 1. Create Content:</strong><br>Log into your application and <a href="https://my.appcues.com/create">create your first user onboarding experience</a>, tutorial for feature announcement. Code free.
                                                </div>
                                             </td>
                                          </tr>
                                          <tr>
                                            <td height="35" style="font-size: 35px; line-height: 35px;">&nbsp;</td>
                                          </tr>
                                          <tr>
                                             <td align="left" valign="top" style="color: #7f8c8d; font-size: 20px; font-weight: 700; line-height: 24px;">
                                                <img src="https://s3.amazonaws.com/appcues-email-assets/images/embed-script.png" alt="">
                                             </td>
                                             <td width="40">&nbsp;</td>
                                             <td align="left" style="color: #95a5a6; font-size: 15px; font-weight: 500; line-height: 24px;">
                                                <div style="line-height: 24px">
                                                   <strong style="color: #4baad4; font-weight: 700;">Step 2. Install your embed script:</strong><br>Either install it yourself, forward these instructions on to a technical colleague or <a href="https://calendly.com/appcues-spencer/call/">set up a 10 min call</a> with our Lead Engineer for help.
                                                </div>
                                             </td>
                                          </tr>
                                          <tr>
                                            <td height="35" style="font-size: 35px; line-height: 35px;">&nbsp;</td>
                                          </tr>
                                          <tr>
                                             <td align="left" valign="top" style="color: #7f8c8d; font-size: 20px; font-weight: 700; line-height: 24px;">
                                                <img src="https://s3.amazonaws.com/appcues-email-assets/images/traget-audience.png" alt="">
                                             </td>
                                             <td width="40">&nbsp;</td>
                                             <td align="left" style="color: #95a5a6; font-size: 15px; font-weight: 500; line-height: 24px;">
                                                <div style="line-height: 24px">
                                                   <strong style="color: #4baad4; font-weight: 700;">Step 3. Target specific users:</strong><br>Once the code is installed, user data will automatically sync with Appcues so you can personalize your user experience.
                                                </div>
                                             </td>
                                          </tr>
                                          <tr>
                                            <td height="35" style="font-size: 35px; line-height: 35px;">&nbsp;</td>
                                          </tr>
                                          <tr>
                                             <td align="left" valign="top" style="color: #7f8c8d; font-size: 20px; font-weight: 700; line-height: 24px;">
                                                <img src="https://s3.amazonaws.com/appcues-email-assets/images/publish.png" alt="">
                                             </td>
                                             <td width="40">&nbsp;</td>
                                             <td align="left" style="color: #95a5a6; font-size: 15px; font-weight: 500; line-height: 24px;">
                                                <div style="line-height: 24px">
                                                   <strong style="color: #4baad4; font-weight: 700;">Step 4. Publish and measure:</strong><br>Use our own analytics or <a href="https://my.appcues.com/integrations">flip on one of our integrations</a> (Kissmetrics, Mixpanel, Segment, Google Analytics and others).
                                                </div>
                                             </td>
                                          </tr>
                                       </table>
                                    </center>
                                    <table style="margin:0 auto;" cellspacing="0" cellpadding="10" width="100%">
                                       <tr>
                                          <td style="text-align:center; margin:0 auto;">
                                             <br>
                                             <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                                <tr>
                                                   <td>
                                                      <div>
                                                         <!--[if mso]>
                                                         <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.appcues.com" style="v-text-align:center;height:36px;v-text-anchor:middle;width:150px;" strokecolor="#80c97a" fillcolor="#80c97a">
                                                            <w:anchorlock/>
                                                            <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:18px;">Get started &rarr;</center>
                                                         </v:roundrect>
                                                         <![endif]-->
                                                         <a href="http://buttons.cm" style="background-color:#80c97a;border:1px solid #80c97a;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:18px;line-height:44px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust:none;mso-hide:all;">Get started &rarr;</a>
                                                      </div>
                                                   </td>
                                                </tr>
                                             </table>
                                             <br>
                                          </td>
                                       </tr>
                                    </table>
                                    <table border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="force-full-width">
                                       <tr>
                                          <td align="center">     
                                       <tr>
                                          <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                       </tr>
                                       <tr>
                                          <td align="center">      
                                             <img src="https://s3.amazonaws.com/appcues-email-assets/images/wave-inverse.png" style="display: block; width: 100%" width="100%" border="0" alt=""/>
                                          </td>
                                       </tr>
                                       </td>      
                                       </tr>      
                                    </table>
                                    <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="4baad4">
                                       <tr>
                                          <td align="center">
                                             <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" bgcolor="4baad4">
                                                <tr>
                                                <tr>
                                                   <td height="45" style="font-size: 45px; line-height: 45px;">&nbsp;</td>
                                                </tr>
                                                <td align="center">
                                                   <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" bgcolor="4baad4">
                                                      <tr>
                                                         <td align="center">        
                                                      <tr>
                                                         <td align="center">
                                                            <a href="http://www.appcues.com" border="0" style="text-decoration: none !important; font-size: 18px; font-family: arial, sans-serif; border-style:none; color:#fff;" target="_blank">Need help? We have you covered. <em>Request a demo today.</em></a>
                                                         </td>
                                                      </tr>
                                                      </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                                </tr>
                                                <tr>
                                                   <td height="65" style="font-size: 65px; line-height: 65px;">&nbsp;</td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </table>
                                    <table cellspacing="0" cellpadding="0" bgcolor="#e8ecf0"  class="force-full-width">
                                       <tr>
                                          <td style="background-color:#e8ecf0; text-align:center;">
                                             <br>
                                             <br>
                                             <a href="https://plus.google.com/+Appcues"><img width="30" src="https://s3.amazonaws.com/appcues-email-assets/images/google-icon.png" alt=""></a>
                                             <a href="https://www.facebook.com/appcues"><img width="30" src="https://s3.amazonaws.com/appcues-email-assets/images/facebook-icon.png" alt=""></a>
                                             <a href="https://twitter.com/appcues"><img width="30" src="https://s3.amazonaws.com/appcues-email-assets/images/twitter-icon.png" alt=""></a>
                                             <br>
                                             <br>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td style="color:#27aa90; font-size: 14px; text-align:center;">
                                             <a href="{% unsubscribe_url %}" class="untracked">Unsubscribe</a>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td style="font-size:12px;">&nbsp;</td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
               </center>
            </td>
         </tr>
      </table>
   </body>
</html>
`;