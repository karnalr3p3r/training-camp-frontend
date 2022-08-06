import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Ash from "../../static/images/characters/ash-profile-pic.png";
import Bangalore from "../../static/images/characters/bangalore-profile-pic.png";
import Bloodhound from "../../static/images/characters/bloodhound-profile-pic.png";
import Caustic from "../../static/images/characters/caustic-profile-pic.png";
import Crypto from "../../static/images/characters/crypto-profile-pic.png";
import Fuse from "../../static/images/characters/fuse-profile-pic.png";
import Gibraltar from "../../static/images/characters/gibraltar-profile-pic.png";
import Horizon from "../../static/images/characters/horizon-profile-pic.png";
import Lifeline from "../../static/images/characters/lifeline-profile-pic.png";
import Loba from "../../static/images/characters/loba-profile-pic.png";
import MadMaggie from "../../static/images/characters/mad-maggie-profile-pic.png";
import Mirage from "../../static/images/characters/mirage-profile-pic.png";
import Newcastle from "../../static/images/characters/newcastle-profile-pic.png";
import Octane from "../../static/images/characters/octane-profile-pic.png";
import Pathfinder from "../../static/images/characters/pathfinder-profile-pic.png";
import Rampart from "../../static/images/characters/rampart-profile-pic.png";
import Revenant from "../../static/images/characters/revenant-profile-pic.png";
import Seer from "../../static/images/characters/seer-profile-pic.png";
import Valkyrie from "../../static/images/characters/valkyrie-profile-pic.png";
import Wattson from "../../static/images/characters/wattson-profile-pic.png";
import Wraith from "../../static/images/characters/wraith-profile-pic.png";

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <image url={Ash} alt="ash" />
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    );
  }
}
