import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    status: "in progress"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/contact', formData);
      if (response.status === 201) {

        alert('문의가 성공적으로 제출되었습니다.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          status: "in progress"
        });
      }

    } catch (error) {
      console.log('문의 제출 중 오류 발생:', error);
      alert('문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">문의하기</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            펀드 가입 문의 관련해서 문의바랍니다.
            문의글로만 답변드리는 점 양해부탁드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form className="bg-white rounded-2xl shadow-xl p-8" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">이름</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="이호진"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">이메일</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="example@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="010-1234-5678"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">문의 내용</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors h-40"
                    placeholder="문의하실 내용을 자세히 적어주세요."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium
                    hover:bg-blue-700 transition-colors duration-300"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">연락처 정보</h3>
              <div className="space-y-6">
                {[
                  { icon: "phone", title: "전화", info: "02-1234-5678", desc: "평일 09:00 - 18:00" },
                  { icon: "envelope", title: "이메일", info: "support@example.com", desc: "24시간 접수 가능" },
                  { icon: "map-marker-alt", title: "주소", info: "서울특별시  삼성동 123번지", desc: "본사" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <i className={`fas fa-${item.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <div className="ml-4 min-w-[20px]">
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.23592867624!2d126.92348517632166!3d37.52593542645449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3bf2ad4825%3A0x35fda8a5c2f4b950!2sOneIFC!5e0!3m2!1sko!2skr!4v1755589458455!5m2!1sko!2skr" 
                width="100%" 
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
