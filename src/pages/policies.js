import * as React from "react";
import PageLayout from "../layouts/PageLayout";

const PoliciesPage = (props) => {
  return (
    <PageLayout page="Policies">
        <div id="policies" className="policies">
            <div className="inner">
                <h3>Policies</h3>
                <p>Please remove any makeup prior to your appointment</p>
                <p>Avoid stimulants like caffine</p>
                <p>No children</p>
                <p>
                You must complete client consent forms provided before we start lash
                application.
                </p>
                <p>
                If you are a NEW CLIENT, please send a $30 deposit within 24 hours of
                booking your first appointment, this deposit is non-refundable but
                will be applied to your lash service. If the deposit is not sent
                within 24 hours of booking, your appointment will be cancelled due to
                non-payment. Below are the following payment methods I accept.
                <br /> &mdash; Venmo - @samleegee
                <br /> &mdash; Cash App - $amleegee
                <br /> &mdash; Apple Pay - (480) 540-2245
                </p>
                <p>
                Please provide a 24 hour notice for rescheduling or cancellations to
                avoid a 50% no-show fee.
                </p>
                <p>
                Extensions with less than 50% remaining may be considered a full set
                instead of a fill. Please schedule your appointment appropriately. Use
                your best judgment; However, if it has been more than three weeks
                since your initial application, or you are low on lashes, you will
                most likely require a full set.
                </p>
                <p>
                Please, I cannot stress this enough, follow your aftercare
                instructions. I can't be held responsible for the longevity of your
                lashes after one week of your application.
                </p>
                <p>
                Contact me immediately if you experience an abnormal loss of
                extensions so I can work with you and your aftercare regimen to
                resolve any issues right away.
                </p>
                <p>
                If you are pregnant and in your second or third trimester, please
                provide a release form from your licensed medical provider prior to
                your appointment.
                </p>
                <p>
                Anybody under the age of 18 will require a parent or legal guardian to
                be present and sign the consent form prior to lash application.
                </p>
                
            </div>
        </div>
    </PageLayout>
  )
}

export default PoliciesPage;

export const Head = PageLayout.Head()