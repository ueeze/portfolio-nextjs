import React from 'react'
import ItemLayout from './ItemLayout'

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            'col-span-full lg:col-span-8 row-span-2 flex-col items-start'
          }
        >
          <h2 className="text-xl md:text-2xl font-bold text-left w-full capitalize">
            Jang Su-Jeong
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            중부대학교 정보보학과 92313570학번 장수정입니다. <br />
            아직 확실한 진로를 정하지는 못했지만, 현재 디지털포렌식에 관심을
            가지고 있습니다. <br />
            디지털 포렌식 외에도 모의해킹과 악성코드 분석 또한 배워보고 싶은
            분야 중 하나입니다. <br />
            앞으로도 많은 수업들을 들으며 경험을 해보고 진로를 결정해보려고
            노력중입니다. <br />
            또한 네트워크 관리사 2급 자격증에 이어서 다른 전공 관련 자격증과
            외국어 자격증을 딸 생각입니다. <br />
            앞으로 다양한 경험을 통해 전공 지식을 쌓고, 실무에서 바로 활용할 수
            있는 실력을 갖추고 싶습니다. <br />더 자세한 소개는 아래 동영상을
            참고해 주세요.
          </p>
        </ItemLayout>

        <ItemLayout
          className={'col-span-full xs:col-span-6 lg:col-span-4 text-white'}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            ISFP <sub className="font-semibold text-base">- MBTI -</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={'col-span-full xs:col-span-6 lg:col-span-4 text-white'}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            21 <sub className="font-semibold text-base">- AGE -</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full text-accent'}>
          <div className="fiex flex-col items-left space-y-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-white">
              Self-introduction Video
            </h2>
            <video
              controls
              className="w-full max-w-2xl h-auto rounded-xl"
              crossOrigin="anonymous"
            >
              <source src="/video/self-introduction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ItemLayout>
      </div>
    </section>
  )
}

export default AboutDetails
