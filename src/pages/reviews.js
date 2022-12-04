import * as React from "react";
import PageLayout from "../layouts/PageLayout";
import BookNow from "../components/BookNow";

const ReviewsPage = (props) => {
  return (
    <PageLayout page="Reviews">
        <div id="reviews" className="services">
          <div className="v-inner">
            <div className="inner">
              <h3>Reviews</h3>
              <div className="photos-conatiner flex">
                <div className="photo-container c"></div>
                <div className="photo-container e"></div>
                <div className="photo-container d"></div>
                <div className="photo-container b"></div>
                <div className="photo-container f"></div>
                <div className="photo-container a"></div>
              </div>

              
              
              <p>
                "Self care comes in a lot of forms. And I've recently discovered that
                a way for me are these beauties! Cut my getting ready time in half.
                Way less makeup = more natural yet still "done" look. Wake up tired
                af, hung over, dying from allergies and still feel purty! Thank you
                for making me feel beautiful Sam!"
                <span className="right-align">&mdash;Nikki</span>
              </p>
              
              <hr />
              <p>
                "I have been going to Sam, Lash Is King, for just about a year now.
                Sam is no doubt the absolute best eyelash tech. you will find. She is attentive,
                caring, fun, friendly and gives that personal touch we as ladies search for.
                She takes the time to ensure I am well taken care of before I leave each and every appointment.
                I always look and feel like a million bucks when leaving! Look no further, Sam is your girl so book your appointment today!"
                <span className="right-align">&mdash;Jenna</span>
              </p>
              <hr />

              <p>
                "Sam is literally the best!! She always has my eyelashes looking fabulous 😍 I'm 
                so happy that I found her when she first opened. I was looking for someone to do my 
                lashes for my wedding and she exceeded my expectations!! Over a year and a half later and 
                she's still stuck with me as a client lol Book your appointment ladies!! You'll love it!!"
                <span className="right-align">&mdash;Kim</span>

              </p>
              <BookNow />
            </div>
          </div>
        </div>
    </PageLayout>
  )
}

export default ReviewsPage;

export const Head = PageLayout.Head()