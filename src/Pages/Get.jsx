import React, { useState } from 'react'
import rasm30 from '../img/img-logo/rasmN.jpg'
import { Elements } from '../Elements'

const BOT_TOKEN = 'YOUR_BOT_TOKEN' // <-- O'zingizni token bilan almashtiring
const CHAT_ID = 'YOUR_CHAT_ID'     // <-- O'zingizni chat ID bilan almashtiring

const Get = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [comments, setComments] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const text = `
🧾 <b>Yangi Murojaat</b> 📥

👤 <b>F.I.Sh:</b> ${fullName}
📧 <b>Email:</b> ${email}
📞 <b>Telefon:</b> ${phone}
📌 <b>Murojaat mavzusi:</b> ${subject}
📝 <b>Izoh:</b> ${comments}
    `

        const sendURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

        try {
            await fetch(sendURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'HTML',
                }),
            })

            alert('Telegramga yuborildi ✅')
            setFullName('')
            setEmail('')
            setPhone('')
            setSubject('')
            setComments('')
        } catch (error) {
            alert('Xatolik yuz berdi ❌')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className={`${Elements.Container} bg-transparent py-12`}>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10 mb-16 px-4">
                {/* Text Block */}
                <div className="w-full md:max-w-[400px]">
                    <h2 className="text-5xl font-bold mb-4 leading-tight">
                        Feedback
                    </h2>
                    <p className="text-lg">
                        Do you have any questions or suggestions for cooperation? Contact us in any convenient way.
                    </p>
                </div>

                {/* Image Block */}
                <div className="relative w-full max-w-[525px] h-auto">
                    <div className="absolute -left-5 -bottom-5 w-full h-full bg-green-600 rotate-[5deg] z-0 rounded-sm"></div>
                    <img
                        src={rasm30}
                        alt="faq visual"
                        className="relative z-10 w-full h-auto object-cover rounded-sm shadow-lg"
                    />
                </div>
            </div>

            {/* Contact & Map Block */}
            <div className="max-w-6xl items-center mx-auto grid md:grid-cols-2 gap-8 px-4">
                {/* Left - Contact Info */}
                <div className="space-y-3">
                    <div className="border-b border-gray-500 pb-2 flex items-center justify-between">
                        <strong>Address</strong>
                        <div>
                            <p>Tashkent city, Bektemir district,<br /> Akhangaran highway street</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-500 pb-2 flex items-center justify-between">
                        <strong>E-mail</strong>
                        <div>
                        <p>info@texnoinvest.uz</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-500 pb-2 flex justify-between">
                        <strong>Phone</strong>
                        <div>
                            <p>+998 71 295 77 71</p>
                            <p>+998 71 295 00 08</p>
                            <p>+998 90 000 02 52</p>
                        </div>
                    </div>
                    <div className="border-b border-gray-500 pb-2 flex items-center justify-between">
                        <strong>Working hours</strong>
                        <div>
                            <p className='text-end'>Monday – Friday</p>
                            <p className='text-end'>From 9:00 AM to 6:00 PM</p>
                            <p className='text-end'>Lunch time from 1:00 PM to 2:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Right - Google Map */}
                <div className="w-full h-[420px]">
                    <iframe
                        title="location"
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.3445198600314!2d69.3053467752927!3d41.216875907057906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8da9d014f4e5%3A0xbcb9ff94d4ecba24!2sAhangaran%20Road!5e0!3m2!1sen!2s!4v1626182097389!5m2!1sen!2s`}
                        width="100%"
                        height="100%"
                        className="border-0 rounded-md w-full h-full"
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="max-w-2xl px-4 mr-auto">
                <h2 className="text-4xl py-5">Get in touch</h2>
                <h3 className="text-3xl text-green-600 py-2">Message us now</h3>
                <p className="py-6">Do you have questions or suggestions for cooperation?<br />
                    Write to us and our managers will contact you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="w-full max-w-[850px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Full Name */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Your Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
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
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
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
                        <div className="relative w-full">
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
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

                        {/* Subject of the Appeal */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className="peer w-full py-3 bg-transparent border-b border-b-gray-500 focus:border-b-blue-500 focus:outline-none placeholder-transparent"
                            />
                            <label
                                htmlFor="subject"
                                className={`absolute left-0 text-white transition-all duration-200
                  ${subject ? 'top-[-14px] text-sm text-gray-500' : 'top-2 text-base text-gray-300'}
                  peer-focus:top-[-14px] peer-focus:text-sm peer-focus:text-gray-500`}
                            >
                                Subject of the Appeal
                            </label>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="relative w-full mt-10">
                        <textarea
                            id="comments"
                            placeholder="Comments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            rows="4"
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

                    {/* Submit Button */}
                    <div className="w-full text-right pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-transparent/10 border border-gray-400/10 hover:bg-gray-400/5 transition-all duration-300 w-full py-2 rounded text-white font-semibold mb-10 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <i className="bi bi-hourglass-split animate-spin text-lg"></i>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-send-fill text-lg"></i>
                                    Submit
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Get
