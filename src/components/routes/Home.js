import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>
         Welcome to Back of the Napkin!
        </h3>
        <p class="lead">
          A place to store your thoughts from around the web.
        </p>

        <figure class="text-center">
          <blockquote class="blockquote">
            <p class="mb-">
              I put things down on sheets of paper and stuff them in my pockets.
              When I have enough, I have a book.
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            John Lennon <cite title="Source Title">A Point In Time</cite>
          </figcaption>
        </figure>
      </div>
    );
  }
}
