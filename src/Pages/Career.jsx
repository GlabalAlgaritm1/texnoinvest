import React, { useState } from 'react'
import rasm30 from '../img/img-logo/rasmB.jpg'
import { Elements } from '../Elements'

// Telegram bot token va chat ID
const BOT_TOKEN = '7933237192:AAE9a0fJTlv1LraxYKBsVrPTzbXL_LssQio'
const CHAT_ID = '7764198922'

const Career = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [comments, setComments] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const message = `
📝 <b>Yangi Rezyume!</b>
👤 Ism: <b>${fullName}</b>
📧 Email: <b>${email}</b>
📞 Telefon: <b>${phone}</b>
💼 Lavozim: <b>${jobTitle}</b>
💬 Izoh: <b>${comments}</b>
    `

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      })

      alert('Ma’lumot muvaffaqiyatli yuborildi!')
      setFullName('')
      setEmail('')
      setPhone('')
      setJobTitle('')
      setComments('')
    } catch (error) {
      alert('Xatolik yuz berdi!')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={`${Elements.Container}text-white px-4 py-10`}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10 mb-10">
        <div className="w-full md:max-w-[400px]">
          <h2 className="text-5xl font-bold mb-4 leading-tight">Career with us</h2>
          <p className="text-lg">Become part of our large and friendly team of professionals who love what they do!</p>
        </div>
        <div className="relative w-full max-w-3xl h-auto">
          <div className="absolute -left-5 -bottom-5 w-full h-full bg-green-600 rotate-[5deg] z-0 rounded-sm"></div>
          <img src={rasm30} alt="career" className="relative z-10 w-full h-auto object-cover rounded-sm shadow-lg" />
        </div>
      </div>

      <div className="max-w-4xl">
        <h2 className='text-4xl py-5'>Submit a CV</h2>
        <h3 className='text-3xl text-green-600 py-2'>Career at TexnoInvest</h3>
        <p className='py-6'>Our company greatly values specialists in their field and is always looking for new talents.</p>

        <form onSubmit={handleSubmit} className="w-full max-w-[850px] mx-auto">
          {/* 4 Inputs in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="relative w-full">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="peer w-full py-3 bg-transparent border-b border-b-gray-500 focus:border-b-blue-500 focus:outline-none placeholder-transparent"
              />
              <label
                htmlFor="fullName"
                className={`absolute left-0 text-white transition-all duration-200
                  ${fullName ? 'top-[-14px] text-sm text-gray-500' : 'top-2 text-base text-gray-300'}
                  peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-gray-500`}
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full py-3 bg-transparent border-b border-b-gray-500 focus:border-b-blue-500 focus:outline-none placeholder-transparent"
              />
              <label
                htmlFor="email"
                className={`absolute left-0 text-white transition-all duration-200
                  ${email ? 'top-[-14px] text-sm text-gray-500' : 'top-2 text-base text-gray-300'}
                  peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-gray-500`}
              >
                Your Email
              </label>
            </div>

            {/* Phone */}
            <div className="relative w-full my-7">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="peer w-full py-3 bg-transparent border-b border-b-gray-500 focus:border-b-blue-500 focus:outline-none placeholder-transparent"
              />
              <label
                htmlFor="phone"
                className={`absolute left-0 text-white transition-all duration-200
                  ${phone ? 'top-[-14px] text-sm text-gray-500' : 'top-2 text-base text-gray-300'}
                  peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-gray-500`}
              >
                Phone
              </label>
            </div>

            {/* Job Title */}
            <div className="relative w-full">
              <label htmlFor="job" className="text-gray-500 block mt-3">Job Title</label>
              <select
                id="job"
                name="job"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="bg-transparent pb-4 border-b border-b-gray-500 appearance-none focus:border-b-blue-500 focus:outline-none text-white w-full"
              >
                <option value="" disabled hidden>Lavozimni tanlang</option>
                <option className="text-white bg-black" value="Frontend Developer">Frontend Developer</option>
                <option className="text-white bg-black" value="Backend Developer">Backend Developer</option>
                <option className="text-white bg-black" value="Fullstack Developer">Fullstack Developer</option>
              </select>
            </div>
          </div>

          {/* Comments */}
          <div className="relative w-full mt-10">
            <textarea
              id="comments"
              name="comments"
              placeholder="Comments"
              rows="4"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="peer w-full bg-transparent text-white border-b py-1 placeholder-transparent focus:outline-none resize-none"
            ></textarea>
            <label
              htmlFor="comments"
              className={`absolute left-0 text-white transition-all duration-200
                ${comments ? 'top-[-14px] text-sm text-gray-500' : 'top-2 text-base text-gray-300'}
                peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-gray-500`}
            >
              Comments
            </label>
          </div>

          {/* File Input */}
          <div className="relative w-full mt-10">
            <label htmlFor="resume" className="text-white text-lg block mb-1">CV File</label>
            <input
              className="focus:outline-none border-b border-gray-500 w-full text-white bg-transparent file:text-black file:bg-white file:border-none file:px-6 file:py-1 file:rounded-none file:cursor-pointer"
              type="file"
              id="resume"
              name="resume"
            />
          </div>

          {/* Submit Button with Bootstrap Icon */}
          <div className="w-full text-right pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-transparent/10 border border-gray-400/10 hover:bg-gray-400/5 transition-all duration-300 w-full py-2 rounded text-white font-semibold mb-10 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <i className="bi bi-hourglass-split animate-spin text-lg"></i>
                  Submit...
                </>
              ) : (
                <>
                  <i className="bi bi-cloud-arrow-down-fill text-lg"></i>
                  Submit
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <hr />
    </section>
  )
}

export default Career
