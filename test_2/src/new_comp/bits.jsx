import React from 'react'
import SplitText from "../blocks/TextAnimations/SplitText/SplitText"
import FadeContent from '../blocks/Animations/FadeContent/FadeContent'
import RollingGallery from '../blocks/Components/RollingGallery/RollingGallery'






function bits() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (

        <>
            <SplitText
                text="Hello, GSAP!"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                {"praveen chandeepa weerasinghe"}
            </FadeContent>


            <div>bitsfsdfsdfsdfsdf</div>
            {/* 
            <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
                <ImageTrail
                    key={key}
                    items={[
                        'https://th.bing.com/th/id/R.fdd0fc2af709119ca2f22bde57011e89?rik=CIIVWUSFfLm5EQ&pid=ImgRaw&r=0',
                        'https://th.bing.com/th/id/R.fdd0fc2af709119ca2f22bde57011e89?rik=CIIVWUSFfLm5EQ&pid=ImgRaw&r=0',
                        'https://th.bing.com/th/id/R.fdd0fc2af709119ca2f22bde57011e89?rik=CIIVWUSFfLm5EQ&pid=ImgRaw&r=0'

                    ]}
                    variant={1}
                />
            </div> */}

            {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}



        </>
    )
}

export default bits