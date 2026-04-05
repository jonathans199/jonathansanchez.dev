import * as React from "react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Jonathan Sanchez</title>
        <meta
          name="description"
          content="Privacy Policy for Jonathan Sanchez mobile applications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-8 border-b-4 border-red-600 inline-block pb-2">
            Privacy Policy
          </h1>

          <div className="text-[var(--text-secondary)] space-y-6 text-lg leading-relaxed">
            <p>
              When you use our services, or install any App you&apos;re trusting us
              with your information. We understand this is a big responsibility
              and work hard to protect your information and put you in control.
              This Privacy Policy was last modified on 11/03/2019. This page
              informs & help you understand what information we collect, why we
              collect it, and how you can update, manage, export, and delete
              your information. We do not collect or store any information on
              your use of our Apps.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-[var(--text-heading)] mb-4">
                Information Collection & Use
              </h2>
              <p>
                We do not track your usage, location, or any other information.
                Once our applications are installed on your mobile device, they
                do not communicate with our servers in any way. Some of our Apps
                use camera APIs which uses the camera system to track the
                movement of your eyes, mouth, and face. In order for this
                functionality to be possible, the app requires access to your
                device&apos;s camera. This access can be toggled on or off at any
                time in your device&apos;s settings. The camera images and resulting
                depth data are only used for specific app features. No
                information is collected and nothing is stored locally or
                remotely. Camera access is required to get depth data from the
                device&apos;s APIs. Face data is never stored remotely, given to
                third parties, or used for any purposes. The image reader data
                only remains on your device, and never leaves your device at any
                time. This data is stored on the device only for the duration of
                your current app session. After deleting the App all data within
                the app will also be deleted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--text-heading)] mb-4">
                Log Data
              </h2>
              <p>
                Due to the ways App Store and Google Play Store works, we
                receive information regarding when you purchase one of our apps.
                All mobile apps receive this information (not just the apps
                belonging to Jonathan Sanchez). However, the developer will not
                collect or store this information. We have no interest in this
                information.
              </p>
              <p className="mt-4">
                For our free applications, we use AdMob for mobile advertising.
                We do not sell any information regarding our users. For our paid
                applications, we do not use advertising.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--text-heading)] mb-4">
                IAP Service Conditions
              </h2>
              <ul className="space-y-2">
                <li>
                  – Payment will be charged to your iTunes Account at
                  confirmation of purchase.
                </li>
                <li>
                  – Your subscription automatically renews unless auto-renewal
                  is turned off at least 24 hours before the end of the current
                  subscription.
                </li>
                <li>
                  – Your account will be charged for a renewed subscription
                  within 24 hours prior to the end of current subscription.
                </li>
                <li>
                  – Subscription duration as agreed within the app with its
                  price.
                </li>
                <li>
                  – You can manage your subscription and switch off the
                  auto-renewal by accessing your account settings after
                  purchase.
                </li>
                <li>
                  – You cannot cancel the current subscription during the active
                  subscription period.
                </li>
                <li>
                  – Subscriptions may be managed by the user and auto-renewal
                  may be turned off by going to the user&apos;s Account Settings
                  after purchase.
                </li>
                <li>
                  – All personal data is handled under the terms and conditions
                  of our privacy policy.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--text-heading)] mb-4">
                Changes To This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. You are
                advised to review this Privacy Policy periodically for any
                changes. We strongly believe that you are entitled to your own
                privacy. We will always respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
