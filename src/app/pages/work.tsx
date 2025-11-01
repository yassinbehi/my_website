import React from 'react'
import BlurText from '@/components/BlurText'
import TiltedCard from '@/components/TiltedCard'

export default function Work() {
  return (
    <div className="bg-black text-white flex flex-col items-center min-h-screen">

    <BlurText
    text="WORK"
    delay={300}
    animateBy="words"
    direction="top"
    className="text-2xl mb-8"
    />

    <div className="w-full px-4">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center max-w-6xl">

        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="260px"
          containerWidth="100%"
          imageHeight="220px"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          containerClassName="w-full max-w-xs"
          href="https://example.com"
          overlayContent={
            <p className="tilted-card-demo-text">
              Kendrick Lamar - GNX
            </p>
          }
        />

        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="260px"
          containerWidth="100%"
          imageHeight="220px"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          containerClassName="w-full max-w-xs"
          href="https://vercel.com"
          overlayContent={
            <p className="tilted-card-demo-text">
              Kendrick Lamar - GNX
            </p>
          }
        />

        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="260px"
          containerWidth="100%"
          imageHeight="220px"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          containerClassName="w-full max-w-xs"
          href="https://github.com"
          overlayContent={
            <p className="tilted-card-demo-text">
              Kendrick Lamar - GNX
            </p>
          }
        />

      </div>
    </div>

    </div>
  )
}
