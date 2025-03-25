import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import './InfiniteScroll.css';

gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);

export default function InfiniteScroll({
    // ----- Layout / Style Props -----
    width = "50rem",             // Width of the outer .wrapper
    maxHeight = "100%",          // Max-height of the outer .wrapper
    negativeMargin = "-0.5em",   // Negative margin to reduce spacing between items
    // ----- Items Prop -----
    items = [],                  // Array of items with { content: ... }
    itemMinHeight = 150,         // Fixed height for each item
    // ----- Tilt Props -----
    isTilted = false,            // Whether the container is in "skewed" perspective
    tiltDirection = "left",      // tiltDirection: "left" or "right"
}) {
    const containerRef = useRef(null);

    const getTiltTransform = () => {
        if (!isTilted) return "none";
        return tiltDirection === "left"
        ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
        : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (items.length === 0) return;

        const divItems = gsap.utils.toArray(container.children);
        if (!divItems.length) return;

        const firstItem = divItems[0];
        const itemStyle = getComputedStyle(firstItem);
        const itemHeight = firstItem.offsetHeight;
        const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
        const totalItemHeight = itemHeight + itemMarginTop;
        const totalHeight = (itemHeight * items.length) + (itemMarginTop * (items.length - 1));

        let scrollHeight = 0;

        divItems.forEach((child, i) => {
            const y = i * totalItemHeight;
            gsap.set(child, { y });
        });

        // let currentIndex = 0;
        // let animating;
        // let cards = gsap.utils.toArray(".infinite-scroll-container .infinite-scroll-item");

        // // set z-index levels for the swipe panels
        // let reversedCards = [...cards].reverse();
        // reversedCards.forEach((card, index) => {
        // gsap.set(card, { zIndex: index });
        // });

        // // create an observer and disable it to start
        // let intentObserver = ScrollTrigger.observe({
        //     type: "wheel,touch",
        //     onUp: () => !animating && gotoCard(currentIndex - 1, false),
        //     onDown: () => !animating && gotoCard(currentIndex + 1, true),
        //     tolerance: 10,
        //     preventDefault: true
        // });
        // intentObserver.disable();

        //  // pin swipe section and initiate observer
        //  ScrollTrigger.create({
        //     trigger: ".infinite-scroll-container",
        //     pin: true,
        //     start: "top top",
        //     onEnter: () => {
        //         intentObserver.enable();
        //         gotoCard(currentIndex + 1, true);
        //     },
        //     onEnterBack: () => {
        //         intentObserver.enable();
        //         gotoCard(currentIndex - 1, false);
        //     }
        // });

        let intentObserver = ScrollTrigger.observe({
            type: "wheel, touch",
            onChange: ({ deltaY }) => {
                const d = -deltaY;
                const distance = d * 2;
                divItems.forEach((child) => {
                    gsap.to(child, {
                        y: `+=${distance}`
                    });
                });
                scrollHeight += distance;
                console.log("Scrolling: ", scrollHeight);
            },
            preventDefault: true
        });
        intentObserver.disable();

        ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "top bottom",
            onEnter: () => {
                intentObserver.enable();
            },
            // onLeave: () => {
            //     intentObserver.disable();
            // },
            // onEnterBack: () => {
            //     intentObserver.enable();
            // },
            // onLeaveBack: () => {
            //     intentObserver.disable();
            // }
        });

        // Observer.create({
        //     target: container,
        //     type: "wheel,touch,pointer",
        //     preventDefault: true,
        //     onChange: ({ deltaY }) => {
        //         const d = -deltaY;
        //         const distance = d * 2;
        //         divItems.forEach((child) => {
        //             gsap.to(child, {
        //                 y: `+=${distance}`
        //             });
        //         });
        //     }
        // });
    }, [
        items,
        isTilted,
        tiltDirection,
        negativeMargin
    ]);

    // function gotoCard(index, isScrollingDown) {
    //     animating = true;
    //     // return to normal scroll if we're at the end or back up to the start
    //     if ((index === cards.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
    //         intentObserver.disable();
    //         return;
    //     }
        
    //     let target = isScrollingDown ? cards[currentIndex] : cards[index];
    //     gsap.to(target, {
    //         yPercent: isScrollingDown ? -100 : 0,
    //         duration: 0.75,
    //         onComplete: () => (animating = false)
    //     });
        
    //     currentIndex = index;
    // }

    return (
        <>
            <style>
                {`
                .infinite-scroll-wrapper {
                max-height: ${maxHeight};
                }

                .infinite-scroll-container {
                width: ${width};
                }

                .infinite-scroll-item {
                height: ${itemMinHeight}px;
                margin-top: ${negativeMargin};
                }
                `}
            </style>

            <div className="infinite-scroll-wrapper">
                <div
                    className="infinite-scroll-container"
                    ref={containerRef}
                    style={{
                        // transform: getTiltTransform(),
                    }}
                >
                    {items.map((item, i) => (
                        <div
                            className="infinite-scroll-item"
                            key={i}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
