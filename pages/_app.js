import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { Suspense, useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Earth from "../components/Earth/Earth";
import Socials from "../components/pageComponents/Socials/Socials";
import PageLoader from "../components/PageLoader";
import {
  Button,
  ContactMeContainer,
  EarthContainer,
  HelperDiv,
  PressEnterContainer,
  ScrollButtonContainer,
  ScrollHeading,
  SocialContainer,
  Span1,
} from "../components/pageStyles/MainPage";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [visible, setIsVisible] = useState(true);
  const styles = {
    backgroundColor: "transparent",
    cursor: "pointer",
  };

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 2240;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        visible && // to limit setting state only the first time
          setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [visible]);

  const [angle, setAngle] = useState();
  useEffect(() => {
    const routeChangeStart = (url, { shallow }) => {
      console.log("start animation");
    };

    const routeChangeComplete = (url, { shallow }) => {
      setAngle(25);
    };

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
    };
  }, []);

  const arrowStyle = {
    position: "absolute",
    display: "block",
    top: "29%",
    left: "35%",
    width: "18px",
    height: "18px",
    margin: "-4px 0 0 -4px",
    background: "white",
    "border-radius": "50%",
    "-webkit-animation": "ani-mouse 2.5s linear infinite",
    "-moz-animation": "ani-mouse 2.5s linear infinite",
    animation: "ani-mouse 2.5s linear infinite",
    color: "#CEB7FF",
    backgroundColor: "transparent",
  };

  return (
    <>
      {/* <Script
        onLoad={() => {
          let particleNumber = 500;
          let windowWidth = window.screen.width;
          if ((windowWidth < 800) & (windowWidth > 400)) {
            particleNumber = 600;
          }
          if (windowWidth <= 720) {
            particleNumber = 200;
          }
          const rs = () => {
            windowWidth = window.screen.width;
            if ((windowWidth < 800) & (windowWidth > 400)) {
              particleNumber = 600;
            }
            if (windowWidth <= 720) {
              particleNumber = 400;
            }
          };
          var Stars = {
            canvas: null,
            context: null,
            circleArray: [],
            colorArray: [
              "#909bd9",
              "#3b5a9b",
              "#006599",
              "#2b97f1",
              "#e84713",
              "#001b47",
              "#007bff",
              "#ffffff",
              "#4d5664d8",
            ],
            mouseDistance: 50,
            radius: 0.7,
            maxRadius: 1.3,
            mouse: { x: void 0, y: void 0, down: !1, move: !1 },
            init: function () {
              (this.canvas = document.getElementById("stars")),
                (this.canvas.width = window.innerWidth),
                (this.canvas.height = window.innerHeight),
                (this.canvas.style.display = "block"),
                (this.context = this.canvas.getContext("2d")),
                window.addEventListener("mousemove", this.mouseMove),
                window.addEventListener("resize", this.resize),
                this.prepare(),
                this.animate();
            },
            Circle: function (e, t, n, i, o, r) {
              (this.x = e),
                (this.y = t),
                (this.dx = n),
                (this.dy = i),
                (this.radius = o),
                (this.minRadius = this.radius),
                (this.draw = function () {
                  Stars.context.beginPath(),
                    Stars.context.arc(
                      this.x,
                      this.y,
                      this.radius,
                      0,
                      2 * Math.PI,
                      !1
                    ),
                    (Stars.context.fillStyle = r),
                    Stars.context.fill();
                }),
                (this.update = function () {
                  (this.x + this.radius > Stars.canvas.width ||
                    this.x - this.radius < 0) &&
                    (this.dx = -this.dx),
                    (this.y + this.radius > Stars.canvas.height * 2 ||
                      this.y - this.radius < 0) &&
                      (this.dy = -this.dy),
                    (this.x += this.dx / 1),
                    (this.y += this.dy / 1),
                    Stars.mouse.x - this.x < Stars.mouseDistance &&
                    Stars.mouse.x - this.x > -Stars.mouseDistance &&
                    Stars.mouse.y - this.y < Stars.mouseDistance &&
                    Stars.mouse.y - this.y > -Stars.mouseDistance
                      ? this.radius < Stars.maxRadius && (this.radius += 1.3)
                      : this.radius > this.minRadius && (this.radius -= 1.3),
                    this.draw();
                });
            },
            prepare: function () {
              this.circleArray = [];
              for (var e = 0; e < particleNumber; e++) {
                var t = Stars.radius,
                  n = Math.random() * (this.canvas.width - 2 * t) + t,
                  i = Math.random() * (this.canvas.height - 2 * t) + t,
                  o = 1.5 * (Math.random() - 0.5),
                  r = 1.5 * (Math.random() - 1),
                  a =
                    this.colorArray[
                      Math.floor(Math.random() * this.colorArray.length)
                    ];
                this.circleArray.push(new this.Circle(n, i, o, r, t, a));
              }
            },
            animate: function () {
              requestAnimationFrame(Stars.animate),
                Stars.context.clearRect(
                  0,
                  0,
                  Stars.canvas.width,
                  Stars.canvas.height
                );
              for (var e = 0; e < Stars.circleArray.length; e++) {
                Stars.circleArray[e].update();
              }
            },
            mouseMove: function (e) {
              (Stars.mouse.x = e.x), (Stars.mouse.y = e.y);
            },
            resize: function () {
              (Stars.canvas.width = window.innerWidth),
                (Stars.canvas.height = window.innerHeight);
            },
          };

          Stars.init();
        }}
      /> */}
      <Suspense fallback={<PageLoader />}>
        <HelperDiv>
          <ContactMeContainer>
            <Link href={"/contact"} style={{ background: "transparent" }}>
              <Image
                src={"/contact.svg"}
                alt="contact"
                width={100}
                height={100}
                style={styles}
              />
            </Link>
          </ContactMeContainer>
        </HelperDiv>
        <SocialContainer>
          <Socials />
        </SocialContainer>
        {/* <EarthTransition> */}
        <EarthContainer>{visible && <Earth angle={angle} />}</EarthContainer>
        {/* </EarthTransition> */}
        <Link
          href="https://drive.google.com/file/d/1BhWCzBY6UznMOXy5bOGmj9KxbFXNMbnw/view?usp=sharing"
          passHref
          target="_blank"
        >
          <PressEnterContainer>
            <ScrollHeading>Resume</ScrollHeading>
            <Button>
              <Span1>
                <AiOutlineArrowDown style={arrowStyle} />
              </Span1>
            </Button>
          </PressEnterContainer>
        </Link>
        <Link href={"/skills"}>
          <ScrollButtonContainer left>
            <ScrollHeading>Click</ScrollHeading>
            <Button>
              <Span1>
                <AiOutlineArrowDown style={arrowStyle} />
              </Span1>
            </Button>
          </ScrollButtonContainer>
        </Link>
        {/* <canvas id="stars"></canvas> */}

        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
