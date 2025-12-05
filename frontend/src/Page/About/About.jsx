import React from 'react'
import companyImage from "../../assets/dna.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-0 max-w-7xl">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24 -mx-100 ">
        <img src={companyImage} className="w-full h-[650px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
<div className="absolute bottom-4 inset-x-4 md:bottom-12 md:left-12 text-white max-w-full">

  <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-3">
    PM신기사는
  </h3>

  <p className="text-sm md:text-xl font-light mb-4 md:mb-6">
    흔들리지 않는 원칙이 문화와 시스템으로 되어 있는 회사입니다.
  </p>

  <Link
    to="/contact"
    className="px-6 py-3 md:px-8 md:py-4 bg-gray-400 text-white rounded-lg 
               hover:bg-gray-700 transition-colors duration-300 text-base 
               md:text-lg font-semibold shadow-lg hover:shadow-xl text-center"
  >
    문의하기
  </Link>

</div>

      </div>

      <div className="mb-16 md:mb-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-800 text-center">
          회사 소개
        </h2>
        <div className="text-base md:text-lg leading-relaxed text-gray-600 space-y-4 md:space-y-6">
          <p>
            “고객과의 신뢰를 가장 중요한 가치로 생각합니다.”
          </p>
          <p>
            당사는 신기술사업금융 및 디지털 자산 시장의 성장 가능성에 주목하며, 
            데이터 기반 분석과 체계적인 리스크 관리 전략을 통해 미래 금융 환경에 대응하고 있습니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-24 px-4">
        {[
          { title: "원칙", desc: "일관된 투자 기준과 리스크 관리 체계를 준수합니다." },
          { title: "신뢰", desc: "투명한 프로세스와 장기적 파트너십을 지향합니다." },
          { title: "도전", desc: "새로운 시장과 기술 변화에 선제적으로 대응합니다." },
        ].map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-indigo-600">
              {value.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-16 md:mb-24 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-800">회사 비전</h2>
        <p className="text-lg md:text-2xl leading-relaxed text-gray-600 font-light">
          “혁신적인 신기술과 금융 솔루션을 발굴하여,
          <br className="hidden md:block" />
          더 나은 미래와 시장의 성장에 기여하겠습니다.”
        </p>
      </div>

      <div className="mb-16 md:mb-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-slate-800 text-center">
          회사 연혁
        </h2>
        <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
          {[
            { year: "2025", event: "글로벌 신기술 투자 분야 확장" },
            { year: "2023", event: "디지털 자산 및 신기술 금융 투자 강화" },
            { year: "2021", event: "변동성 시장에서 안정적 수익 구조 확립" },
            { year: "2018", event: "PM신기사 설립 및 금융업 진출" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 md:gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 text-center">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-indigo-600">
                    {item.year}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-lg">{item.event}</p>
                </div>
              </div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-800 rounded-full flex-shrink-0"></div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
