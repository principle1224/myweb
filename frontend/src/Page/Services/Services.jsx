import React from 'react'
import { Link } from "react-router-dom";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: '금융 특화 시스템 개발',
      description: '자산운용 및 리스크 관리업무에 최적화된 안정적·정밀한 시스템을 구축합니다.',
      icon: '💻'
    },
    {
      id: 2,
      title: '클라우드 기반 운용 인프라',
      description: '금융 규제에 부합하는 보안 체계와 확장성을 갖춘 클라우드 인프라를 제공합니다.',
      icon: '☁️'
    },
    {
      id: 3,
      title: '금융 보안 & 컴플라이언스',
      description: 'ISMS, 금융보안원 가이드라인 준수를 기반으로 한 보안 환경을 제공합니다.',
      icon: '🔒'
    },
    {
      id: 4,
      title: '신기술 기반 금융 컨설팅',
      description: 'AI·데이터 기반 분석을 통해 최적의 투자 프로세스와 기술 전략을 제안합니다.',
      icon: '📊'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      {/* 상단 소개 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          금융 IT 전문 서비스
        </h1>
        <p className="text-xl text-gray-600">
          신기술 기반 솔루션으로 금융기관과 자산운용사의 업무 경쟁력을 강화합니다.
        </p>
      </div>

      {/* 서비스 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* 왜 우리를 선택해야 하나 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          왜 저희와 함께해야 할까요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              금융업 프로젝트 10년+
            </h4>
            <p className="text-gray-600">
              운용, 리스크, 준법 등 다양한 금융 도메인 경험 보유
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              전문 금융 IT 인력
            </h4>
            <p className="text-gray-600">
              금융 시스템·데이터 분석에 특화된 개발자 및 컨설턴트 구성
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              안정적 기술 지원
            </h4>
            <p className="text-gray-600">
              금융 서비스 특성에 맞춘 상시 운영·유지보수 체계 제공
            </p>
          </div>
        </div>
      </div>

      {/* 프로젝트 프로세스 */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          프로젝트 진행 프로세스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: '요구 분석', desc: '금융 업무 프로세스 및 규제 요건을 기반으로 정확한 분석 수행' },
            { step: '02', title: '설계 및 아키텍처', desc: '보안·성능·확장성을 고려한 금융 시스템 구조 설계' },
            { step: '03', title: '개발 및 검증', desc: '정교한 개발 및 충분한 테스트를 통해 안정성을 확보' },
            { step: '04', title: '배포 및 운영', desc: '무중단 운영을 위한 모니터링 및 유지보수 제공' },
          ].map((item, index) => (
            <div key={index} className="relative p-6 bg-white rounded-xl shadow-md">
              <div className="text-blue-600 text-5xl font-bold mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          금융 IT 프로젝트를 시작할 준비가 되셨습니까?
        </h2>
        <p className="text-xl mb-8">
          신규 시스템 구축, 고도화, 기술 문의는 아래 버튼을 통해 상담하실 수 있습니다.
        </p>

        <Link
          to="/contact"
          className='px-8 py-4 bg-blue-100 text-black rounded-lg hover:bg-gray-300 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl text-center'
        >
          문의하기
        </Link>
      </div>
    </div>
  )
}

export default Services
