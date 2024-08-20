import styles from "./SectionVideo.module.css"
import Title from "../../components/Title";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function SectionVideo() {

    const refVideo = useRef<HTMLVideoElement>(null)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: `.${styles.sectionVideo}`,
            start: "0% 50%",
            end: "100% 50%",
            onEnter: ()=>{
                refVideo.current?.play()
            },
            onEnterBack: ()=>{
                refVideo.current?.play()
            },
            onLeave: ()=>{
                refVideo?.current?.pause()
            },
            onLeaveBack: ()=>{
                refVideo?.current?.pause()
            }
        })
    })

    return(
        <section className={styles.sectionVideo}>
            <video ref={refVideo} src="/cinematic.mp4" muted loop></video>
            <Title color="#3F3EC0" text="ame"/>
        </section>
    )
}