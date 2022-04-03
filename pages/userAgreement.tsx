import MetaData from '@public/static/metaData/metaTag';
import dynamic from 'next/dynamic';
import React from 'react';

const Layout = dynamic(() => import('components/common'));

const UserAgreement = () => {
  return (
    <Layout>
      <MetaData title={'User Agreement'} content={'Read our user policies'} />
      <main className="body">
        <div className="w-[95vw] md:w-[65vw] m-auto">
          <div className="archive-header mt-[10vh] ">
            <div className="container text-left">
              <h3 className="text-3xl font-bold">User Agreement</h3>
              <div className="breadcrumb my-2 flex">
                <p>Home</p>
                <span>
                  <a>User Agreement</a>
                </span>
              </div>
            </div>
          </div>
          <div className="container my-[5vh]">
            <h3>WEBSITE TERMS OF USE </h3>
            <p className="text-gray-400">Last updated on March 30 2022</p>
            <div className="content my-3 text-gray-400">
              <h1 className="text-2xl text-black my-10">AGREEMENT TO TERMS </h1>
              <p className="my-4 text-md">
                These Terms of Use constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                (“you”) and MedIn Life (“we,” “us” or “our”), concerning Your
                access to and use of the [Omerald.com] website as well as any
                other media form, media channel, mobile website or mobile
                application related, linked, or otherwise connected thereto
                (collectively, the “Site”).
              </p>
              <p className="my-4 text-md">
                You agree that by accessing the Site, you have read, understood,
                and agree to be bound by all of these Terms of Use. If you do
                not agree with all of these Terms of Use, then you are expressly
                prohibited from using the Site and you must discontinue use
                immediately.
              </p>
              <p className="my-4 text-md">
                Supplemental Terms of Use or documents that may be posted on the
                Site from time to time are hereby expressly incorporated herein
                by reference. We reserve the right, in our sole discretion, to
                make changes or modifications to these Terms of Use at any time
                and for any reason.
              </p>
              <p className="my-4 text-md">
                We will alert you about any changes by updating the “Last
                updated” date of these Terms of Use, and you waive any right to
                receive specific notice of each such change.
              </p>
              <p className="my-4 text-md">
                It is Your responsibility to periodically review these Terms of
                Use to stay informed of updates. You will be subject to, and
                will be deemed to have been made aware of and to have accepted,
                the changes in any revised Terms of Use by Your continued use of
                the Site after the date such revised Terms of Use are posted.
              </p>
              <p className="my-4 text-md">
                The information provided on the Site is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
              </p>
              <p className="my-4 text-md">
                Accordingly, those persons who choose to access the Site from
                other locations do so on their own initiative and are solely
                responsible for compliance with local laws, if and to the extent
                local laws are applicable.
              </p>
              <p className="my-4 text-md">
                Option 1: The Site is intended for users who are at least 18
                years old. Persons under the age of 18 are not permitted to
                register for the Site. <br />
                <br />
                Option 2: [The Site is intended for users who are at least 13
                years of age.] All users who are minors in the jurisdiction in
                which they reside (generally under the age of 18) must have the
                permission of, and be directly supervised by, their parent or
                guardian to use the Site. If you are a minor, you must have Your
                parent or guardian read and agree to these Terms of Use prior to
                you using the Site.
              </p>
            </div>
            <div className="content my-3 text-gray-400">
              <h1 className="text-2xl text-black my-10">
                INTELLECTUAL PROPERTY RIGHTS{' '}
              </h1>
              <p className="my-4 text-md">
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the “Content”) and the trademarks, service
                marks, and logos contained therein (the “Marks”) are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws and various other intellectual
                property rights and unfair competition laws of the India,
                foreign jurisdictions, and international conventions.
              </p>
              <p className="my-4 text-md">
                The Content and the Marks are provided on the Site “AS IS” for
                Your information and personal use only. Except as expressly
                provided in these Terms of Use, no part of the Site and no
                Content or Marks may be copied, reproduced, aggregated,
                republished, uploaded, posted, publicly displayed, encoded,
                translated, transmitted, distributed, sold, licensed, or
                otherwise exploited for any commercial purpose whatsoever,
                without our express prior written permission.
              </p>
              <p className="my-4 text-md">
                Provided that you are eligible to use the Site, you are granted
                a limited license to access and use the Site and to download or
                print a copy of any portion of the Content to which you have
                properly gained access solely for Your personal, non-commercial
                use. We reserve all rights not expressly granted to you in and
                to the Site, the Content and the Marks.
              </p>
            </div>
            <div className="content my-3 text-gray-400">
              <h1 className="text-2xl text-black my-10">
                USER REPRESENTATIONS
              </h1>
              <p className="my-4 text-md">
                By using the Site, you represent and warrant that:
              </p>
              <ol>
                <li>
                  All registration information you submit will be true,
                  accurate, current, and complete;
                </li>
                <li>
                  you will maintain the accuracy of such information and
                  promptly update such registration information as necessary;
                </li>
                <li>
                  you have the legal capacity and you agree to comply with these
                  Terms of Use;
                </li>
                <li>you are not under the age of 13;</li>
                <li>
                  not a minor in the jurisdiction in which you reside[, or if a
                  minor, you have received parental permission to use the Site
                </li>
                <li>
                  you will not access the Site through automated or non-human
                  means, whether through a bot, script, or otherwise;
                </li>
                <li>
                  you will not use the Site for any illegal or unauthorized
                  purpose;
                </li>
                <li>
                  Your use of the Site will not violate any applicable law or
                  regulation.
                </li>
                <li>
                  If you provide any information that is untrue, inaccurate, not
                  current, or incomplete, we have the right to suspend or
                  terminate Your account and refuse any and all current or
                  future use of the Site (or any portion thereof).
                </li>
              </ol>
              <p className="my-2 text-md">
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate Your account and refuse any and all current or future
                use of the Site (or any portion thereof).{' '}
              </p>
            </div>
            <div className="content my-3 text-gray-400">
              <h1 className="text-2xl text-black my-10">USER REGISTRATION</h1>
              <p className="my-4 text-md">
                You may be required to register with the Site. You agree to keep
                Your password confidential and will be responsible for all use
                of Your account and password. We reserve the right to remove,
                reclaim, or change a username you select if we determine, in our
                sole discretion, that such username is inappropriate, obscene,
                or otherwise objectionable.
              </p>
            </div>
            <div className="content my-3 text-gray-400">
              <h1 className="text-2xl text-black my-10">
                PROHIBITED ACTIVITIES
              </h1>
              <p className="my-4 text-md">
                You may not access or use the Site for any purpose other than
                that for which we make the Site available. The Site may not be
                used in connection with any commercial endeavors except those
                that are specifically endorsed or approved by us.
              </p>
              <p className="my-4 text-md">
                As a user of the Site, you agree not to: systematically retrieve
                data or other content from the Site to create or compile,
                directly or indirectly, a collection, compilation, database, or
                directory without written permission from us. make any
                unauthorized use of the Site, including collecting usernames
                and/or email addresses of users by electronic or other means for
                the purpose of sending unsolicited email, or creating user
                accounts by automated means or under false pretenses. use a
                buying agent or purchasing agent to make purchases on the Site.
                use the Site to advertise or offer to sell goods and services.
              </p>
              <p className="my-4 text-md">
                As a user of the Site, you agree not to: circumvent, disable, or
                otherwise interfere with security-related features of the Site,
                including features that prevent or restrict the use or copying
                of any Content or enforce limitations on the use of the Site
                and/or the Content contained therein. engage in unauthorized
                framing of or linking to the Site. trick, defraud, or mislead us
                and other users, especially in any attempt to learn sensitive
                account information such as user passwords; make improper use of
                our support services or submit false reports of abuse or
                misconduct.
              </p>
              <p className="my-4 text-md">
                As a user of the Site, you agree not to: engage in any automated
                use of the system, such as using scripts to send comments or
                messages, or using any data mining, robots, or similar data
                gathering and extraction tools. interfere with, disrupt, or
                create an undue burden on the Site or the networks or services
                connected to the Site. attempt to impersonate another user or
                person or use the username of another user. sell or otherwise
                transfer Your profile. use any information obtained from the
                Site in order to harass, abuse, or harm another person. use the
                Site as part of any effort to compete with us or otherwise use
                the Site and/or the Content for any revenue-generating endeavor
                or commercial enterprise.
                <br />
                <br /> Do not Decipher, decompile, disassemble, or reverse
                engineer any of the software comprising or in any way making up
                a part of the Site. attempt to bypass any measures of the Site
                designed to prevent or restrict access to the Site, or any
                portion of the Site. harass, annoy, intimidate, or threaten any
                of our employees or agents engaged in providing any portion of
                the Site to you. delete the copyright or other proprietary
                rights notice from any Content. copy or adapt the Site’s
                software, including but not limited to Flash, PHP, HTML,
                JavaScript, or other code.
              </p>
              <p>
                upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the Site or modifies, impairs, disrupts,
                alters, or interferes with the use, features, functions,
                operation, or maintenance of the Site.
                <br />
                <br /> Upload or transmit (or attempt to upload or to transmit)
                any material that acts as a passive or active information
                collection or transmission mechanism, including without
                limitation, clear graphics interchange formats (“gifs”), 1×1
                pixels, web bugs, cookies, or other similar devices (sometimes
                referred to as “spyware” or “passive collection mechanisms” or
                “pcms”).
                <br />
                <br /> Rxcept as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Site, or using or launching any unauthorized script or other
                software. disparage, tarnish, or otherwise harm, in our opinion,
                us and/or the Site. use the Site in a manner inconsistent with
                any applicable laws or regulations.
              </p>
            </div>
            <div className="content my-3 text-gray-400">
              <h1 className="text-2xl text-black my-10">
                USER GENERATED CONTRIBUTIONS
              </h1>
              <p className="my-4 text-md">
                The Site may invite you to chat, contribute to, or participate
                in blogs, message boards, online forums, and other
                functionality, and may provide you with the opportunity to
                create, submit, post, display, transmit, perform, publish,
                distribute, or broadcast content and materials to us or on the
                Site, including but not limited to text, writings, video, audio,
                photographs, graphics, comments, suggestions, or personal
                information or other material (collectively, "Contributions").
              </p>
              <p className="my-4 text-md">
                Contributions may be viewable by other users of the Site and
                through third-party websites. As such, any Contributions you
                transmit may be treated as non-confidential and non-proprietary.
                When you create or make available any Contributions, you thereby
                represent and warrant that:
              </p>
              <p className="my-4 text-md">
                the creation, distribution, transmission, public display, or
                performance, and the accessing, downloading, or copying of Your
                Contributions do not and will not infringe the proprietary
                rights, including but not limited to the copyright, patent,
                trademark, trade secret, or moral rights of any third party. y
              </p>
              <p className="my-4 text-md">
                you are the creator and owner of or have the necessary licenses,
                rights, consents, releases, and permissions to use and to
                authorize us, the Site, and other users of the Site to use Your
                Contributions in any manner contemplated by the Site and these
                Terms of Use.
              </p>
              <p className="my-4 text-md">
                you have the written consent, release, and/or permission of each
                and every identifiable individual person in Your Contributions
                to use the name or likeness of each and every such identifiable
                individual person to enable inclusion and use of Your
                Contributions in any manner contemplated by the Site and these
                Terms of Use.
              </p>
              <ol>
                <li>
                  Your Contributions are not false, inaccurate, or misleading.
                </li>
                <li>
                  Your Contributions are not unsolicited or unauthorized
                  advertising, promotional materials, pyramid schemes, chain
                  letters, spam, mass mailings, or other forms of solicitation.
                </li>
                <li>
                  Your Contributions are not obscene, lewd, lascivious, filthy,
                  violent, harassing, libelous, slanderous, or otherwise
                  objectionable (as determined by us).
                </li>
                <li>
                  Your Contributions do not ridicule, mock, disparage,
                  intimidate, or abuse anyone. .
                </li>
                <li>
                  Your Contributions do not advocate the violent overthrow of
                  any government or incite, encourage, or threaten physical harm
                  against another.
                </li>
                <li>
                  Your Contributions do not violate any applicable law,
                  regulation, or rule.
                </li>
                <li>
                  Your Contributions do not violate the privacy or publicity
                  rights of any third party.
                </li>
                <li>
                  Your Contributions do not contain any material that solicits
                  personal information from anyone under the age of 18 or
                  exploits people under the age of 18 in a sexual or violent
                  manner.
                </li>

                <li>
                  Your Contributions do not otherwise violate, or link to
                  material that violates, any provision of these Terms of Use,
                  or any applicable law or regulation.
                </li>

                <li>
                  Your Contributions do not advocate the violent overthrow of
                  any government or incite, encourage, or threaten physical harm
                  against another.
                </li>
                <li>
                  Your Contributions do not include any offensive comments that
                  are connected to race, national origin, gender, sexual
                  preference, or physical handicap.
                </li>
              </ol>
              <p>
                Any use of the Site in violation of the foregoing violates these
                Terms of Use and may result in, among other things, termination
                or suspension of your rights to use the Site.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default UserAgreement;
