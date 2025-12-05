import React from 'react'
import Human1 from "../../assets/Human1.jpg"

const Leadership = () => {
  const executives = [
    {
      name: "이부사장",
      position: "COO",
      description:
        "운영 전반을 총괄하며 내부 프로세스의 안정성과 효율을 강화하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "박이사",
      position: "CTO",
      description:
        "금융 IT 및 데이터 기반 기술 전략을 수립하며 시스템 개발을 총괄합니다.",
      imageUrl: Human1,
    },
    {
      name: "김이사",
      position: "CFO",
      description:
        "재무 건전성 확보 및 투자 전략에 기반한 재무 기획과 관리 업무를 담당하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "최이사",
      position: "CMO",
      description:
        "시장 분석 기반의 마케팅 전략 수립과 브랜드 가치 제고를 추진하고 있습니다.",
      imageUrl: Human1,
    },
  ];

  const teamMembers = [
    {
      name: "정과장",
      position: "운용지원팀장",
      description: "운용 프로세스 지원 및 투자관리 시스템 운영을 담당합니다.",
      imageUrl: Human1,
    },
    {
      name: "최과장",
      position: "영업·상품팀장",
      description: "기관·법인 고객 대응과 금융상품 기획 및 제안을 담당하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "한과장",
      position: "리스크·준법팀장",
      description: "리스크 관리 체계 수립 및 준법 감시 기능을 수행합니다.",
      imageUrl: Human1,
    },
    {
      name: "김과장",
      position: "경영관리팀장",
      description: "조직 관리, 인사 정책 및 내부 운영 시스템 개선을 담당하고 있습니다.",
      imageUrl: Human1,
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          임원진 소개
        </h1>
        <p className="text-xl text-gray-600">
          전문성과 책임감을 바탕으로 성장하는 PM신기사의 리더십
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mb-24 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">CEO 인사말</h2>
          <div className="text-lg text-gray-600 space-y-6">
            <p>안녕하세요. PM신기사 대표이사 이대표입니다.</p>

            <p>
              저희 PM신기사는 변화하는 금융 환경 속에서 고객의 안정적인
              자산 성장을 최우선 가치로 삼고 있습니다. 철저한 리서치와
              책임 있는 운용을 통해 신뢰받는 금융 파트너로 자리매김하고자
              노력하고 있습니다.
            </p>

            <p>
              앞으로도 체계적인 리스크 관리와 지속 가능한 투자 전략을 기반으로
              고객 여러분께 더 나은 성과를 제공하겠습니다.
            </p>

            <p className="font-semibold mt-8">
              PM신기사 대표이사  이대표 드림
            </p>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={Human1} className="w-full aspect-[3/4] object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-gray-800">이대표</h3>
              <p className="text-indigo-600">대표이사</p>
            </div>
          </div>
        </div>
      </div>

      {/* 임원진 */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          경영진
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={executive.imageUrl}
                  alt={executive.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {executive.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  {executive.position}
                </p>
                <p className="text-gray-600">{executive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 팀 구성원 */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          핵심 구성원
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((teamMember, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={teamMember.imageUrl}
                  alt={teamMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {teamMember.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  {teamMember.position}
                </p>
                <p className="text-gray-600">{teamMember.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Leadership
